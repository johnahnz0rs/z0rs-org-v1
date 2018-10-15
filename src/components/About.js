import React from "react";
import Video from '../assets/video.png';

const About = props => {

    return (
        <React.Fragment>
            <div className="each-component container-fluid">

                <div className="about-item col-md-5 text-center">
                    <figure className="figure">
                        <img className="figure-img about-video-placeholder" src={Video} alt="video coming soon"/>
                        <figcaption className="figure-caption">John Ahn z0rs' Mission</figcaption>
                    </figure>
                </div>

                <div className="about-item col-md-5 text-center">
                    <figure className="figure">
                        <img className="figure-img about-video-placeholder" src={Video} alt="video coming soon"/>
                        <figcaption className="figure-caption">What's My Motivation?</figcaption>
                    </figure>
                </div>

                <div className="about-item col-md-5 text-center">
                    <figure className="figure">
                        <img className="figure-img about-video-placeholder" src={Video} alt="video coming soon"/>
                        <figcaption className="figure-caption">Why Am I a Coder?</figcaption>
                    </figure>
                </div>

                <div className="about-item col-md-5 text-center">
                    <figure className="figure">
                        <img className="figure-img about-video-placeholder" src={Video} alt="video coming soon"/>
                        <figcaption className="figure-caption">What's My Legacy?</figcaption>
                    </figure>
                </div>

                {/*<img className="img-fluid" src={Video} alt="video coming soon" />*/}
            </div>
        </React.Fragment>
    );

};

export default About;