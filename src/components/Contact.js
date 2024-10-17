import "./Contact.css";
import ContactImage from "../sliderImages/Image_slider2.webp";

const Contact = () => {
  return (
    <main className="contact contact-grid">
      <div className="contact-image-container">
        <img
          src={ContactImage}
          alt="A group of 3 women getting ready for a wedding"
          className="contact-image"
          width="100%"
        />
      </div>
      <div className="contact-container">
        <div className="contact-form-container">
          <h1 className="contact-intro-heading">Get in touch with me!</h1>
          <p className="contact-intro-text contact-section-padding">
            I would love to hear from you regarding your special day. Send me a
            message and I'll get back to you as soon as possible!
          </p>
          <form
            className="contact-form"
            action="https://formsubmit.co/weddinghair@nickyolivier.com"
            method="POST"
          >
            <label htmlFor="name">Name:</label>
            <input
              className="input-field name-input-field contact-form-padding contact-form-text-padding"
              type="text"
              id="name"
              name="name"
            />

            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              name="email"
              className="input-field email-input-field contact-form-padding contact-form-text-padding"
            />

            <label htmlFor="bridalParty">Bridal party size:</label>
            <select
              id="bridalParty"
              name="bridalParty"
              className="input-field email-input-field contact-form-padding contact-form-text-padding"
            >
              <option value="1">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
            </select>

            <label htmlFor="weddingDate">Wedding date (dd/mm/yyyy):</label>
            <input
              type="text"
              id="weddingDate"
              name="weddingDate"
              className="input-field email-input-field contact-form-padding contact-form-text-padding"
            />

            <label htmlFor="destination">Destination:</label>
            <input
              type="text"
              id="destination"
              name="destination"
              className="input-field email-input-field contact-form-padding contact-form-text-padding"
            />

            <label htmlFor="message">Message:</label>
            <textarea
              type="text"
              id="message"
              name="message"
              cols="60"
              rows="8"
              className="message-field input-field contact-form-padding"
            />
            <button
              className="form-submit-button button contact-button-margin"
              type="submit"
              value="Submit"
            >
              <h3>Submit</h3>
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Contact;
