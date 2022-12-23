import React from "react";

const skillsContent = [
  { skillClass: "p50", skillPercent: "50", skillName: "HTML5" },
  { skillClass: "p40", skillPercent: "40", skillName: "JAVASCRIPT" },
  { skillClass: "p40", skillPercent: "40", skillName: "CSS3" },
  { skillClass: "p75", skillPercent: "75", skillName: "PRESPASHOP" },
  { skillClass: "p80", skillPercent: "80", skillName: "WORDPRESS" },
  { skillClass: "p50", skillPercent: "50", skillName: "META" },
  { skillClass: "p65", skillPercent: "65", skillName: "PHOTOSHOP" },
  { skillClass: "p45", skillPercent: "45", skillName: "UNITY 3D" },
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="col-6 col-md-3 mb-3 mb-sm-5" key={i}>
          <div className={`c100 ${val.skillClass}`}>
            <span>{val.skillPercent}%</span>
            <div className="slice">
              <div className="bar"></div>
              <div className="fill"></div>
            </div>
          </div>
          <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
            {val.skillName}
          </h6>
        </div>
      ))}
    </>
  );
};

export default Skills;
