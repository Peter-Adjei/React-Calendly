import React from 'react';
import Footer from '../components/Footer';


const Teams = () => {
    return (
        <div>
            <div className="container">
                <div className="row row-1">
                    <div className="col-md-6">
                        <h3><strong style={{ color: 'blue' }}> Power up </strong><strong style={{ color: 'darkblue' }}>your</strong> </h3>
                        <h3><strong style={{ color: 'darkblue' }}>teams</strong></h3>
                        <p style={{ color: 'blue' }}>
                            Lorem ipsum dolor sit,
                            amet consectetur adipisicing elit.
                            Unde corrupti laudantium quos a optio commodi vel est,
                            fugiat mollitia, dolor cupiditate? Assumenda, ipsum.
                            Aliquid, eveniet ut? Aut earum illum corporis?
                        </p>
                        <button type="button" className="btn btn-primary"> Start for free </button>
                        <button type="button" className="btn btn-outline-dark"> Contact Sales </button>
                    </div>
                    <div className="col-md-6">
                        <img src="images/2ndTeam.jpg" className="img-fluid TeamImg-1" alt="team spirit" />
                    </div>
                </div>
                <div className="row row-2">
                    <div className="col-md-12">
                        <div className="text-center">
                            <h3><strong style={{ color: 'darkslateblue' }}>Streamline task, extend team</strong></h3>
                            <h3><strong style={{ color: 'darkslateblue' }}>reach</strong></h3>
                        </div>
                    </div>
                </div>
                <div className="row row-3">
                    <div className="col-md-6">
                        <img src="images/1stForTeams.jfif" className="img-fluid TeamImg-2" alt="Team reach" />
                    </div>
                    <div className="col-md-6">
                        <p style={{ color: 'blue' }}>AUTOMATED ASSIGNMENT</p>
                        <h5><strong style={{ color: 'darkslateblue' }}>Control how your team gets</strong></h5>
                        <h5><strong style={{ color: 'darkslateblue' }}>booked</strong></h5>
                        <p style={{ color: 'darkslateblue' }}>
                            Lorem ipsum dolor sit,
                            amet consectetur adipisicing elit.
                            Unde corrupti laudantium quos a optio commodi vel est,
                            fugiat mollitia, dolor cupiditate? Assumenda, ipsum.
                            Aliquid, eveniet ut? Aut earum illum corporis?
                        </p>
                    </div>
                </div>
                <div className="row row-4">
                    <div className="col-md-12">
                        <div className="text-center">
                            <p><strong style={{ color: 'blue' }}>SOLUTIONS</strong> </p>
                        </div>
                    </div>
                </div>
                <div className="row row-5">
                    <div className="col-md-12">
                        <div className="text-center">
                            <h4 style={{ color: 'darkslateblue' }}>The right Calendly for the work you do</h4>
                        </div>
                    </div>
                </div>
                <div className="row row-6">
                    <div className="col-md-3 img">
                        <div className="thumbnail">
                            <img src="images/sales.jfif" className="img-fluid" alt="Right Calendly" />
                            <h5 className="text-left caption">Sales</h5>
                            <p>Get to your best leads faster</p>
                            <button>Learn more</button>
                        </div>
                    </div>
                    <div className="col-md-3 img">
                        <div className="thumbnail">
                            <img src="images/recruiting.jpg" className="img-fluid" alt="joining the team" />
                            <h5 className="text-left caption">Recruiting</h5>
                            <p>Less emailing, more closing</p>
                            <button>Learn more</button>
                        </div>
                    </div>
                    <div className="col-md-3 img">
                        <div className="thumbnail">
                            <img src="images/customer success.jpg" className="img-fluid" alt="connecting with customers" />
                            <h5 className="text-left caption">Customer Success</h5>
                            <p>Connect with customers when it matters</p>
                            <button>Learn more</button>
                        </div>
                    </div>
                    <div className="col-md-3 img">
                        <div className="thumbnail">
                            <img src="images/education1.jpg" className="img-fluid" alt="Boost Students success" />
                            <h5 className="text-left caption">Education</h5>
                            <p>Boost students success</p>
                            <button>Learn more</button>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>

    );
}

export default Teams;




// import React from 'react';
// import Footer from '../components/Footer';

// const Teams = () => {
//     return (
//         <div>
//             <div className="container">
//                 <section className="row row-1">
//                     <div className="col-md-6">
//                         <h2><strong style={{ color: 'blue' }}> Power up </strong><strong style={{ color: 'darkblue' }}>your</strong> </h2>
//                         <h2><strong style={{ color: 'darkblue' }}>teams</strong></h2>
//                         <p style={{ color: 'blue' }}>
//                             Lorem ipsum dolor sit,
//                             amet consectetur adipisicing elit.
//                             Unde corrupti laudantium quos a optio commodi vel est,
//                             fugiat mollitia, dolor cupiditate? Assumenda, ipsum.
//                             Aliquid, eveniet ut? Aut earum illum corporis?
//                         </p>
//                         <button type="button" className="btn btn-primary" aria-label="Start for Free"> Start for Free </button>
//                         <button type="button" className="btn btn-outline-dark" aria-label="Contact Sales"> Contact Sales </button>
//                     </div>
//                     <div className="col-md-6">
//                         <img src="images/2ndTeam.jpg" className="img-fluid TeamImg-1" alt="Team Spirit" />
//                     </div>
//                 </section>
//                 {/* ... other sections */}
//             </div>

//             <Footer />
//         </div>
//     );
// }

// export default Teams;

