import React from "react";

const Home = props => {

    return (
        <React.Fragment>
            <div className="each-component">
                {/*<p>I am Home</p>*/}
                {/*<ul>*/}
                    {/*<li>Carousel item: EQ</li>*/}
                    {/*<li>Carousel item: IQ</li>*/}
                    {/*<li>Carousel item: Mentee</li>*/}
                {/*</ul>*/}

                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner my-carousel-inner">
                        <div className="carousel-item active home-slides text-center">
                            <h3 className="text-bold text-underline">High IQ</h3>
                            <ul>
                                <li>Mensa member since 2017</li>
                                <li>problem solving, design thinking</li>
                                <li>strategy, business development</li>
                                <li>lifelong learner, expanding skill sets</li>
                            </ul>
                        </div>
                        <div className="carousel-item home-slides text-center">
                            <h3 className="text-bold text-underline">High EQ</h3>
                            <ul>
                                <li>conflict resolution</li>
                                <li>contract negotiations</li>
                                <li>team morale, leadership</li>
                                <li>customer service</li>
                            </ul>
                        </div>
                        <div className="carousel-item home-slides text-center">
                            <h3 className="text-bold text-underline">Thoughtful, Capable Mentee</h3>
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

            </div>
        </React.Fragment>
    );

};

export default Home;