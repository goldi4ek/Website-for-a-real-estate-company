import "./ObjectStyles.css";
import {deleteOnePurpose} from "../http/purposeAPI";
import {observer} from "mobx-react-lite";
import {useState} from "react";
import UpdateOffer from "./modals/UpateOffer";

const PurposeData = observer((props) => {
    const [purposeVisible, setPurposeVisible] = useState(false)
  return (
    <div className="t-card">
      <div className="t-image">
          <img src={props.image} alt="image"/>
      </div>
        <h4>{props.heading}</h4>
        <p>{props.email}</p>
        <p>{props.phone}</p>
        <p>{props.text}</p>
        <button onClick={() => setPurposeVisible(true)}>Edit</button>
        <button onClick={() => {deleteOnePurpose(props.id); window.location.reload()}}>Delete</button>
        <UpdateOffer show={purposeVisible}
                     onHide={() => setPurposeVisible(false)}
                     name_={props.heading}
                     room_={props.room}
                     price_={props.price}
                     file_ = {props.file}
                     id = {props.id}
        />
    </div>
  );
})

export default PurposeData;
