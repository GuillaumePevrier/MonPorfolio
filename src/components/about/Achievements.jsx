import React from "react";

const achievementsContent = [
  { title: "Personnalité", subTitle1: "", subTitle2: "Dévoué, esprit d'équipe, Force de proposition." },
  { title: "Bureautique", subTitle1: "", subTitle2: "Pack OFFICE, Pack ADOBE, VISUAL STUDIO, Xcode, Nuage collaboratif, SAAS Gestion de projets, Windows, Mac OS." },
  { title: "Centres d'interets", subTitle1: "", subTitle2: "Informatique, développeur Web, Réalitée virtuelle, Sport, Bricolage, Jardinage, Bénévole dans le service communication Web d'un club sportif." },
  { title: "Langues parlées", subTitle1: "", subTitle2: "Anglais, Allemand." },
];

const Achievements = () => {
  return (
    <div className="row">
      {achievementsContent.map((val, i) => (
        <div className="col-6" key={i}>
          <div className="box-stats with-margin">
            <h4 className="poppins-font position-relative">{val.title}</h4>
            <p className="open-sans-font m-0 position-relative text-uppercase">
              {val.subTitle1} <span className="d-block">{val.subTitle2}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Achievements;
