import React from 'react';
import Video from '../assets/video.png';

const HomeCarousel = props => {

    return (

        <React.Fragment>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>

                <div className="carousel-inner my-carousel-inner">
                    <div className="carousel-item active home-slides text-center">
                        <h3 className="text-bold text-underline">High IQ</h3>
                        <img className="img-fluid" src={Video} alt="video coming soon" />
                        <ul>
                            <li>Mensa member since 2017</li>
                            <li>problem solving, design thinking</li>
                            <li>strategy, business development</li>
                            <li>lifelong learner, expanding skill sets</li>
                        </ul>
                    </div>
                    <div className="carousel-item home-slides text-center">
                        <h3 className="text-bold text-underline">High EQ</h3>
                        <img className="img-fluid" src={Video} alt="video coming soon" />
                        <ul>
                            <li>conflict resolution</li>
                            <li>contract negotiations</li>
                            <li>team morale, leadership</li>
                            <li>customer service</li>
                        </ul>
                    </div>
                    <div className="carousel-item home-slides text-center">
                        <h3 className="text-bold text-underline">Thoughtful, Capable Mentee</h3>
                        <img className="img-fluid" src={Video} alt="video coming soon" />
                        <ul>
                            <li>brings value high to you!</li>
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