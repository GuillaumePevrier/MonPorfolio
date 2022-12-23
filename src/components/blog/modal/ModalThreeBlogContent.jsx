import React from "react";

const ModalThreeBlogContent = () => {
  return (
    //  Article Starts
    <article>
      <div className="title-section text-left text-sm-center">
        <h1>
          Post <span>CLUB FUTSAL</span>
        </h1>
        <span className="title-bg">posts</span>
      </div>
      {/* Meta Starts */}

      <div className="meta open-sans-font">
        <span>
          <i className="fa fa-user"></i> guillaume
        </span>
        <span className="date">
          <i className="fa fa-calendar"></i> 12 Octobre 2022
        </span>
        <span>
          <i className="fa fa-tags"></i> Futsal, Association, Equipe, Sport
        </span>
      </div>
      {/* Meta Ends */}
      {/* Article Content Starts */}

      <h1>Joueur de l'équipe FUTSAL, de NOYAL SUR VILAINE.</h1>
      <img src="img/blog/blog-post-3.jpg" className="img-fluid" alt="Blog" />
      <div className="blog-excerpt open-sans-font pb-5">
        <p>
          Durant la saison 2021, j'ai intégré une équipe de Futsal à NOYAL SUR VILAINE. Nous avons 2 entrainements par semaine
          et jouons la coupe nationale et le Championnat D2. Nous sommes tous unis et dévoué. Les résultats sont au rendez-vous, ce travail en équipe est la solution pour 
          atteindre nos objectif. Chaque joueur apporte son talent à l'édifice.
        </p>
        <div className="quotebox">
          <div className="icon">
            <img src="img/blog/quote.svg" alt="blog quote" />
          </div>
          <p>
            Notre slogan qui motive l'équipe est le suivant: "on ne lâche rien,on lâche les chiens !!"
          </p>
        </div>
        <p>
        La section futsal du Noyal Brécé football-club (NBFC) a été créée juste avant la crise sanitaire.
        Nous avons presque doublé nos adhérents cette année. Nous avons maintenant deux équipes compétitives.
        Le club prend de la valeur.
        </p>
        <p>
          J'ai réalisé un site internet, permettant de faire vivre le groupe. Le but était de mettre en valeur chaque joueur,
          en valorisant chaque talent. Le thème du site se repose sur une ambiance NBA, GTA, CARTOON.
          Le site permet de suivre les résultats des matchs et comptabiliser les performances des joueurs.
          Ce site est un WORDPRESS avec un thème spécifique.
        </p>
        <a
              className="button"
              href="https://futsal.noyalbrecefc.com/home-version-1/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="button-text"> Site web Futsal</span>
              <span className="button-icon fa fa-arrow-right"></span>
            </a>
      </div>
      {/* Article Content Ends */}
    </article>
    // Article Ends
  );
};

export default ModalThreeBlogContent;
