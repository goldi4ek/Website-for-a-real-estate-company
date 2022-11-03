import "./ContactFormStyles.css";

function ContactForm() {
  return (
    <div className="from-container">
      <h1>Share your contact with us!</h1>
        <form>
            <input placeholder="Name"/>
            <input placeholder="Email"/>
            <input placeholder="Phone number"/>
            <textarea placeholder="Message" rows="4"></textarea>
            <button>Share Contact</button>
        </form>
    </div>
  );
}

export default ContactForm;
