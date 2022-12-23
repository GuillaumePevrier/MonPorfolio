import React from "react";

const personalInfoContent = [
  { meta: "Prénom", metaInfo: "Guillaume" },
  { meta: "Nom", metaInfo: "PEVRIER" },
  { meta: "Age", metaInfo: "39 ans" },
  { meta: "Nationalité", metaInfo: "Française" },
  { meta: "Permis", metaInfo: "B" },
  { meta: "Adresse", metaInfo: "à NOYAL SUR VILAINE" },
  { meta: "Téléphone", metaInfo: "06 52 12 16 61" },
  { meta: "Email", metaInfo: "guillaumepevrier@gmail.com" },
  { meta: "Instagram", metaInfo: " @guillaumepevrier" },
  { meta: "langues", metaInfo: "Français, Anglais, Allemand." },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
