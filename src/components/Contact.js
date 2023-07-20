import "./Contact.css";

const Contact = () => {
  return (
    <main className="contact">
      <div className="contact-container">
        <h1 className="contact-intro-heading">Get in touch with me!</h1>
        <p className="contact-intro-text contact-section-padding">
          Send me a message and I'll get back to you as soon as possible!
        </p>
        <form
          className="contact-form"
          action="https://formsubmit.co/hello@nickyolivier.com"
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
    </main>
  );
};

export default Contact;
