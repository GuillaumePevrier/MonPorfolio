import React from "react";

const experienceContent = [
  {
    year: "Février 2022 à Octobre 2022",
    position: "Responsable qualité",
    compnayName: "Groupe VALEOR - RENNES",
    details: `Gestion des plannings, commande fournisseurs, gestion SAV, traitements des mails, état préparatoire des paies.`,
  },
  {
    year: "2017 - 2021",
    position: "Assistant de direction",
    compnayName: "SYNAPSE OUEST- CESSON SEVIGNE - Entreprise de dématérialisation des appels offres du BTP et de l'immobilier.",
    details: `Accueil téléphonique, saisie des appels d’offres, traitement des mails, mise à jour de la base de données clients, gestion de l’équipe opérationnelle.`,
  },
  {
    year: "2014-2020",
    position: "Auto entrepreneur",
    compnayName: "ACCESS CAB - RENNES - E-commerce de gros de pièces détachées et accessoires pour engins de travaux publics et agricoles.",
    details: `Gestion de l’entreprise, accueil téléphonique, traitement des mails, des commandes et de la facturation clients. Réalisation et maintenance des site e-commences de l’entreprise. Contact permanent avec le fournisseur allemand des pièces détachées pour la gestion des commandes et des livraisons des clients.`,
  },
  {
    year: "2005-2014",
    position: "Assistant Administratif",
    compnayName: "MUELLER INDUSTRIETECHNIK - WALSRODE ALLEMAGNE - Entreprise de commerce de gros de pièces détachées et accessoires pour les engins des travaux publics et agricole.",
    details: `Accueil téléphonique, traitement des mails, traduction et réalisation du catalogue produits, réalisation et maintenance des sites e-commerce de l’entreprise, organisation et participation des foires exposition, relations commerciales avec les clients internationaux`,
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
