import React from 'react';
import { Link } from 'react-router-dom';
import calendlylogo from "../calendlylogo.jpg"
import { Navbar } from 'react-bootstrap';

const Navbars = () => {
    return (

    
        <Navbar className="justify-content-center">
            <nav className="navbar justify-content-center navbar">
                <a className="navbar-brand" href="#">
                    <img src={calendlylogo} width={30} height={30} alt="" />
                </a>
                {/* <li className="nav-item"> */}
                    {/* <a className="nav-link active" href="Calendly.html" style={{ color: 'blue' }}><strong>Calendly</strong></a> */}
                    <Link to="/"><strong>Calendly</strong></Link>
                {/* </li> */}
            </nav>

            {/*  Navbar for Individuals */}
            <nav className="navbar justify-content-center navbar">
                <a className="navbar-brand" href="#">
                    {/* <img src={calendlylogo} width= {30} height= {30} alt="" /> */}
                </a>
                {/* <li className="nav-item"> */}
                    {/* <a className="nav-link active" href="Individuals.html" style={{ color: 'black' }}><strong>Individuals</strong></a> */}
                    <Link  to="/Individuals"><strong>Individuals</strong></Link>
                {/* </li> */}
            </nav>

            {/*  Navbar for Teams */}
            <nav className="navbar justify-content-center navbar">
                <a className="navbar-brand" href="#">
                    {/* <img src={calendlylogo} width= {30} height= {30} alt="" /> */}
                </a>
                {/* <li className="nav-item"> */}
                    {/* <a className="nav-link active" href="Teams.html " style={{ color: 'black' }}><strong>Teams</strong></a> */}
                    <Link  to="/Teams"><strong>Teams</strong></Link>
                {/* </li> */}
            </nav>

            {/*  Navbar for Enterprise */}
            <nav className="navbar justify-content-center navbar">
                <a className="navbar-brand" href="#">
                    {/* <img src={calendlylogo} width= {30} height= {30} alt="" /> */}
                </a>
                {/* <li className="nav-item"> */}
                    {/* <a className="nav-link active" href="Enterprise.html " style={{ color: 'black' }}><strong>Enterprise</strong></a> */}
                    <Link  to="/Enterprise"><strong>Enterprise</strong></Link>
                {/* </li> */}
            </nav>





        </Navbar>
    );
}

export default Navbars;
