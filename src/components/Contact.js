import React from "react";

const Contact = props => {

    return (
        <React.Fragment>
            <div className="each-component">
                <h3>Contact Me</h3>
                <div className="row">
                    <div className='col-md-8'>

                        {/*<form id="contact-form" action="https://script.google.com/macros/s/AKfycbyeufhC4_s7sGZUFIyeQCr9W3DwtTUD1jaOJqJsuQ/exec" method="POST" className="gform">*/}
                        {/*<form id="contact-form" action="mailto:johnahn123@gmail.com" method="POST" encType="text/plain" className="gform" target="_blank">*/}
                        <form id="contact-form" action="https://formspree.io/johnahn123@gmail.com" method="POST">
                            <div className="form-group">
                                <label for="name">Name: </label>
                                <input type="text" className="form-control" id="name" name="name" />
                            </div>

                            <div className="form-group">
                                <label for="company">Company: </label>
                                <input type="text" className="form-control" id="company" name="company" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email: </label>
                                <input type="email" className="form-control" id="email" name="email" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="phone">Phone: </label>
                                <input type="tel" className="form-control" id="phone" name="phone" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="msg">Message: </label>
                                <textarea className="form-control" id="message" name="message" rows="4"> </textarea>
                            </div>

                            <input type="submit" className="btn btn-lg btn-primary" value="Send" />
                        </form>
                    </div>
                    <div className="col-md-4">
                        <p className="text-center">Contact Info</p>
                        <ul className="contact-ul">
                            <li>Email: johnahn@z0rs.org</li>
                            <li>Phone: 213-503-4625</li>
                        </ul>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );

};

export default Contact;