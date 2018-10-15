import React from 'react';
import { Route } from 'react-router-dom';
import MyNavBar from './MyNavbar';
import Home from './Home';
import Portfolio from "./Portfolio";
import Resume from './Resume';
import About from './About';
import Contact from './Contact';


// import NaYoung from './NaYoung';




class ContentArea extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        console.log('*** lol johnahnz0rs is l33t ***');
    }



    render() {
        return (
            <React.Fragment>
                <div className="root-div">


                    <MyNavBar />

                    <Route exact path="/" component={Home} />
                    {/*<Route path="/home" component={Home} />*/}
                    <Route path="/portfolio" component={Portfolio} />
                    <Route path="/resume" component={Resume} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />


                </div>
            </React.Fragment>
        );
    }
}

export default ContentArea;
