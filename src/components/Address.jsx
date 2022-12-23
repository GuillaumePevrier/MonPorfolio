import React from "react";

const Address = () => {
  return (
    <>
      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-map position-absolute"></i>
        <span className="d-block">Mon adresse</span>à NOYAL SUR VILAINE.
      </p>
      {/* End .custom-span-contact */}

      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-envelope-open position-absolute"></i>
        <span className="d-block">Mon adresse email</span>{" "}
        <a href="mailto:guillaumepevrier@gmail.com">guillaumepevrier@gmail.com</a>
      </p>
      {/* End .custom-span-contact */}

      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-phone-square position-absolute"></i>
        <span className="d-block">Appelez moi</span>{" "}
        <a href="Tel:0652121661">06 52 12 16 61</a>
      </p>
      {/* End .custom-span-contact */}
    </>
  );
};

export default Address;
