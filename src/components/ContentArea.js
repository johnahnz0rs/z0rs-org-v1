import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Home';
import Portfolio from "./Portfolio";
import Resume from './Resume';
import About from './About';
import Contact from './Contact';


// import MyNavBar from './MyNavbar';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import Brand from '../assets/brand.png';


// import NaYoung from './NaYoung';




class ContentArea extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showThisTab: 'home'
        };
        this.onClick = this.onClick.bind(this);
    }

    componentDidMount() {
        console.log('*** lol johnahnz0rs is l33t ***');
    }

    onClick = (e) => {
        this.setState({showThisTab: e.target.id});
    };



    render() {
        return (
            <React.Fragment>
                <div className="root-div container-fluid">

                    <Navbar>

                        {/*<NavbarBrand id="home" href="#" className="mr-auto ml-auto" onClick={this.onClick}>*/}
                            {/*<img className="navbar-brand" src={Brand} alt="" />*/}
                        {/*</NavbarBrand>*/}
                        <NavbarBrand href="#" className="mr-auto ml-auto">
                            <img id="home" className="navbar-brand" src={Brand} alt="" onClick={this.onClick} />
                        </NavbarBrand>

                        <Nav className="mr-auto" navbar>

                            <NavItem>
                                <NavLink id="portfolio" onClick={this.onClick} href="#">Portfolio</NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink id="resume" onClick={this.onClick} href="#">Resume</NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink id="about" onClick={this.onClick} href="#">About J.Ahn</NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink id="contact" onClick={this.onClick} href="#">Contact</NavLink>
                            </NavItem>

                        </Nav>

                        {/*<NavbarBrand href='/z0rs-org/' className="mr-auto ml-auto">*/}
                            {/*<img className="navbar-brand" src={Brand} alt="" />*/}
                        {/*</NavbarBrand>*/}

                        {/*<Nav className="mr-auto" navbar>*/}
                            {/*<NavItem>*/}
                                {/*<NavLink href="/z0rs-org/portfolio">Portfolio</NavLink>*/}
                            {/*</NavItem>*/}
                            {/*<NavItem>*/}
                                {/*<NavLink href="/z0rs-org/resume">Resume</NavLink>*/}
                            {/*</NavItem>*/}
                            {/*<NavItem>*/}
                                {/*<NavLink href="/z0rs-org/about">About J.Ahn</NavLink>*/}
                            {/*</NavItem>*/}
                            {/*<NavItem>*/}
                                {/*<NavLink href="/z0rs-org/contact">Contact</NavLink>*/}
                            {/*</NavItem>*/}
                        {/*</Nav>*/}
                    </Navbar>

                    {/*<Route exact path="/" component={Home} />*/}
                    {/*<Route path="/home" component={Home} />*/}
                    {/*<Route path="/portfolio" component={Portfolio} />*/}
                    {/*<Route path="/resume" component={Resume} />*/}
                    {/*<Route path="/about" component={About} />*/}
                    {/*<Route path="/contact" component={Contact} />*/}

                    {this.state.showThisTab === 'home' && <Home />}
                    {this.state.showThisTab === 'portfolio' && <Portfolio />}
                    {this.state.showThisTab === 'resume' && <Resume />}
                    {this.state.showThisTab === 'about' && <About />}
                    {this.state.showThisTab === 'contact' && <Contact />}


                </div>
            </React.Fragment>
        );
    }
}

export default ContentArea;
