import React from 'react';

const Footer = () => {
    return (
        <div>
            <div className="row row-7">
                <div className="col-md-3">
                    <h3><strong>Easy</strong></h3>
                    <h3><strong style={{ color: 'blue' }}>ahead</strong></h3>
                    <p>
                        We take the work out of connecting with others
                        so you can accomplish more
                    </p>
                    <label htmlFor="languages" />
                    <select id="English" name="languages">
                        <option>English</option>
                        <option>French</option>
                        <option>Spanish</option>
                        <option>Arabic</option>
                    </select><br /><br />
                </div>
                <div className="col-md-3">
                    <h6><strong style={{ color: 'midnightblue' }}>About</strong></h6>
                    <p>About Calendly</p>
                    <p>Contact Sales</p>
                    <p>Newsroom</p>
                    <p>Careers</p>
                    <p>Security</p>
                </div>
                <div className="col-md-3">
                    <h6><strong style={{ color: 'midnightblue' }}>Solutions</strong></h6>
                    <p>Customer Success</p>
                    <p>Sales</p>
                    <p>Recruiting</p>
                    <p>Education</p>
                    <p>Marketing</p>
                </div>
                <div className="col-md-3">
                    <h6><strong style={{ color: 'midnightblue' }}>Popular Features</strong></h6>
                    <p>Embed Calendly</p>
                    <p>Available</p>
                    <p>Sending Notifications</p>
                    <p>Using Calendly Mobile</p>
                </div>
            </div>







        </div>


    );
}

export default Footer;
