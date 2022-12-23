import React from "react";

const ModalSixBlogContent = () => {
  return (
    //  Article Starts
    <article>
      <div className="title-section text-left text-sm-center">
        <h1>
          Post <span>VOYAGES</span>
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
          <i className="fa fa-tags"></i> Voyages, France, Vacances, Famille
        </span>
      </div>
      {/* Meta Ends */}
      {/* Article Content Starts */}

      <h1>J'aime découvrir les régions et histoire de la FRANCE.</h1>
      <img src="img/blog/blog-post-6.jpg" className="img-fluid" alt="Blog" />
      <div className="blog-excerpt open-sans-font pb-5">
        <p>
          Je suis interessé par l' histoire et les voyages. Je prends beaucoup de plaisir à visiter
          nos régions française. 
        </p>
        <div className="quotebox">
          <div className="icon">
            <img src="img/blog/quote.svg" alt="blog quote" />
          </div>
          <p>
            Nous avons pas besoin de voyager loin pour observer des magnifiques endroits. La FRANCE regorge 
            de destinations inconnues et splendides...
          </p>
        </div>
        
      </div>
      {/* Article Content Ends */}
    </article>
    // Article Ends
  );
};

export default ModalSixBlogContent;
