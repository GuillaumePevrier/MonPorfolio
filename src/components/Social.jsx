import React from "react";

const SocialShare = [
  {
    iconName: "fa fa-facebook",
    link: "https://www.facebook.com/guillaume.pevrier/",
  },
  { iconName: "fa fa-instagram", link: "https://www.instagram.com/pevrier/?hl=fr" },
  {
    iconName: "fa fa-youtube",
    link: "https://www.youtube.com/channel/UC8qI-a9PBTQs3qGPSZrY01w",
  },
  { iconName: "fa fa-linkedin", link: "https://www.linkedin.com/in/guillaume-p%C3%A9vrier-50a776159/" },
];

const Social = () => {
  return (
    <ul className="social list-unstyled pt-1 mb-5">
      {SocialShare.map((val, i) => (
        <li key={i}>
          <a href={val.link} target="_blank" rel="noreferrer">
            <i className={val.iconName}></i>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Social;
