import React, { Component } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import Map from "../map";
class ContactPage extends Component {
  state = {};
  validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Veuillez entrer votre nom!")
      .min(3, "Votre nom doit contenir au mois 3 lettres."),
    email: Yup.string().email("Veuillez entrer une addresse mail valide!"),
    subject: Yup.string().min(3, "Le suject doit avoir aumoins 3 lettres."),
    message: Yup.string()
      .min(3, "Votre message est trop court.")
      .required("Veuillez entrer votre message"),
  });
  render() {
    return (
      <div className="contact-page-main-container">
        <div className="header-contact-page">
          <div className="overlay"></div>
          <h1>Contactez Nous</h1>
          {/* <h4>Studio digital crée depuis 2015</h4> */}
        </div>

        <div className="contact-form-main-container">
          <div className="form-wrapper">
            <Formik
              validationSchema={this.validationSchema}
              initialValues={{ name: "", email: "", subject: "", message: "" }}
              onSubmit={(values) => console.log(values)}
            >
              {({
                handleChange,
                touched,
                setFieldTouched,
                errors,
                handleSubmit,
              }) => (
                <>
                  <div className="form-container">
                    <div className="form-control">
                      <input
                        type="text"
                        onChange={handleChange("name")}
                        onBlur={() => setFieldTouched("name")}
                        placeholder="Nom"
                      />
                    </div>
                    {touched["name"] && (
                      <span className="contact-form-error-message">
                        {errors["name"]}
                      </span>
                    )}
                  </div>
                  <div className="form-container">
                    <div className="form-control">
                      <input
                        type="text"
                        onChange={handleChange("email")}
                        onBlur={() => setFieldTouched("email")}
                        placeholder="Email"
                      />
                    </div>
                    {touched["email"] && (
                      <span className="contact-form-error-message">
                        {errors["email"]}
                      </span>
                    )}
                  </div>
                  <div className="form-container">
                    <div className="form-control">
                      <input
                        type="text"
                        onChange={handleChange("subject")}
                        onBlur={() => setFieldTouched("subject")}
                        placeholder="Suject"
                      />
                    </div>
                    {touched["subject"] && (
                      <span className="contact-form-error-message">
                        {errors["subject"]}
                      </span>
                    )}
                  </div>
                  <div className="form-container">
                    <div className="form-control">
                      <textarea
                        type="text"
                        onChange={handleChange("message")}
                        onBlur={() => setFieldTouched("message")}
                        placeholder="Votre message"
                      ></textarea>
                    </div>
                    {touched["message"] && (
                      <span className="contact-form-error-message">
                        {errors["message"]}
                      </span>
                    )}
                  </div>

                  <div className="submit-btn-wrapper">
                    <div className="btn-container" onClick={handleSubmit}>
                      Envoyer
                    </div>
                  </div>
                </>
              )}
            </Formik>
          </div>
          <div className="contact-detail-wrapper">
            <div className="contact-item">
              <h3>Emplacement Postal</h3>
              <p>PO Box 16122 Toronto Eaton Centre,</p>
              <p>Goma Q. katindo Av. Masisi No. 204, RDC</p>
              <p>
                <span>Phone:</span> (+243) 977 962 061
              </p>
              <p>espoirfmb@gmail.com</p>
            </div>
            <div className="contact-item">
              <h3>Heures de Travail</h3>
              <p>Lundi - Vendredi</p>
              <p>7H - 20H</p>
              <p>Samedi - Dimanche</p>
              <p>10H - 22h</p>
            </div>
          </div>
        </div>
        <div className="map-container">
          <Map />
        </div>
      </div>
    );
  }
}

export default ContactPage;
