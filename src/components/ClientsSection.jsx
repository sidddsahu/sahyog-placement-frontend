import OwlCarousel from "react-owl-carousel";
const ClientsSection = () => {
    return (
      <section className="clients-section">
        <div className="outer-container">
          <OwlCarousel className="clients-carousel owl-theme" loop margin={10} items={6} dots={false} nav={false}>
            {Array.from({ length: 6 }).map((_, index) => (
              <figure className="clients-logo-box" key={index}>
                <a href="index.html"><img src={`/src/assets/images/clients/clients-logo-${index + 1}.png`} alt="" /></a>
                <span className="logo-title"><a href="index.html">Visit Website</a></span>
              </figure>
            ))}
          </OwlCarousel>
        </div>
      </section>
    );
  };

  export default ClientsSection