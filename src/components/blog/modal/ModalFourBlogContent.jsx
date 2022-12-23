import React from "react";

const ModalFourBlogContent = () => {
  return (
    //  Article Starts
    <article>
      <div className="title-section text-left text-sm-center">
        <h1>
          Post <span>ALLEMAGNE</span>
        </h1>
        <span className="title-bg">posts</span>
      </div>
      {/* Meta Starts */}

      <div className="meta open-sans-font">
        <span>
          <i className="fa fa-user"></i> Guillaume
        </span>
        <span className="date">
          <i className="fa fa-calendar"></i> 12 Octobre 2022
        </span>
        <span>
          <i className="fa fa-tags"></i> Foire expo, business, Allemagne, Job
        </span>
      </div>
      {/* Meta Ends */}
      {/* Article Content Starts */}

      <h1>Foire exposition en ALLEMAGNE pour Mueller Industrietechnk.</h1>
      <img src="img/blog/blog-post-4.jpg" className="img-fluid" alt="Blog" />
      <div className="blog-excerpt open-sans-font pb-5">
        <p>
          De 2005 à 2014, j'ai habité et travaillé en ALLEMAGNE dans le NORD entre HANNOVRE
          et HAMBOURG. J'ai travaillé pour l'entreprise MUELLER INDUSTRIETECHNIK qui est 
          un distributeur de gros d'accessoires pour les cabines de tracteur agricole et engins
          du TP. J'ai acquis une grande expérience, mon rôle était de traduire les catalogues
          papiers et réaliser un support digital pour référencer les articles.
        </p>
        <div className="quotebox">
          <div className="icon">
            <img src="img/blog/quote.svg" alt="blog quote" />
          </div>
          <p>
            Das war fur mich eine beste moments.. Ich habe sehr viele gelearnt mit meinen kollegen aus
            die firma MUELLER. Ich werde diese zeit nie vergessen
          </p>
        </div>
        <p>
          Aujourd'hui dans tout mes projets, je m'appuis sur cette expérience. Qui m'a appris
          la rigueur, la stucturation des projets, la recherche d'information et le travail en équipe.
          Nous sommes toujours en contact, ce qui me permet de garder et excercer 
          la langue allemande.
        </p>
        <p>
          Lorsque j'ai pris la décision de retourner en FRANCE, l'entreprise MUELLER m'a proposé
          de créer mon entreprise et de distribuer les produits sur le marché FRANCAIS. Ainsi, j'ai ouvert
          une société AUTO ENTREPRENEUR et créer 2 sites e-commerces(PRESRASHOP ET WOOCOMMERCE) pendant 6 ans.
        </p>
        <a
              className="button"
              href="https://mueller-industrietechnik.com/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="button-text"> Site web MUELLER</span>
              <span className="button-icon fa fa-arrow-right"></span>
            </a>
      </div>
      {/* Article Content Ends */}
    </article>
    // Article Ends
  );
};

export default ModalFourBlogContent;
