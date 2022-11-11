import "./ObjectStyles.css";
import {Button} from "react-bootstrap";
import {deleteOnePurpose} from "../http/purposeAPI";

function PurposeData(props) {
  return (
    <div className="t-card">
      <div className="t-image">
          <img src={props.image} alt="image"/>
      </div>
        <h4>{props.heading}</h4>
        <p>{props.email}</p>
        <p>{props.phone}</p>
        <p>{props.text}</p>
        <Button onClick={() => {deleteOnePurpose(props.id); window.location.reload()}}>Delete</Button>
    </div>
  );
}

export default PurposeData;
