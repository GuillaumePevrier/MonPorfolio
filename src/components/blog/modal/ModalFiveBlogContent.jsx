import React from "react";

const ModalFiveBlogContent = () => {
  return (
    //  Article Starts
    <article>
      <div className="title-section text-left text-sm-center">
        <h1>
          Post <span>BRICOLAGE</span>
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
          <i className="fa fa-tags"></i> Bricolage, Passion, Projets, design
        </span>
      </div>
      {/* Meta Ends */}
      {/* Article Content Starts */}

      <h1>J'aime réalisation de projets de construction sur mon temps libre.</h1>
      <img src="img/blog/blog-post-5.jpg" className="img-fluid" alt="Blog" />
      <div className="blog-excerpt open-sans-font pb-5">
        <p>
          Je suis aussi passionné par le bricolage, plus particulièrement travailler le bois.
          Le plaisir de réaliser un ouvrage de ses propres mains est une satisfaction, le plus souvent
          avec des matériaux de récupération.
        </p>
        <div className="quotebox">
          <div className="icon">
            <img src="img/blog/quote.svg" alt="blog quote" />
          </div>
          <p>
            J'ai aussi travaillé dans le bâtiment, comme plaquiste, électricien et main d'oeuvre.
            J'ai aussi assisté un maître charpentier et un terrassier en ALLEMAGNE. Cette expérience m'a 
            ammené à savoir utiliser un grand nombre de machine et d'outils.
          </p>
        </div>
        <p>
         Le bricolage est un moment de détente, j'ai réalisé une cabane en bois pour mes enfants, une terrasse décorative
         pour supporter un SPA et une cuisine extérieure mélangeant bois et béton. 
        </p>
        <p>
         J'aime beaucoup ce coté créatif dans la conception d'un meuble ou d'un ouvrage. Faire attention à la stabilité et la durabilité
         d'un projet. Un grand nombre de points que nous pouvons aussi retrouver dans une création WEB. Se poser les bonnes questions...
        </p>
      </div>
      {/* Article Content Ends */}
    </article>
    // Article Ends
  );
};

export default ModalFiveBlogContent;
