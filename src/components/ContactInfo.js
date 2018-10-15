import React from 'react';
import Email from '../assets/email.png';
import Phone from '../assets/phone.png';
import Text from '../assets/text.png';
import LinkedIn from '../assets/linkedin.png';
import GitHub from '../assets/github.png';
import Instagram from '../assets/instagram.png';

const ContactInfo = props => {

    return (

        <React.Fragment>
            <h3 className="text-center contact-info-header">Contact Info</h3>
            {/*<ul className="contact-ul list-inline">*/}
                {/*<li className="col-sm-3 list-inline-item">*/}
                    {/*<a href="mailto:johnahn@z0rs.org" target="_blank">*/}
                        {/*<figure className="figure text-center">*/}
                            {/*<img src={Email} className="figure-img contact-logo" alt="Email"/>*/}
                            {/*<figcaption className="figure-caption">johnahn@z0rs.org</figcaption>*/}
                        {/*</figure>*/}
                    {/*</a>*/}
                {/*</li>*/}
                {/*<li className="col-sm-3 list-inline-item">*/}
                    {/*<a href="tel:1-213-503-4625">*/}
                        {/*<figure className="figure text-center">*/}
                            {/*<img src={Phone} className="figure-img contact-logo" alt="Phone" />*/}
                            {/*<figcaption className="figure-caption">(213) 503-4625</figcaption>*/}
                        {/*</figure>*/}
                    {/*</a>*/}
                {/*</li>*/}
                {/*<li className="col-sm-3 list-inline-item">*/}
                    {/*<a href="sms:1-213-503-4625">*/}
                        {/*<figure className="figure text-center">*/}
                            {/*<img src={Text} className="figure-img contact-logo" alt="Text" />*/}
                            {/*<figcaption className="figure-caption">Text Me</figcaption>*/}
                        {/*</figure>*/}
                    {/*</a>*/}
                {/*</li>*/}
                {/*<li className="col-sm-5 list-inline-item">*/}
                    {/*<a href="https://www.linkedin.com/in/johnahn123/" target="_blank">*/}
                        {/*<figure className="figure text-center">*/}
                            {/*<img src={LinkedIn} className="figure-img contact-logo" alt="LinkedIn" />*/}
                            {/*<figcaption className="figure-caption">LinkedIn</figcaption>*/}
                        {/*</figure>*/}
                    {/*</a>*/}
                {/*</li>*/}
                {/*<li className="col-sm-5 list-inline-item">*/}
                    {/*<li className=*/}
                    {/*<a href="https://github.com/johnahnz0rs" target="_blank">*/}
                        {/*<figure className="figure text-center">*/}
                            {/*<img src={GitHub} className="figure-img contact-logo" alt="GitHub" />*/}
                            {/*<figcaption className="figure-caption">GitHub</figcaption>*/}
                        {/*</figure>*/}
                    {/*</a>*/}
                {/*</li>*/}
            {/*</ul>*/}


            <dl className="row text-center">

                <dt className="col-sm-4">Email</dt>
                <dd className="col-sm-8"><img className="contact-logo" src={Email} alt="Email" /> <a className="align-baseline" href="mailto:johnahn@z0rs.org?subject=Hello,+John&body=%0D%0A%0D%0AMessage+sent+from+z0rs.org">johnahn@z0rs.org</a></dd>

                <dt className="col-sm-4">Phone</dt>
                <dd className="col-sm-8"><img className="contact-logo" src={Phone} alt="Phone" /> <a href="tel:1-213-503-4625">(213) 503-4625</a></dd>

                <dt className="col-sm-4">Text Message</dt>
                <dd className="col-sm-8"><img className="contact-logo" src={Text} alt="Text" /> <a href="sms:1-213-503-4625">Text Me</a></dd>

                <dt className="col-sm-4">LinkedIn</dt>
                <dd className="col-sm-8"><img className="contact-logo" src={LinkedIn} alt="LinkedIn" /> <a href="https://www.linkedin.com/in/johnahn123/" target="_blank">@johnahn123</a></dd>

                <dt className="col-sm-4">GitHub</dt>
                <dd className="col-sm-8"><img className="contact-logo" src={GitHub} alt="GitHub" /> <a href="https://github.com/johnahnz0rs" target="_blank">@johnahnz0rs</a></dd>

                <dt className="col-sm-4">Instagram</dt>
                <dd className="col-sm-8"><img className="contact-logo" src={Instagram} alt="Instagram" /> <a href="https://www.instagram.com/johnahnonelove/" target="_blank">@johnahnonelove</a></dd>


            </dl>

        </React.Fragment>

    );

}

export default ContactInfo;