import React, { Component } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
// import Map from "../map";
import axios from "axios";
import { toast } from "react-toastify";

class ContactPage extends Component {
  state = {
    response: "",
    sending: false,
  };

  validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Veuillez entrer votre nom.")
      .min(3, "Votre nom doit contenir au mois 3 lettres."),
    email: Yup.string()
      .email("Veuillez entrer une addresse mail valide!")
      .required("Veuillez entrer votre address Email."),
    phone: Yup.string().required("Veuillez entrer votre numéro de téléphone."),
    subject: Yup.string()
      .min(3, "Le suject doit avoir aumoins 3 lettres.")
      .required(
        "Veuillez entrer le suject sur lequel vous voulez nous écrire."
      ),
    message: Yup.string()
      .min(3, "Votre message est trop court.")
      .required("Veuillez entrer votre message."),
  });
  handleSendMessage = async (
    message,
    { setSubmitting, setStatus, resetForm }
  ) => {
    this.setState({ sending: true });
    const baseUrl = process.env.REACT_APP_BASE_URL;

    const newMessage = {
      authorName: message.name,
      authorEmail: message.email,
      authorPhone: message.phone,
      subject: message.subject,
      body: message.message,
    };
    try {
      const response = await axios.post(`${baseUrl}/api/contacts`, newMessage, {
        headers: {
          "x-auth-token-fmb-app": process.env.REACT_APP_SEND_EMAIL_AUTH_TOKEN,
        },
      });

      toast.success("Votre message a été envoyé avec success!");
      this.setState({ response, sending: false });
      resetForm({});
      setStatus({ success: true });
      this.props.history.replace("/home");
    } catch (ex) {
      this.setState({ sending: false });
      setStatus({ success: false });
      setSubmitting(false);
      toast.error(
        "Désolé votre message n'a pas été envoyé. veuillez vérifier connexion internet puis reéssayer!"
      );
    }
  };
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
              initialValues={{
                name: "",
                email: "",
                subject: "",
                message: "",
                phone: "",
              }}
              onSubmit={this.handleSendMessage}
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
                      <input
                        type="text"
                        onChange={handleChange("phone")}
                        onBlur={() => setFieldTouched("phone")}
                        placeholder="Télephone"
                      />
                    </div>
                    {touched["phone"] && (
                      <span className="contact-form-error-message">
                        {errors["phone"]}
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

                  {this.state.sending ? (
                    <div className="loading-spinner-container">
                      <div class="loader"></div>
                    </div>
                  ) : (
                    <div>
                      <div className="submit-btn-wrapper">
                        <div className="btn-container" onClick={handleSubmit}>
                          Envoyer
                        </div>
                      </div>
                    </div>
                  )}
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
        {/* <div className="map-container">
          <Map />
        </div> */}
      </div>
    );
  }
}

export default ContactPage;
