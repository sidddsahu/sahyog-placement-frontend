// import React from 'react';
// import './TeamSection.css'; // Import any necessary CSS file

const TeamSection = () => {
  return (
    <section className="team-section">
      <div className="pattern-layer" style={{ backgroundImage: 'url(/src/assets/images/shape/pattern-9.png)' }}></div>
      <div className="auto-container">
        <div className="row clearfix">
          <div className="col-lg-6 col-md-12 col-sm-12 experience-column">
            <div id="content_block_5">
              <div className="content-box">
                <div className="sec-title">
                  <span className="top-title">Team Behind Us</span>
                  <h2>Our Experience & Team</h2>
                </div>
                <div className="text">
                  <p>
                    Obligations of business it will frequently occur that pleasures have to be repudiated & annoyances accepted the wise man therefore always hold in these matters to this principle of selection.
                  </p>
                </div>
                <div className="progress-inner">
                  <div className="progress-box">
                    <div className="bar">
                      <div className="bar-inner count-bar" data-percent="52%">
                        <div className="count-text">52%</div>
                      </div>
                    </div>
                    <h6>Temporary</h6>
                  </div>
                  <div className="progress-box">
                    <div className="bar">
                      <div className="bar-inner count-bar" data-percent="78%">
                        <div className="count-text">78%</div>
                      </div>
                    </div>
                    <h6>Contract</h6>
                  </div>
                  <div className="progress-box">
                    <div className="bar">
                      <div className="bar-inner count-bar" data-percent="65%">
                        <div className="count-text">65%</div>
                      </div>
                    </div>
                    <h6>Direct Hire</h6>
                  </div>
                  <div className="progress-box">
                    <div className="bar">
                      <div className="bar-inner count-bar" data-percent="89%">
                        <div className="count-text">89%</div>
                      </div>
                    </div>
                    <h6>Payrolling</h6>
                  </div>
                </div>
                <div className="link">
                  <a href="index.html">
                    <i className="flaticon-right-arrow"></i>Meet All Team Members
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 inner-column">
            <div className="row align-items-center clearfix">
              {teamMembers.map((member, index) => (
                <div
                  className={`col-lg-6 col-md-6 col-sm-12 team-block wow fadeInUp animated`}
                  data-wow-delay={`${index * 300}ms`}
                  data-wow-duration="1500ms"
                  key={index}
                >
                  <div className="team-block-one">
                    <div className="inner-box">
                      <figure className="image-box">
                        <img src={member.imgSrc} alt="" />
                        <span className="signature">Our Champ</span>
                        <div className="share-box">
                          <p>
                            <i className="fas fa-share-alt"></i>Share
                          </p>
                          <ul className="social-links clearfix">
                            {member.socialLinks.map((link, i) => (
                              <li key={i}>
                                <a href={link.url}>
                                  <i className={link.icon}></i>
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </figure>
                      <div className="lower-content">
                        <h3>
                          <a href="index.html">{member.name}</a>
                        </h3>
                        <span className="designation">{member.designation}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const teamMembers = [
  {
    name: 'Garrett Barnie',
    designation: 'Founder',
    imgSrc: '/src/assets/images/team/team-1.jpg',
    socialLinks: [
      { url: 'index.html', icon: 'fab fa-facebook-f' },
      { url: 'index.html', icon: 'fab fa-twitter' },
      { url: 'index.html', icon: 'fab fa-google-plus-g' },
      { url: 'index.html', icon: 'fab fa-youtube' },
    ],
  },
  {
    name: 'Isaac Herman',
    designation: 'VP, Finance',
    imgSrc: '/src/assets/images/team/team-2.jpg',
    socialLinks: [
      { url: 'index.html', icon: 'fab fa-facebook-f' },
      { url: 'index.html', icon: 'fab fa-twitter' },
      { url: 'index.html', icon: 'fab fa-google-plus-g' },
      { url: 'index.html', icon: 'fab fa-youtube' },
    ],
  },
  {
    name: 'Joel Lou',
    designation: 'Senior Consultant',
    imgSrc: '/src/assets/images/team/team-3.jpg',
    socialLinks: [
      { url: 'index.html', icon: 'fab fa-facebook-f' },
      { url: 'index.html', icon: 'fab fa-twitter' },
      { url: 'index.html', icon: 'fab fa-google-plus-g' },
      { url: 'index.html', icon: 'fab fa-youtube' },
    ],
  },
];

export default TeamSection;
