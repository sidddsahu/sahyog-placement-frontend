import OwlCarousel from "react-owl-carousel";
const BannerSection = () => {
    return (
      <section className="banner-section style-one">
        <OwlCarousel className="banner-carousel owl-theme" loop margin={10} items={1} dots={false} nav={false}>
          <div className="slide-item style-one">
            <div className="image-layer" style={{ backgroundImage: "url(/src/assets/images/banner/banner-1.jpg)" }}></div>
            <div className="pattern-layer">
              <div className="pattern-1" style={{ backgroundImage: "url(/src/assets/images/shape/pattern-1.png)" }}></div>
              <div className="pattern-2" style={{ backgroundImage: "url(/src/assets/images/shape/pattern-2.png)" }}></div>
            </div>
            <div className="auto-container">
              <div className="row clearfix">
                <div className="col-xl-6 col-lg-12 col-md-12 content-column">
                  <div className="content-box">
                    <span>Connected with Staffing</span>
                    <h1>Collaborating <br />With You to Fulfill  <br />Your HR Needs.</h1>
                    <p>Through our partnership, your goals become reality.</p>
                    <div className="btn-box">
                      <a href="index.html" className="theme-btn-two">Learn More</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="slide-item style-two">
            <div className="image-layer" style={{ backgroundImage: "url(/src/assets/images/banner/banner-2.jpg)" }}></div>
            <div className="pattern-layer">
              <div className="pattern-1" style={{ backgroundImage: "url(/src/assets/images/shape/pattern-3.png)" }}></div>
              <div className="pattern-2" style={{ backgroundImage: "url(/src/assets/images/shape/pattern-4.png)" }}></div>
            </div>
            <div className="auto-container">
              <div className="row clearfix">
                <div className="col-xl-6 col-lg-12 col-md-12 offset-xl-6 content-column">
                  <div className="content-box">
                    <span>Engaged with Staffing</span>
                    <h1>Shining a Light on Your HR <br />and Employment Law Issues</h1>
                    <p>By way of us you can achieve what you want.</p>
                    <div className="btn-box">
                      <a href="index.html" className="theme-btn-two">Learn More</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="slide-item style-one">
            <div className="image-layer" style={{ backgroundImage: "url(/src/assets/images/banner/banner-3.jpg)" }}></div>
            <div className="pattern-layer">
              <div className="pattern-1" style={{ backgroundImage: "url(/src/assets/images/shape/pattern-1.png)" }}></div>
              <div className="pattern-2" style={{ backgroundImage: "url(/src/assets/images/shape/pattern-2.png)" }}></div>
            </div>
            <div className="auto-container">
              <div className="row clearfix">
                <div className="col-xl-7 col-lg-12 col-md-12 content-column">
                  <div className="content-box">
                    <span>Partnered with Staffing for optimal talent solutions.
                    </span>
                    <h1>Sahyog placement <br />Provide Employment Opportunities</h1>
                    <p>With our help, your aspirations turn into reality.</p>
                    <div className="btn-box">
                      <a href="index.html" className="theme-btn-two">Learn More</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </OwlCarousel>
      </section>
    );
  };

  export default BannerSection