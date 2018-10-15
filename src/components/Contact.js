import React from "react";
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

const Contact = props => {

    return (
        <React.Fragment>
            <div className="each-component container">
                <div className="row">
                    <div className='col-md-6'>

                        <ContactForm />

                    </div>
                    <div className="col-md-6">

                        <ContactInfo />

                    </div>
                </div>
            </div>
        </React.Fragment>
    );

};

export default Contact;