import "./AdminMenuStyles.css";
import CreateOffer from "./modals/CreateOffer";
import ViewContact from "./modals/ViewContact";
import {useState} from "react";


const AdminMenu = () => {
    const [purposeVisible, setPurposeVisible] = useState(false)
    const [contactVisible, setContactVisible] = useState(false)
    return(
        <div className="from-container">
            <button onClick={() => setPurposeVisible(true)}>Add new offer</button>
            <button onClick={() => setContactVisible(true)}>View contacts</button>
            <CreateOffer show={purposeVisible} onHide={() => setPurposeVisible(false)}/>
            <ViewContact show={contactVisible} onHide={() => setContactVisible(false)}/>
        </div>
    )

}

export default AdminMenu;