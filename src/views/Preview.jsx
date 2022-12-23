import React from "react";
import { Link } from "react-router-dom";

const previewDemo = [
  
  {
    img: "dark",
    title: "Mon CV en ligne",
    routerPath: "/home-dark",
    delayAnimation: "100",
  },
  {
    img: "light",
    title: "Mon CV en vidéo",
    routerPath: "/home-light",
    delayAnimation: "",
  },
];

const Preview = () => {
  return (
    
    <div>
      <section className="banner text-center" >
        <div className="content">
          <h1>Mon CV en ligne</h1>
          <h2></h2>
        </div>
      </section>
      {/* End .banner */}

      <section className="demo dark">
        <div className="container">
          <div className="row">
            {previewDemo.map((val, i) => (
              <div
                className="col-xs-12 col-sm-6 col-md-6"
                key={i}
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay={val.delayAnimation}
              >
                <div className="content text-center">
                  <div className="bg_container">
                    <Link to={val.routerPath} target="_blank" rel="noreferrer">
                      <img
                        src={`img/intro/${val.img}.jpg`}
                        alt="demo"
                        className="img-responsive screenshot"
                      />
                    </Link>
                  </div>
                  <h2>{val.title}</h2>
                  <div className="anchor">
                    <h6>
                      <Link
                        className="btn"
                        to={val.routerPath}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Consultez
                      </Link>
                    </h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* End .Demo */}

      <footer>
        <div className="go_purchase">
          <h6 data-aos="fade-up" data-aos-duration="1200">
            N'hésitez pas à me contacter
          </h6>
          <h3 data-aos="fade-up" data-aos-duration="1200" data-aos-delay="100">
          Passionné par les nouvelles technologie et l’informatique.{" "}
            <span className="theme-color">Developeur</span>  &amp;{" "}
            <span className="theme-color">WEB</span><span className="theme-color">APPLICATIONS</span>
          </h3>
          <h6 data-aos="fade-up" data-aos-duration="1200">
            Faire de sa passion son métier.
          </h6>
          <div data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
            <a
              className="button"
              href="img/CV_entreprises.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <span className="button-text"> Télécharger CV au format PDF</span>
              <span className="button-icon fa fa-arrow-right"></span>
            </a>
          </div>
        </div>
        {/* End go_purchase */}

        <div className="text-center footer_copyright">
          <h6>Mon-CV en ligne</h6>
          <h5>
            &copy; {new Date().getFullYear()} Réalisé{" "}
            <span className="heart">&#10084;</span> par{" "}
            <a
              href="https://themeforest.net/user/ib-themes"
              target="_blank"
              rel="noreferrer"
            >
              Guillaume PEVRIER - 06 52 12 16 61
            </a>{" "}
          </h5>
        </div>
      </footer>
      {/* End footer */}
    </div>
  );
};

export default Preview;
