import React from "react";

const ModalOneBlogContent = () => {
  return (
    //  Article Starts
    <article>
      <div className="title-section text-left text-sm-center">
        <h1>
          Post <span>ARTISTE</span>
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
          <i className="fa fa-tags"></i> Spectacles, Sport, Passion, Allemagne
      </span>
      </div>
      {/* Meta Ends */}
      {/* Article Content Starts */}

      <h1>Artiste au sein d'une troupe de plongeurs de haut vol</h1>
      <img src="img/blog/blog-post-1.jpg" className="img-fluid" alt="Blog" />
      <div className="blog-excerpt open-sans-font pb-5">
        <p>
        HOH SHOW est une compagnie specialisée : spectacle de plongeons, ski acrobatique, gymnastique, cascades, avec plus de dix ans d'experience à travers le monde. Une attraction extraordinaire pour les parcs de loisirs, expositions, inauguration et toutes les manifestations. Avec un incroyable plongeon de 25 mètres de hauteur dans une piscine de 2,80 de profondeur.Ainsi qu'un homme en feu, des clowns et bien d'autres surprises.
        </p>
        <div className="quotebox">
          <div className="icon">
            <img src="img/blog/quote.svg" alt="blog quote" />
            
          </div>
          <p>
           6 ans à réaliser ces spectacles m'ont beaucoup appris. La joie et les rires du public sont des souvenirs inoubliables. Dépasser ses peurs et réussir une cascade ou un plongeon mon apporté de l'assurance. "NO RISK NO FUN" et "CE QUI NE TE TUE PAS TE REND PLUS FORT"
          </p>
        </div>
        <p>
          Nous avons aussi réalisé des spectacles, dans différents PAYS, FOIRE EXPO, VILLES et SHOW TELE (Incroyables TALENTS)
        </p>
        <p>
          Ils nous ont fait confiance: MIRABILANDIA - GARDALAND - VOUDOU CASTLE - SERENGETI PARK - EDENLANDIA - CENTRE POMPIDOU - EDF - LEGOLAND
        </p>
        <a
              className="button"
              href="http://hoh-show.com/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="button-text"> Site web HOH SHOW</span>
              <span className="button-icon fa fa-arrow-right"></span>
            </a>
      </div>
      <div className="videocontainer">
          <iframe
            width="100%" height="515"
            className="youtube-video"
            title="youtube video"
            src="https://www.youtube.com/embed/4t2Vl-7v8jY"
            allowFullScreen
          ></iframe>
        </div>
        
      {/* Article Content Ends */}
    </article>
    // Article Ends
  );
};

export default ModalOneBlogContent;
