---
title: How to build a simple in-app notification system using signalr and mediatr
date: Mar 21, 2021
tags: [Csharp, Mediatr, Asp.Net core, Signal R]
cover: ./signalr.png
excerpt: Building a real time, in-app notification doesnt have to be super complicated, using signal r and mediatr makes it super easy to do.
---

The world of .net core is vast, elegant and robust and in this world i was introduced to two technologies that i love dearly and use in all my projects, which are **Mediatr** & **Signal R**.

###What is Mediatr?
For those new to the world or Asp.net or programming in general and have no idea about the [MediatR package](https://www.nuget.org/packages/MediatR/) or the [mediator pattern](https://www.infoworld.com/article/3204528/how-to-use-the-mediator-design-pattern-in-c.html#:~:text=The%20mediator%20pattern%20is%20a,can%20be%20implemented%20using%20C%23.)

>*In software engineering, the mediator pattern defines an object that encapsulates how a set of objects interact. This pattern is considered to be a behavioral pattern due to the way it can alter the program’s running behavior.*

The main reason i hear most people use the mediator package / pattern is mainly due to the [CQRS pattern](https://martinfowler.com/bliki/CQRS.html#:~:text=CQRS%20stands%20for%20Command%20Query,you%20use%20to%20read%20information.) which is used for the segregation of code i.e each request to an api / server can either be a 

**command**
: A request that writes to the database.

or

**query**
: A request that queries the database for results.

and each one of these have an accompanying handler which is used to handle the request and return some data.

###What is Signal R
SignalR is a wonderful, easy and fast way to provide users with push messages - and is also built into ASP.NET Core 3.
It is a way for a server and client to establish real time connection between each other without closing the pipeline after a request has finished processing.

**Now i will show you how to combine these two together to create notifications**

---

First we need to create the notification object, obviously this is subject to your specific needs, but here we will use something generic


```c#
public class AppNotification : INotification
    {
        public string ToUserId { get; set; }
        public string FromUserId { get; set; }
        public string FromUserName { get; set; }
        public string FromUserAvatar { get; set; }
        public string Message { get; set; }
        public NotificationStatus Status { get; set; }
        public DateTime CreatedAt { get; set; }
        public NotificationType Type { get; set; }
        public Guid NotifierObjectId { get; set; }

        public AppNotification(
            string toUserId, 
            string fromUserId, string fromUserName, string fromUserAvatar, 
            string message, Guid notifierObjectId, DateTime createdAt, NotificationType type, NotificationStatus status)
        {
            ToUserId = toUserId;
            FromUserId = fromUserId;
            FromUserAvatar = fromUserAvatar;
            FromUserName = fromUserName;
            Message = message;
            NotifierObjectId = notifierObjectId;
            CreatedAt = createdAt;
            Type = type;
            Status = status;
        }
    }

    public enum NotificationType
    {
        Bid, 
        Message,
        Follow,
        Assign,
        Order 
    }

    public enum NotificationStatus
    {
        UnRead,
        Read
    }
```
As seen above the class *AppNotification* implements the *INotification* interface and that interface is gotten from the mediatr package

We throw the MediatR notification at the appropriate places, e.g. when a new entity has been added to the database or been updated. The basic idea is that a notification is as small as possible and only entails necessary information needed by the client.


Next we will need a signalR hub, this is necessary for communication between the client and server. All clients will be connected to this hub and will be supplied with the corresponding events.

```c#
public class NotificationHub : Hub
{

}
```
**Now the real fun begins**

For example, lets create a command that accepts an order from a customer

```c#
public class AcceptOrderCommand : IRequest
{
    public Guid orderId {get; set;}
    public User OwnerOfOrder {get; set;}
    public User Customer {get; set;}
    
}
```

The above code is going to be a basic request to the server to update the order with that specific order id.

*Notice the IRequest does not have a return type, this is because commands typically should not return anything back to the client*

The accompanying handler for that command is below:
```c#
public class AcceptCommandHandler : IRequestHandler<AcceptOrderCommand>
{
        private readonly DataContext _context;
        private readonly IMediator _mediator;

        public MarkOrderAsStartedHandler(DataContext context, IMediator mediator, s)
        {
            _context = context;
            _mediator = mediator;
        }
        
        public async Task<Unit> Handle(AcceptOrderHandler request, CancellationToken cancellationToken)
        {
        // business logic implementation ....
        
        // sending the notification that order has been accepted
        // There are three ways to do this
        
        // first --> this method awaits all handlers
        await _mediator.Publish(new AppNotification(...what you need))
        
        // second --> this does not wait, but executes the notification in background
        _mediator.Pubish(new AppNotification(...what you need))
        }
        
        // third --> this does not wait, but executes the notification in background
Task.Run(async () => await _mediatr.Publish(new MyNotification())); 
        
}
```

The above code is a simple vague implementation of a request handler, but i want us to focus at the last bits of code. the *_mediator.publish* method raises a notification of our AppNotification object created before, now all we need to do is to catch this notification using a notification handler and we can do what ever we want with the notification. In our case we want to send to signal r.

We catch the notification raised in the code below:
```c#
 public class SendNotificationToClient : INotificationHandler<AppNotification>
    {
        private readonly IHubContext<NotificationHub> _hubContext;

        public NotifyUserOnActionHandler(IHubContext<NotificationHub> hubContext)
        {
            _hubContext = hubContext;
        }
        
        public async System.Threading.Tasks.Task Handle(AppNotification notification, CancellationToken cancellationToken)
        {
            string recipientUserId = notification.ToUserId;

            await _hubContext
                .Clients.User(recipientUserId).SendAsync("ReceiveNotification", notification, cancellationToken);
        }
    }
```

The above code is very easy to understand and easily interpreted like i promised 😊, basically what were doing above is injecting our notification hub context and sending the raised notification to the client with the specified *ToUserId* in our instantiated AppNotification object.

***And thats it!! were done 👌*** 

Now the client that has the id we sent the notification to will be able to receive the data on the client in real time.

---
Thank you for reading ❤
---