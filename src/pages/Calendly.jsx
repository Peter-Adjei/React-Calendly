import React from 'react';

const Calendly = () => {
    return (
        <div>
            <div className="container">
                <div className="row row1">
                    <div className="col-md-6">
                        <h3><strong>Easy</strong></h3>
                        <h3><strong>Scheduling</strong></h3>
                        <h3><strong style={{ color: 'blue' }}>ahead</strong></h3>
                        <p id="lorem">Lorem ipsum dolor sit,
                            amet consectetur adipisicing elit.
                            Unde corrupti laudantium quos a optio commodi vel est,
                            fugiat mollitia, dolor cupiditate? Assumenda, ipsum.
                            Aliquid, eveniet ut? Aut earum illum corporis?
                        </p>
                        <label htmlFor="Email" />
                        <input type="email" name="Email" id="Email" placeholder="Enter Your Email" />
                        <button type="button" className="btn btn-dark">Sign Up</button>
                        <h6>Create your free Account. No credit Card Required</h6>
                    </div>
                    <div className="col-md-6">
                        <img src="images/home 1.jpg" className="img-fluid homeimg" alt="Marking your schedule" />
                    </div>
                </div>
                <div className="row logo-row row2">
                    <div className="col-md-12">
                        <div className="text-center">
                            <h4 id="Simplified">Simplified Scheduling for more than</h4>
                            <h4><strong style={{ color: 'blue' }}>10,000,000</strong> users worldwide</h4>
                            <div className="comapny-logos">
                                <img src="images/compass.png" className="logo-padding" alt="logo of compass" />
                                <img src="images/dropbox.png" className="logo-padding" alt="logo of dropbox" />
                                <img src="images/ebay.png" className="logo-padding" alt="logo of ebay" />
                                <img src="images/lazboy.jfif" className="logo-padding" alt="logo of loveboy" />
                                <img src="images/twilio.png" className="logo-padding" alt="twillio" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row row3">
                    <div className="col-md-4">
                        <h5><strong id="number">1.</strong>Create</h5>
                        <h5>simple rules</h5>
                        <p>
                            Let Calendly Know your <br />
                            availability preference and<br />
                            it'll do the work for you
                        </p>
                    </div>
                    <div className="col-md-4">
                        <h5><strong id="number">2.</strong>Share</h5>
                        <h5>your link</h5>
                        <p>
                            Send guest your Calendly<br />
                            link or embed it on your<br />
                            website
                        </p>
                    </div>
                    <div className="col-md-4">
                        <h5><strong id="number">3.</strong>Get</h5>
                        <h5>booked</h5>
                        <p>
                            They pick a time and the<br />
                            event is added to your<br />
                            calender
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Calendly;





// import React from 'react';

// const Calendly = () => {
//     return (
//         <div>
//             <div className="container">
//                 {/* ... */}
//                 <div className="row row1">
//                     <div className="col-md-6">
//                         {/* ... */}
//                         <label htmlFor="Email">Enter Your Email</label>
//                         <input type="email" name="Email" id="Email" placeholder="Enter Your Email" />
//                         <button type="button" className="btn btn-dark">Sign Up</button>
//                         <h6>Create your free Account. No credit Card Required</h6>
//                     </div>
//                     {/* ... */}
//                 </div>
//                 <div className="row logo-row row2">
//                     <div className="col-md-12">
//                         {/* ... */}
//                         <div className="comapny-logos">
//                             <img src="images/compass.png" className="logo-padding" alt="logo of compass" />
//                             <img src="images/dropbox.png" className="logo-padding" alt="logo of dropbox" />
//                             <img src="images/ebay.png" className="logo-padding" alt="logo of ebay" />
//                             <img src="images/lazboy.jfif" className="logo-padding" alt="logo of loveboy" />
//                             <img src="images/twilio.png" className="logo-padding" alt="twillio" />
//                         </div>
//                     </div>
//                 </div>
//                 <div className="row row3">
//                     {/* ... */}
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Calendly;
