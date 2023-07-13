import "./Contact.css";

const Contact = () => {
  return (
    <main className="contact">
      <h1 className="contact-intro-heading">Get in touch with me!</h1>
      <p className="contact-intro-text">
        Enquire here for a service and I’ll be in touch
      </p>
      <form
        className="contact-form"
        action="https://formsubmit.co/hello@nickyolivier.com"
        method="POST"
      >
        <label htmlFor="name">Name:</label>
        <input className="inputField" type="text" id="name" name="name" />

        <label htmlFor="email">Email:</label>
        <input type="text" id="email" name="email" className="inputField" />

        <label htmlFor="service">Service:</label>
        <select className="inputField" name="services" id="service">
          <option value="reiki">Reiki</option>
          <option value="oracle">Oracle card reading</option>
          <option value="medium">Mediumship reading</option>
        </select>

        <label htmlFor="message">Message:</label>
        <textarea
          type="text"
          id="message"
          name="message"
          cols="60"
          rows="8"
          className="messageField inputField"
        />

        <button
          className="form-submit-button button"
          type="submit"
          value="Submit"
        >
          <h3>Submit</h3>
        </button>
      </form>
    </main>
  );
};

export default Contact;
