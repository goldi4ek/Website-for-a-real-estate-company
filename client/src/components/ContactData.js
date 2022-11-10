import "./ObjectStyles.css";

function ContactData(props) {
  return (
    <div className="t-card">
        <h4>{props.heading}</h4>
        <p>{props.email}</p>
        <p>{props.phone}</p>
        <p>{props.text}</p>
    </div>
  );
}

export default ContactData;