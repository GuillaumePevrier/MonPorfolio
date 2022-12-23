import React from "react";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
    e.target.reset();
    console.log("Message submited: " + JSON.stringify(data));
  };

  return (
    <>
      <form className="contactform" onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="form-group">
              <input
                {...register("name", { required: true })}
                type="text"
                name="name"
                placeholder="VOTRE NOM"
              />
              {errors.name && errors.name.type === "required" && (
                <span className="invalid-feedback">Le nom est requis</span>
              )}
            </div>
          </div>
          {/* End .col */}

          <div className="col-12 col-md-6">
            <div className="form-group">
              <input
                {...register(
                  "email",
                  {
                    required: "Email est obligatoire",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "La valeur saisie ne correspond pas au format de l'e-mail",
                    },
                  },
                  { required: true }
                )}
                type="email"
                name="email"
                placeholder="VOTRE EMAIL"
              />
              {errors.email && (
                <span className="invalid-feedback">{errors.email.message}</span>
              )}
            </div>
          </div>
          {/* End .col */}

          <div className="col-12 col-md-12">
            <div className="form-group">
              <input
                {...register("subject", { required: true })}
                type="text"
                name="subject"
                placeholder="VOTRE SUJET"
              />
              {errors.subject && (
                <span className="invalid-feedback">Le nom est requis.</span>
              )}
            </div>
          </div>
          {/* End .col */}

          <div className="col-12">
            <div className="form-group">
              <textarea
                {...register("message", { required: true })}
                name="message"
                placeholder="VOTRE MESSAGE"
              ></textarea>
              {errors.message && (
                <span className="invalid-feedback">Le nom est requis.</span>
              )}
            </div>
          </div>
          {/* End .col */}

          <div className="col-12">
            <button type="submit" className="button">
              <span className="button-text">Envoyer le message</span>
              <span className="button-icon fa fa-send"></span>
            </button>
          </div>
          {/* End .col */}
        </div>
      </form>

      {/* End contact */}
    </>
  );
};

export default Contact;
