import React from 'react';
// import { Route } from 'react-router-dom';
// import Navbar from './Navbar';
import Home from './Home';
import Portfolio from "./Portfolio";
import Resume from './Resume';
import About from './About';
import Contact from './Contact';

// import NaYoung from './NaYoung';




class ContentArea extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showThisTab: 'contact'
        };
        // this.showTab = this.showTab.bind(this);
        // this.showHome = this.showHome.bind(this);
        // this.showPortfolio = this.showPortfolio.bind(this);
        // this.showResume = this.showResume.bind(this);
        // this.showAbout = this.showAbout.bind(this);
        // this.showContact = this.showContact.bind(this);
        this.printState = this.printState.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    componentDidMount() {
        console.log('*** lol johnahnz0rs is l33t ***');
        // this.setState({showThisTab: 'home'});
        // console.log('*** compDidMount ***', this.state);
    }

    // showTab(tab) {
    //     // iterate through items in this.state.pages
    //     // if item == tab, then setState true
    //     // if item != tab, then setState false
    //     console.log(tab, typeof tab);
    //     console.log(this.state.contact);
    //     for (let i of this.state.tabs) {
    //         if (i === tab) {
    //             console.log('yes this matches', tab);
    //             // this.setState({tab: true});
    //             this.setState({contact: 1});
    //         } else {
    //             console.log('this doesnt match', i);
    //         }
    //         // console.log(i, tab);
    //         // tab.toString() === i.toString() ? this.setState({tab: true}) : this.setState({tab: false});
    //         // console.log(`this.state.${i}, ${this.state.i}`);
    //     }
    // }

    // showHome() {
    //     this.setState({home: 1, portfolio: 0, resume: 0, about: 0, contact: 0});
    // }
    //
    // showPortfolio() {
    //     this.setState({home: 0, portfolio: 1, resume: 0, about: 0, contact: 0});
    // }
    //
    // showResume() {
    //     this.setState({home: 0, portfolio: 0, resume: 1, about: 0, contact: 0});
    // }
    //
    // showAbout() {
    //     this.setState({home: 0, portfolio: 0, resume: 0, about: 1, contact: 0});
    // }
    //
    // showContact() {
    //     this.setState({home: 0, portfolio: 0, resume: 0, about: 0, contact: 1});
    // }

    onClick = (e) => {
        this.setState({showThisTab: e.target.value.toLowerCase()});
    }

    printState() {
        console.log('*** printing state ***', this.state);
    }


    render() {
        return (
            <React.Fragment>
                <div className="root-div">

                    {/*<NaYoung />*/}


                    <div className="each-component">
                        <button name="home" value="home" className="btn btn-sm btn-outline-primary fake-nav-btn" onClick={this.onClick}>Home</button>
                        <button name="portfolio" value="portfolio" className="btn btn-sm btn-outline-primary fake-nav-btn" onClick={this.onClick}>Portfolio</button>
                        <button name="resume" value="resume" className="btn btn-sm btn-outline-primary fake-nav-btn" onClick={this.onClick}>Resume</button>
                        <button name="about" value="about" className="btn btn-sm btn-outline-primary fake-nav-btn" onClick={this.onClick}>About</button>
                        <button name="contact" value="Contact" type="button" className="btn btn-sm btn-outline-primary fake-nav-btn" onClick={this.onClick}>Contact</button>
                        <button className="btn btn-sm btn-outline-primary fake-nav-btn" onClick={this.printState}>print state</button>
                    </div>

                    <div className="my-header">
                        <h1>John Ahn z0rs</h1>
                        <p>"Cool guy.", "I love John Ahn."</p>
                    </div>


                    {this.state.showThisTab === 'home' && <Home />}
                    {this.state.showThisTab === 'portfolio' && <Portfolio />}
                    {this.state.showThisTab === 'resume' && <Resume />}
                    {this.state.showThisTab === 'about' && <About />}
                    {this.state.showThisTab === 'contact' && <Contact />}


                </div>
            </React.Fragment>
        );
    }
};

export default ContentArea;
