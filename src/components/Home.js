import React from "react";
import HomeCarousel from './HomeCarousel';

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

                <HomeCarousel />

            </div>

        </React.Fragment>
    );

};

export default Home;