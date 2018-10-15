import React from "react";
import Video from '../assets/video.png';
import Instagram from '../assets/instagram.png'

const About = props => {

    return (
        <React.Fragment>
            <div className="container-fluid">

                <div className="col-12 text-center">
                    <figure className="figure">
                        <img className="figure-img about-video-placeholder" src={Video} alt="video coming soon"/>
                        {/*<figcaption className="figure-caption">What I Do & Why</figcaption>*/}
                        <figcaption className="figure-caption">Why I Do What I Do</figcaption>
                    </figure>
                </div>

                <div className="col-12 text-center about-social">
                    <a href="https://www.instagram.com/johnahnonelove/" target="_blank" rel="noopener noreferrer">
                        <figure className="figure">
                            <img className="figure-img about-social-img" src={Instagram} alt="instagram @johnahnonelove" />
                            <figcaption className="figure-caption">@johnahnonelove</figcaption>
                        </figure>
                    </a>
                </div>

            </div>
        </React.Fragment>
    );

};

export default About;