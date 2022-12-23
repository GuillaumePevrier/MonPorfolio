import React, { useState } from "react";
import Modal from "react-modal";

import ModalOneBlogContent from "./modal/ModalOneBlogContent";
import ModalTwoBlogContent from "./modal/ModalTwoBlogContent";
import ModalThreeBlogContent from "./modal/ModalThreeBlogContent";
import ModalFourBlogContent from "./modal/ModalFourBlogContent";
import ModalFiveBlogContent from "./modal/ModalFiveBlogContent";
import ModalSixBlogContent from "./modal/ModalSixBlogContent";

Modal.setAppElement("#root");

const BlogLight = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);

  function toggleModalOne() {
    setIsOpen(!isOpen);
  }
  function toggleModalTwo() {
    setIsOpen2(!isOpen2);
  }
  function toggleModalThree() {
    setIsOpen3(!isOpen3);
  }
  function toggleModalFour() {
    setIsOpen4(!isOpen4);
  }
  function toggleModalFive() {
    setIsOpen5(!isOpen5);
  }
  function toggleModalSix() {
    setIsOpen6(!isOpen6);
  }

  return (
    <>
      {/* Blog 1 Starts */}
      <div className="col-12 col-md-6 col-lg-6 col-xl-4 mb-30">
        <article className="post-container" onClick={toggleModalOne}>
          <div className="post-thumb">
            <div className="d-block position-relative overflow-hidden">
              <img
                src="img/blog/blog-post-1.jpg"
                className="img-fluid"
                alt="Blog Post"
              />
            </div>
          </div>
          {/* End .thumb */}
          <div className="post-content">
            <div className="entry-header">
              <h3>Artiste au sein d'une troupe de plongeurs de haut vol.</h3>
            </div>
            <div className="entry-content open-sans-font">
              <p>
              Spectacles de plongeons de haut vol (25 Mètres) en Allemagne des des parc d'attractions ...
              </p>
            </div>
          </div>
          {/* End .post-content */}
        </article>

        {/* Start ModalOneBlogContent */}
        <Modal
          isOpen={isOpen}
          onRequestClose={toggleModalOne}
          contentLabel="My dialog"
          className="custom-modal "
          overlayClassName="custom-overlay green"
          closeTimeoutMS={500}
        >
          <div>
            <button className="close-modal" onClick={toggleModalOne}>
              <img src="/img/cancel.svg" alt="close icon" />
            </button>
            {/* End close icon */}

            <div className="box_inner blog-post">
              <ModalOneBlogContent />
            </div>
          </div>
        </Modal>
        {/* End  ModalOneBlogContent */}
      </div>
      {/*  Blog 1 Ends */}

      {/*  Blog 2 Starts */}
      <div className="col-12 col-md-6 col-lg-6 col-xl-4 mb-30">
        <article className="post-container" onClick={toggleModalTwo}>
          <div className="post-thumb">
            <div className="d-block position-relative overflow-hidden">
              <img
                src="img/blog/blog-post-2.jpg"
                className="img-fluid"
                alt="Blog Post"
              />
            </div>
          </div>
          {/* End .thumb */}
          <div className="post-content">
            <div className="entry-header">
              <h3>Passionné par le football et supporter du Stade RENNAIS.</h3>
            </div>
            <div className="entry-content open-sans-font">
              <p>
              Je supporte l'équipe du stade RENNAIS depuis 2014. Spectacles et ambiances de fetes ...
              </p>
            </div>
          </div>
          {/* End .post-content */}
        </article>

        {/* Start ModalTwoBlogContent */}
        <Modal
          isOpen={isOpen2}
          onRequestClose={toggleModalTwo}
          contentLabel="My dialog"
          className="custom-modal "
          overlayClassName="custom-overlay green"
          closeTimeoutMS={500}
        >
          <div>
            <button className="close-modal" onClick={toggleModalTwo}>
              <img src="/img/cancel.svg" alt="close icon" />
            </button>
            {/* End close icon */}

            <div className="box_inner blog-post">
              <ModalTwoBlogContent />
            </div>
          </div>
        </Modal>
        {/* End  ModalTwoBlogContent */}
      </div>
      {/*  Blog 2 Ends */}

      {/*  Blog 3 Starts */}
      <div className="col-12 col-md-6 col-lg-6 col-xl-4 mb-30">
        <article className="post-container" onClick={toggleModalThree}>
          <div className="post-thumb">
            <div className="d-block position-relative overflow-hidden">
              <img
                src="img/blog/blog-post-3.jpg"
                className="img-fluid"
                alt="Blog Post"
              />
            </div>
          </div>
          {/* End .thumb */}
          <div className="post-content">
            <div className="entry-header">
              <h3>Joueur de l'équipe FUTSAL, de NOYAL SUR VILAINE.</h3>
            </div>
            <div className="entry-content open-sans-font">
              <p>
              L'équipe de NBFC Futsal est un groupe soudé qui progresse chaque année...
              </p>
            </div>
          </div>
          {/* End .post-content */}
        </article>

        {/* Start ModalThreeBlogContent */}
        <Modal
          isOpen={isOpen3}
          onRequestClose={toggleModalThree}
          contentLabel="My dialog"
          className="custom-modal "
          overlayClassName="custom-overlay green"
          closeTimeoutMS={500}
        >
          <div>
            <button className="close-modal" onClick={toggleModalThree}>
              <img src="/img/cancel.svg" alt="close icon" />
            </button>
            {/* End close icon */}

            <div className="box_inner blog-post">
              <ModalThreeBlogContent />
            </div>
          </div>
        </Modal>
        {/* End  ModalThreeBlogContent */}
      </div>
      {/* Blog 3 Ends */}

      {/* Blog 4 Starts */}
      <div className="col-12 col-md-6 col-lg-6 col-xl-4 mb-30">
        <article className="post-container" onClick={toggleModalFour}>
          <div className="post-thumb">
            <div className="d-block position-relative overflow-hidden">
              <img
                src="img/blog/blog-post-4.jpg"
                className="img-fluid"
                alt="Blog Post"
              />
            </div>
          </div>
          {/* End .thumb */}
          <div className="post-content">
            <div className="entry-header">
              <h3>Foire exposition en ALLEMAGNE pour Mueller Industrietechnk.</h3>
            </div>
            <div className="entry-content open-sans-font">
              <p>
              Expérience formatrice de commerce international à la foire du BAULMA à HANNOVER...
              </p>
            </div>
          </div>
          {/* End .post-content */}
        </article>

        {/* Start ModalFourBlogContent */}
        <Modal
          isOpen={isOpen4}
          onRequestClose={toggleModalFour}
          contentLabel="My dialog"
          className="custom-modal "
          overlayClassName="custom-overlay green"
          closeTimeoutMS={500}
        >
          <div>
            <button className="close-modal" onClick={toggleModalFour}>
              <img src="/img/cancel.svg" alt="close icon" />
            </button>
            {/* End close icon */}

            <div className="box_inner blog-post">
              <ModalFourBlogContent />
            </div>
          </div>
        </Modal>
        {/* End  ModalFourBlogContent */}
      </div>
      {/* Blog 4  Ends */}

      {/*  Blog 5 Starts */}
      <div className="col-12 col-md-6 col-lg-6 col-xl-4 mb-30">
        <article className="post-container" onClick={toggleModalFive}>
          <div className="post-thumb">
            <div className="d-block position-relative overflow-hidden">
              <img
                src="img/blog/blog-post-5.jpg"
                className="img-fluid"
                alt="Blog Post"
              />
            </div>
          </div>
          {/* End .thumb */}
          <div className="post-content">
            <div className="entry-header">
              <h3>J'aime bricoler des ouvrages sur mon temps libre.</h3>
            </div>
            <div className="entry-content open-sans-font">
              <p>
              Construire et bricoler pour réaliser des projets utiles à mon entourage fait partie aussi de mes passions...
              </p>
            </div>
          </div>
          {/* End .post-content */}
        </article>

        {/* Start ModalFiveBlogContent */}
        <Modal
          isOpen={isOpen5}
          onRequestClose={toggleModalFive}
          contentLabel="My dialog"
          className="custom-modal "
          overlayClassName="custom-overlay green"
          closeTimeoutMS={500}
        >
          <div>
            <button className="close-modal" onClick={toggleModalFive}>
              <img src="/img/cancel.svg" alt="close icon" />
            </button>
            {/* End close icon */}

            <div className="box_inner blog-post">
              <ModalFiveBlogContent />
            </div>
          </div>
        </Modal>
        {/* End  ModalFiveBlogContent */}
      </div>
      {/*  Blog 5 Ends */}

      {/* Blog 6 Starts */}
      <div className="col-12 col-md-6 col-lg-6 col-xl-4 mb-30">
        <article className="post-container" onClick={toggleModalSix}>
          <div className="post-thumb">
            <div className="d-block position-relative overflow-hidden">
              <img
                src="img/blog/blog-post-6.jpg"
                className="img-fluid"
                alt="Blog Post"
              />
            </div>
          </div>
          {/* End .thumb */}
          <div className="post-content">
            <div className="entry-header">
              <h3>J'aime découvrir les régions et histoire de la FRANCE.</h3>
            </div>
            <div className="entry-content open-sans-font">
              <p>
              Voyager en famille et découvrir les régions et destinations en france pendant les vacances...
              </p>
            </div>
          </div>
          {/* End .post-content */}
        </article>

        {/* Start ModalSixBlogContent */}
        <Modal
          isOpen={isOpen6}
          onRequestClose={toggleModalSix}
          contentLabel="My dialog"
          className="custom-modal "
          overlayClassName="custom-overlay green"
          closeTimeoutMS={500}
        >
          <div>
            <button className="close-modal" onClick={toggleModalSix}>
              <img src="/img/cancel.svg" alt="close icon" />
            </button>
            {/* End close icon */}

            <div className="box_inner blog-post">
              <ModalSixBlogContent />
            </div>
          </div>
        </Modal>
        {/* End  ModalSixBlogContent */}
      </div>
      {/* Blog 6 Ends */}
    </>
  );
};

export default BlogLight;
