import React from 'react';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import Brand from '../assets/brand.png';


const MyNavbar = props => {

    return (
        <React.Fragment>
            <div className="container-fluid">

                <Navbar color="green" light>

                    <NavbarBrand href='/' className="mr-auto ml-auto">
                        <img className="navbar-brand" src={Brand} alt="" />
                    </NavbarBrand>

                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="/portfolio">Portfolio</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/resume">Resume</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/about">About J.Ahn</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/contact">Contact</NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>

                <div className="navbar-divider">&nbsp;</div>

            </div>
        </React.Fragment>
    );

};

export default MyNavbar;