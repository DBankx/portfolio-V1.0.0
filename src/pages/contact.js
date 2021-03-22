import React, {useState, useCallback} from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import ReactMapGL, {Marker, Popup} from 'react-map-gl';
import * as yup from "yup";
import {Formik} from "formik";

export default function Contact() {
    const MAPBOX_TOKEN = 'pk.eyJ1IjoiZGJhbmt4IiwiYSI6ImNrandpNnRpcTBpc24ycGxja3hjaHdudnAifQ.IsBBI65qv2qJKZPd0kIyYw';

    const [showPopup, togglePopup] = React.useState(false);


    const [successMessage, setSuccessMessage] = useState("");
    const [failureMessage, setFailureMessage] = useState("");
    
    const [viewport, setViewport] = useState({
        latitude: 6.4646,
        longitude: 3.5725,
        zoom: 14
    });
    

    const handleViewportChange = useCallback(
        (newViewport) => setViewport(newViewport),
        []
    );
    
    const validationSchema = yup.object().shape({
        name: yup.string().required("Your full name is required!"),
        email: yup.string().email("Please use a valid email address").required("Your email is required"),
        message: yup.string().required("Your full name is required!")
    })
    
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
                        <div role="marker" onClick={() => togglePopup(!showPopup)} id="marker" />
                    </Marker>
                </ReactMapGL>
                </div>
            
            
            <h2 className="title title--h3">Contact Form</h2>

                <Formik validationSchema={validationSchema} initialValues={{name: "", email:"", message: ""}} onSubmit={(values, action) => {
                    const formData = new FormData();
                    formData.append("name", values.name);
                    formData.append("email", values.email);
                    formData.append("message", values.message);
                    
                    // send to getform.io
                    fetch("https://getform.io/f/aa96ef04-8a99-4b00-85ca-cb0d0ee4105c", {
                        method: "POST",
                        body: formData
                    }).then(() => {
                        setFailureMessage("");
                        setSuccessMessage("Thank you for message, i'll get back to you soon! 🎉")
                        action.resetForm();
                    }).catch(() => {
                        setSuccessMessage("");
                        setFailureMessage("There was an error submitting your form, Please try again! 💢");
                    }).finally(() => action.setSubmitting(false));
                }}>
                    {({
                        handleSubmit,
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        isValid,
                        dirty,
                        isSubmitting
                      }) => (
            <form onSubmit={handleSubmit} id="contact-form" className="contact-form" >
                <div className="row">
                    <div className={`form-group col-12 col-md-6 ${!!errors.name && touched.name && "has-error"}`}>
                        <i className="font-icon icon-user" />
                        <input type="text" className="input input__icon form-control" id="name" name="name" placeholder="Full name" value={values.name}  autoComplete="on" onChange={handleChange} onBlur={handleBlur} />
                        {errors.name && touched.name  && <div className="help-block with-errors">{errors.name}</div>}
                    </div>
                    <div className={`form-group col-12 col-md-6 ${!!errors.email && touched.email && "has-error"}`}>
                        <i className="font-icon icon-user" />
                        <input type="email" className="input input__icon form-control" id="email" name="email" placeholder="Email address" value={values.email}  autoComplete="on" onChange={handleChange} onBlur={handleBlur} />
                        {errors.email && touched.email && <div className="help-block with-errors">{errors.email}</div>}
                    </div>
                    <div className={`form-group col-12 col-md-12 ${!!errors.message && touched.message && "has-error"}`}>
                        <textarea className="textarea form-control has-error" id="message" name="message" placeholder="Your Message"  rows="4" required="required" onChange={handleChange} onBlur={handleBlur} value={values.message} />
                        {errors.message && touched.message && <div className="help-block with-errors">{errors.message}</div>}
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-6 order-2 order-md-1 text-center text-md-left">
                        <div id="validator-contact" className={`hidden ${failureMessage.length > 0 ? "validation-danger" : "validation-success"}`}>
                            {successMessage}
                            {failureMessage}
                        </div>
                    </div>
                    <div className="col-12 col-md-6 order-1 order-md-2 text-right">
                        <button disabled={!isValid || isSubmitting || !dirty} type="submit" className="btn">{isSubmitting ? <div><div className="spinner-border spinner-border-sm text-light" role="status" /> Sending message...</div> : <div><i className="font-icon icon-send" /> Send Message</div>}</button>
                    </div>
                </div>
            </form>
                    )}
                </Formik>
            </div>
        </Layout>
    )
}
