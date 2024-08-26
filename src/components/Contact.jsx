import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <div>
            {/* Page Title */}
            <section className="page-title" style={{ backgroundImage: 'url(/src/assets/images/background/page-title-2.jpg)' }}>
                <div className="pattern-layer" style={{ backgroundImage: 'url(/src/assets/images/shape/pattern-35.png)' }}></div>
                <div className="auto-container">
                    <div className="content-box">
                        <div className="title-box centred">
                            <h1>Contact Us</h1>
                            <p>Your Recruitment Needs, Our Expertise</p>
                        </div>
                        <ul className="bread-crumb clearfix">
                            <li><Link to="/">Home</Link></li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Contact Info Section */}
            <section className="contactinfo-section contact-page-section">
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="col-lg-4 col-md-12 col-sm-12 content-column">
                            <div id="content_block_6">
                                <div className="content-box">
                                    <div className="sec-title">
                                        <span className="top-title">We're Here to Help</span>
                                        <h2>Get in Touch</h2>
                                        <p>Check out our <span>FAQs</span> or contact us directly for personalized support.</p>
                                    </div>
                                    <ul className="info-list clearfix">
                                        <li>
                                            <figure className="icon-box"><img src="/src/assets/images/icons/icon-39.png" alt="Location" /></figure>
                                            <div className="inner">
                                                <h4>Location</h4>
                                                <p>India <br />Sahyog Placement Office<br />Mumbai, Maharashtra 400001</p>
                                            </div>
                                        </li>
                                        <li>
                                            <figure className="icon-box"><img src="/src/assets/images/icons/icon-40.png" alt="Contact" /></figure>
                                            <div className="inner">
                                                <h4>Call or Email</h4>
                                                <p>
                                                    <Link to="tel:+912345678900">+91 234 567 8900</Link><br />
                                                    <Link to="mailto:info@sahyogplacement.com">info@sahyogplacement.com</Link>
                                                </p>
                                            </div>
                                        </li>
                                        <li>
                                            <figure className="icon-box"><img src="/src/assets/images/icons/icon-41.png" alt="Hours" /></figure>
                                            <div className="inner">
                                                <h4>Office Hours</h4>
                                                <p>Mon - Sat: 9:00 AM to 7:00 PM<br />Sunday: Closed</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-12 col-sm-12 form-column">
                            <div className="form-inner">
                                <h2>How Can We Assist You?</h2>
                                <form method="post" action="https://yourwebsite.com/sendemail.php" id="contact-form" className="default-form">
                                    <div className="row clearfix">
                                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                            <input type="text" name="username" placeholder="Your Name *" required />
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                            <input type="email" name="email" placeholder="Email Address *" required />
                                        </div>
                                        <div className="col-lg-6 col-md-12 col-sm-12 form-group">
                                            <input type="text" name="phone" required placeholder="Phone *" />
                                        </div>
                                        <div className="col-lg-6 col-md-12 col-sm-12 form-group">
                                            <div className="select-box">
                                                <select className="wide">
                                                    <option data-display="Service Required">Service Required</option>
                                                    <option value="1">Recruitment Services</option>
                                                    <option value="2">Job Opportunities</option>
                                                    <option value="3">Career Guidance</option>
                                                    <option value="4">Other Inquiries</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                            <input type="text" name="subject" required placeholder="Subject" />
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                            <textarea name="message" placeholder="Your Message ..."></textarea>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn centred">
                                            <button className="theme-btn-one" type="submit" name="submit-form">Submit</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Locations Section */}
            <section className="locations-section bg-color-2">
                <div className="pattern-layer" style={{ backgroundImage: 'url(/src/assets/images/shape/pattern-50.png)' }}></div>
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                            <div className="single-item wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="upper-box">
                                        <h3>Mumbai Office</h3>
                                        <p>India, 123 Corporate Street, Andheri West, Mumbai 400058.</p>
                                    </div>
                                    <ul className="info-list clearfix">
                                        <li>
                                            <i className="flaticon-email"></i>
                                            <p>Email</p>
                                            <Link to="mailto:mumbai@sahyogplacement.com">mumbai@sahyogplacement.com</Link>
                                        </li>
                                        <li>
                                            <i className="flaticon-phone-call"></i>
                                            <p>Phone</p>
                                            <Link to="tel:+912345678901">+91 234 567 8901</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                            <div className="single-item wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="upper-box">
                                        <h3>Pune Office</h3>
                                        <p>India, 456 Corporate Avenue, Kothrud, Pune 411038.</p>
                                    </div>
                                    <ul className="info-list clearfix">
                                        <li>
                                            <i className="flaticon-email"></i>
                                            <p>Email</p>
                                            <Link to="mailto:pune@sahyogplacement.com">pune@sahyogplacement.com</Link>
                                        </li>
                                        <li>
                                            <i className="flaticon-phone-call"></i>
                                            <p>Phone</p>
                                            <Link to="tel:+912345678902">+91 234 567 8902</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                            <div className="single-item wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="upper-box">
                                        <h3>Bangalore Office</h3>
                                        <p>India, 789 Corporate Plaza, Indiranagar, Bangalore 560038.</p>
                                    </div>
                                    <ul className="info-list clearfix">
                                        <li>
                                            <i className="flaticon-email"></i>
                                            <p>Email</p>
                                            <Link to="mailto:bangalore@sahyogplacement.com">bangalore@sahyogplacement.com</Link>
                                        </li>
                                        <li>
                                            <i className="flaticon-phone-call"></i>
                                            <p>Phone</p>
                                            <Link to="tel:+912345678903">+91 234 567 8903</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Clients Section */}
            <section className="clients-style-two" style={{ backgroundImage: 'url(/src/assets/images/background/clients-1.jpg)' }}>
                <div className="auto-container">
                    <div className="title-inner centred">
                        <h2>Looking for the Right Talent or the Right Job?</h2>
                        <div className="btn-box">
                            <Link to="/employers" className="btn-one">Hire Talent</Link>
                            <Link to="/job-seekers" className="btn-two">Find a Job</Link>
                        </div>
                    </div>
                    <div className="clients-carousel owl-carousel owl-theme owl-dots-none owl-nav-none">
                        <figure className="clients-logo-box">
                            <Link to="/"><img src="/src/assets/images/clients/clients-logo-7.png" alt="Client 1" /></Link>
                        </figure>
                        <figure className="clients-logo-box">
                            <Link to="/"><img src="/src/assets/images/clients/clients-logo-8.png" alt="Client 2" /></Link>
                        </figure>
                        <figure className="clients-logo-box">
                            <Link to="/"><img src="/src/assets/images/clients/clients-logo-9.png" alt="Client 3" /></Link>
                        </figure>
                        <figure className="clients-logo-box">
                            <Link to="/"><img src="/src/assets/images/clients/clients-logo-10.png" alt="Client 4" /></Link>
                        </figure>
                        <figure className="clients-logo-box">
                            <Link to="/"><img src="/src/assets/images/clients/clients-logo-11.png" alt="Client 5" /></Link>
                        </figure>
                        <figure className="clients-logo-box">
                            <Link to="/"><img src="/src/assets/images/clients/clients-logo-12.png" alt="Client 6" /></Link>
                        </figure>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contact;
