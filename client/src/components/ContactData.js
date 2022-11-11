import "./ObjectStyles.css";
import {Button} from "react-bootstrap";
import {deleteOneContact} from "../http/contactAPI";

function ContactData(props) {
  return (
    <div className="t-card">
        <h4>{props.heading}</h4>
        <p>{props.email}</p>
        <p>{props.phone}</p>
        <p>{props.text}</p>
        <Button onClick={() => {deleteOneContact(props.id); window.location.reload()}}>Delete</Button>
    </div>
  );
}

export default ContactData;