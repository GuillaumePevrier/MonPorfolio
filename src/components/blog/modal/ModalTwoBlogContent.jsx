import React from "react";

const ModalTwoBlogContent = () => {
  return (
    //  Article Starts
    <article>
      <div className="title-section text-left text-sm-center">
        <h1>
          Post <span>PASSION</span>
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
          <i className="fa fa-tags"></i> Football, Sport, Passion, Spectacles
        </span>
      </div>
      {/* Meta Ends */}
      {/* Article Content Starts */}

      <h1>Passionné par le football et supporter du Stade RENNAIS.</h1>
      <img src="img/blog/blog-post-2.jpg" className="img-fluid" alt="Blog" />
      <div className="blog-excerpt open-sans-font pb-5">
        <p>
          Je suis abonné au STADE RENNAIS et je vais supporter mon équipe favorite au ROAZHON PARK route de LORIENT. L'ambiance y est exceptionnelle, et l'état d'esprit aussi. C'est à chaque match un moment de fête.
          J'aime soutenir une équipe qui véhicule de bonne valeur du sport, et d'esprit d'équipe.
        </p>
        <div className="quotebox">
          <div className="icon">
            <img src="img/blog/quote.svg" alt="blog quote" />
          </div>
          <p>
          De la première à la dernière minute ! #Tout donner
          </p>
        </div>
        <p>
        L’histoire du Stade rennais FC, club de football français basé à Rennes en Bretagne, débute le 10 mars 1901, date à laquelle d'anciens étudiants créent sous le nom de Stade rennais un club omnisports où sont pratiqués le football et l'athlétisme. Rapidement, les footballeurs du club, jouant sous les couleurs bleu ciel et bleu foncé, s'illustrent lors des premiers championnats régionaux organisés par l'USFSA. En 1904, le Stade rennais et un autre club local, le Football club rennais, unissent leurs forces pour créer le Stade rennais Université Club, adoptant les couleurs rouges et noires du second cité. 
        </p>
        <p>
        Après l'obtention d'un titre de champion de France interfédéral en 1917, l'entre-deux-guerres permet au Stade rennais UC d'acquérir une certaine notoriété sur la scène nationale en disputant deux finales de Coupe de France, toutes deux perdues, en 1922 et 1935. En 1932, il franchit le pas du professionnalisme, et participe au premier championnat du genre organisé en France. Pendant trente ans, le Stade rennais UC sillonne les divisions professionnelles sans parvenir réellement à y briller. En 1964, l'arrivée comme entraîneur de Jean Prouff est un déclic. En l'espace de sept ans, le Stade rennais UC remporte par deux fois la Coupe de France en 1965 et 1971, fait l'expérience de deux participations à la Coupe d'Europe des vainqueurs de coupe, et s'installe de fait parmi les meilleures équipes de l'hexagone.

L'année 1972 voit la section football se séparer de la structure omnisports, et prendre le nom de Stade rennais Football Club. S'ensuit une période de crise qui dure jusqu'au milieu des années 1990. Exsangue financièrement, le club accuse un déficit considérable qui le précipite au bord de la disparition pure et simple en 1978. Il remonte peu à peu la pente jusqu'en 1998, date de la prise de contrôle de François Pinault et de sa holding Artémis, qui permet au Stade rennais FC de se stabiliser en première division, de moderniser ses infrastructures et de revoir à la hausse ses ambitions. Après une période de tâtonnement, le club parvient lors des années 2000 à devenir un postulant régulier aux qualifications européennes, mais ne parvient cependant pas à enrichir son palmarès, malgré deux nouvelles finales de Coupe de France disputées en 2009 et en 2014, et une première finale de Coupe de la Ligue en 2013.

En 2019, cette série de revers s'interrompt avec une troisième victoire en Coupe de France, obtenue face au Paris Saint-Germain, battu aux tirs au but en finale. 
        </p>
      </div>
      {/* Article Content Ends */}
    </article>
    // Article Ends
  );
};

export default ModalTwoBlogContent;
