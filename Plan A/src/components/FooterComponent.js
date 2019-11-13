import React from "react";
import { Link } from "react-router-dom";

const Footer = () => (
   <div className="footer px-4 py-4 py-sm-5 xsmall-fs">
      <div className="container">
         <div className="row justify-content-center">
            <div className="col-12 col-sm-6 d-flex flex-column justify-content-center align-items-center">
               <p className="footer-logo-text mt-4 mb-0">DG</p>
               <p className="regular-fs grey10">Dishes on the Go</p>
               <p className="px-5">
                  Dishes on the Go is a platform for getting dishes when you're
                  on the go. People are very busy in this age of technology. So,
                  we strive to provide you the right amount of good quality
                  food.
               </p>
               {/* <address>
                  SCO 50, Opp. SBI, Sector 14 <br /> Gurugram, Haryana <br />{" "}
                  PIN: 122001
                  <br />
                  <i className="fa fa-phone fa-lg"></i>: +91 98126 98126
                  <br />
                  <i className="fa fa-fax fa-lg"></i>: +91 88139 88139
                  <br />
                  <i className="fa fa-envelope fa-lg"></i>:{" "}
                  <a href="mailto:confusion@food.net">confusion@food.net</a>
               </address> */}
            </div>
            <div className="col-12 col-sm-6 pt-sm-4">
               <div className="row d-flex justify-content-center text-center pt-sm-5">
                  <div className="col-6 col-sm-4">
                     <h5>LINKS</h5>
                     <ul className="list-unstyled">
                        <li>
                           <Link to="/home">Home</Link>
                        </li>
                        <li>
                           <Link to="/aboutus">Main Course</Link>
                        </li>
                        <li>
                           <Link to="/menu">Snacks</Link>
                        </li>
                        <li>
                           <Link to="/contactus">Healthy</Link>
                        </li>
                     </ul>
                  </div>
                  <div className="col-6 col-sm-4">
                     <h5>HELP</h5>
                     <ul className="list-unstyled">
                        <li>
                           <Link to="/home">Help</Link>
                        </li>
                        <li>
                           <Link to="/aboutus">About Us</Link>
                        </li>
                        <li>
                           <Link to="/contactus">Contact Us</Link>
                        </li>
                     </ul>
                  </div>
                  <div className="col-6 col-sm-4 ">
                     <h5>SOCIAL</h5>
                     <ul className="list-unstyled d-flex flex-sm-column justify-content-between">
                        <li>
                           <Link to="/home">dotg</Link>
                        </li>
                        <li>
                           <Link to="/aboutus">dotg</Link>
                        </li>
                        <li>
                           <Link to="/menu">dotg</Link>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>

            <div className="col-12 col-sm-4 align-self-center">
               <div className="text-center">
                  <a
                     className="btn btn-social-icon btn-google"
                     href="http://google.com/+"
                  >
                     <i className="fa fa-google-plus"></i>
                  </a>
                  <a
                     className="btn btn-social-icon btn-facebook"
                     href="http://www.facebook.com/profile.php?id="
                  >
                     <i className="fa fa-facebook"></i>
                  </a>
                  <a
                     className="btn btn-social-icon btn-linkedin"
                     href="http://www.linkedin.com/in/"
                  >
                     <i className="fa fa-linkedin"></i>
                  </a>
                  <a
                     className="btn btn-social-icon btn-twitter"
                     href="http://twitter.com/"
                  >
                     <i className="fa fa-twitter"></i>
                  </a>
                  <a
                     className="btn btn-social-icon btn-google"
                     href="http://youtube.com/"
                  >
                     <i className="fa fa-youtube"></i>
                  </a>
                  <a className="btn btn-social-icon" href="mailto:">
                     <i className="fa fa-envelope-o"></i>
                  </a>
               </div>
            </div>
         </div>
         <div className="row justify-content-center">
            <div className="col-auto">
               <p>© Copyright 2019 Dishes on the Go</p>
            </div>
         </div>
      </div>
   </div>
);

export default Footer;
