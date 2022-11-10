import "./AdminMenuStyles.css";
import CreateOffer from "./modals/CreateOffer";
import {useContext, useState} from "react";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {useNavigate} from "react-router-dom";




const AdminMenu = observer(() => {
    const navigate = useNavigate()
    const [purposeVisible, setPurposeVisible] = useState(false)
    const {user} = useContext(Context)
    const log = () => {
        localStorage.clear()
        user.setUser({})
        user.setIsAuth(false)
        window.location.href='/'
    }

    return(
        <div className="from-container">
            <button onClick={() => setPurposeVisible(true)}>Add new offer</button>
            <button onClick={() => navigate("/contactview")}>View contacts</button>
            <button onClick={() => log()}>Log out</button>
            <CreateOffer show={purposeVisible} onHide={() => setPurposeVisible(false)}/>
        </div>
    )

})

export default AdminMenu;