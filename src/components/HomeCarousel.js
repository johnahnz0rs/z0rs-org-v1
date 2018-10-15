import React from 'react';
import Video from '../assets/video.png';

const HomeCarousel = props => {

    return (

        <React.Fragment>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">

                {/* page indicators */}
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>

                <div className="carousel-inner my-carousel-inner">
                    {/*slide 0: High EQ*/}
                    <div className="carousel-item active home-slides text-center">
                        <h3 className="slide-header">High EQ</h3>
                        <img className="slide-img" src={Video} alt="video coming soon" />
                        <ul className="list-unstyled">
                            <li>Conflict Resolution</li>
                            <li>Customer Service</li>
                            <li>Negotiations</li>
                            <li>Lead by Example</li>
                        </ul>
                    </div>

                    {/*slide 1: High IQ*/}
                    <div className="carousel-item home-slides text-center">
                        <h3 className="slide-header">High IQ</h3>
                        <img className="slide-img" src={Video} alt="video coming soon" />
                        <ul className="list-unstyled">
                            <li>Problem Solving</li>
                            <li>Design Thinking</li>
                            <li>Strategy</li>
                            <li>Business Development</li>
                        </ul>
                    </div>

                    {/*slide 2: Mentee*/}
                    <div className="carousel-item home-slides text-center">
                        <h3 className="slide-header">Thoughtful, Capable Mentee</h3>
                        <img className="slide-img" src={Video} alt="video coming soon" />
                        <ul className="list-unstyled">
                            <li>Highly Coachable</li>
                            <li>Lifelong Learner</li>
                            <li>Capable</li>
                            <li>Earnest Worker</li>
                        </ul>
                    </div>
                </div>

                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>


            {/* this is how to embed videos w bootstrap */}
            {/* https://getbootstrap.com/docs/4.1/utilities/embed/ */}

            {/*<div className="embed-responsive embed-responsive-16by9">*/}
                {/*<iframe className="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowFullScreen />*/}
            {/*</div>*/}

            {/* this is how to embed videos w bootstrap */}
            {/* https://getbootstrap.com/docs/4.1/utilities/embed/ */}

        </React.Fragment>

    );

};

export default HomeCarousel;