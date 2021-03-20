import React, {useState, useCallback} from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import ReactMapGL, {Marker, Popup} from 'react-map-gl';
import mapMarker from "../images/icons/pin.svg";

export default function Contact() {
    const MAPBOX_TOKEN = 'pk.eyJ1IjoiZGJhbmt4IiwiYSI6ImNrandpNnRpcTBpc24ycGxja3hjaHdudnAifQ.IsBBI65qv2qJKZPd0kIyYw';

    const [showPopup, togglePopup] = React.useState(false);
    
    const [viewport, setViewport] = useState({
        latitude: 6.4646,
        longitude: 3.5725,
        zoom: 14
    });

    const handleViewportChange = useCallback(
        (newViewport) => setViewport(newViewport),
        []
    );
    
    return (
        <Layout>
            <SEO title="Contact" description="Hello folks dami here. You can contact me through the contact form below on this page.
                    Please feel free to contact me, don't be shy guys, just remember dami is always open to talk about web technologies and projects" keywords={[
                        "Damilola",
                "Hundeyin",
                "Software engineer",
                "Web developer",
                "Fullstack developer",
                "Javascript",
                "Asp.Net core",
                "C#",
                ".Net",
                "React",
                "NodeJs",
                "technology",
                "Programming",
                "Coding"
            ]} />
            
            <div className="pb-4">
            <div className="pb-2">
                <h1 className="title title--h1 first-title title__separate">Contact</h1>
            </div>

                <div className="map">
                <ReactMapGL
                    onViewportChange={handleViewportChange}
                    mapboxApiAccessToken={MAPBOX_TOKEN}
                    {...viewport}
                    className="map"
                    width="100%"
                    height="100%"
                >
                    {showPopup && <Popup
                        latitude={6.4646}
                        longitude={3.5725}
                        closeButton={true}
                        closeOnClick={false}
                        onClose={() => togglePopup(false)}
                        anchor="bottom" >
                        <div>I stay in lagos nigeria, please feel free to contactme about anything</div>
                    </Popup>}
                    <Marker latitude={6.4646} longitude={3.5725} offsetLeft={-20} offsetTop={-10}>
                        <div onClick={() => togglePopup(!showPopup)} id="marker" />
                    </Marker>
                </ReactMapGL>
                </div>
            
            
            <h2 className="title title--h3">Contact Form</h2>

            <form id="contact-form" className="contact-form" method="post" action="https://getform.io/f/aa96ef04-8a99-4b00-85ca-cb0d0ee4105c" data-toggle="validator">
                <div className="row">
                    <div className="form-group col-12 col-md-6">
                        <i className="font-icon icon-user" />
                        <input type="text" className="input input__icon form-control" id="name" name="name" placeholder="Full name" required="required" autoComplete="on" onInvalid="setCustomValidity('Fill in the field')" onKeyUp="setCustomValidity('')" />
                            <div className="help-block with-errors" />
                    </div>
                    <div className="form-group col-12 col-md-6">
                        <i className="font-icon icon-envelope" />
                        <input type="email" className="input input__icon form-control" id="email" name="email" placeholder="Email address" required="required" autoComplete="on" onInvalid="setCustomValidity('Email is incorrect')" onKeyUp="setCustomValidity('')" />
                            <div className="help-block with-errors" />
                    </div>
                    <div className="form-group col-12 col-md-12">
                        <textarea className="textarea form-control" id="message" name="message" placeholder="Your Message"  rows="4" required="required" onInvalid="setCustomValidity('Fill in the field')" onKeyUp="setCustomValidity('')" />
                        <div className="help-block with-errors" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-6 order-2 order-md-1 text-center text-md-left">
                        <div id="validator-contact" className="hidden" />
                    </div>
                    <div className="col-12 col-md-6 order-1 order-md-2 text-right">
                        <button type="submit" className="btn"><i className="font-icon icon-send" /> Send Message</button>
                    </div>
                </div>
            </form>
            </div>
        </Layout>
    )
}
