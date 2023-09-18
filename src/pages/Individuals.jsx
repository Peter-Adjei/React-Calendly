import React from 'react';
import Footer from '../components/Footer';

const Individuals = () => {
    return (
        <div>
            <div className="container">
                <div className="row row1">
                    <div className="col-md-6">
                        <h3><strong>The genius way</strong></h3>
                        <h3><strong>to work </strong><strong style={{ color: 'blue' }}>better</strong></h3>
                        <p>
                            Lorem ipsum dolor sit,
                            amet consectetur adipisicing elit.
                            Unde corrupti laudantium quos a optio commodi vel est,
                            fugiat mollitia, dolor cupiditate? Assumenda, ipsum.
                            Aliquid, eveniet ut? Aut earum illum corporis?
                        </p>
                        <button type="button" className="btn btn-dark ">Sign Up for Free</button>
                    </div>
                    <div className="col-md-6">
                        <img src="images/photo-1558025137-0b406e9cc169.jfif" className="img-fluid Img-1" alt="sign up for free" />
                    </div>
                </div>
                <div className="row row-2">
                    <div className="col-md-6">
                        <img src="images/2ndImgInd.jfif" className="img-fluid Img-2" alt="Book up efficiently" />
                    </div>
                    <div className="col-md-6">
                        A CURATED CALENDAR
                        <h3><strong>Book up efficiently</strong></h3>
                        <p>
                            Lorem ipsum dolor sit,
                            amet consectetur adipisicing elit.
                            Unde corrupti laudantium quos a optio commodi vel est,
                            fugiat mollitia, dolor cupiditate? Assumenda, ipsum.
                            Aliquid, eveniet ut? Aut earum illum corporis?
                        </p>
                    </div>
                </div>
                <div className="row row-3">
                    <div className="col-md-6">
                        AUTOMATED NOTIFICATIONS &amp; FOLLOW-UPS
                        <h3><strong>Work like you have a</strong></h3>
                        <h3><strong>personal assistant</strong></h3>
                    </div>
                    <div className="col-md-6">
                        <img src="images/3rdImgInd.jfif" className="img-fluid Img-3" alt="notifications and follow ups" />
                    </div>
                </div>
                <div className="row row-4">
                    <div className="col-md-12">
                        <div className="text-left" />
                        <h3><strong>Find just-right plans</strong></h3>
                        <h3> <strong>for individuals and</strong></h3>
                        <h3><strong>small teams</strong></h3>
                        <button type="button" className="btn btn-light">See your plans</button>
                    </div>
                </div>
            </div>

            <Footer />
        </div>


    );
}

export default Individuals;




// import React from 'react';
// import Footer from '../components/Footer';

// const Individuals = () => {
//     return (
//         <div>
//             <div className="container">
//                 <div className="row row1">
//                     <div className="col-md-6">
//                         <h2><strong>The genius way</strong></h2>
//                         <h2><strong>to work </strong><strong style={{ color: 'blue' }}>better</strong></h2>
//                         <p>
//                             Lorem ipsum dolor sit,
//                             amet consectetur adipisicing elit.
//                             Unde corrupti laudantium quos a optio commodi vel est,
//                             fugiat mollitia, dolor cupiditate? Assumenda, ipsum.
//                             Aliquid, eveniet ut? Aut earum illum corporis?
//                         </p>
//                         <button type="button" className="btn btn-dark">Sign Up for Free</button>
//                     </div>
//                     <div className="col-md-6">
//                         <img src="images/photo-1558025137-0b406e9cc169.jfif" className="img-fluid Img-1" alt="Sign Up for Free" />
//                     </div>
//                 </div>
//                 <div className="row row-2">
//                     {/* ... */}
//                 </div>
//                 <div className="row row-3">
//                     {/* ... */}
//                 </div>
//                 <div className="row row-4">
//                     <div className="col-md-12">
//                         <h2><strong>Find just-right plans</strong></h2>
//                         <h2><strong>for individuals and</strong></h2>
//                         <h2><strong>small teams</strong></h2>
//                         <button type="button" className="btn btn-light">See your plans</button>
//                     </div>
//                 </div>
//             </div>

//             <Footer />
//         </div>
//     );
// }

// export default Individuals;
