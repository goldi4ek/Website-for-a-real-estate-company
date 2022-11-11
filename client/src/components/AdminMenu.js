import "./AdminMenuStyles.css";
import CreateOffer from "./modals/CreateOffer";
import {useContext, useState} from "react";
import {observer} from "mobx-react-lite";
import {Context} from "../index";


const AdminMenu = observer(() => {
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
            <button onClick={() => window.location.href='/admin/offers'}>View offers</button>
            <button onClick={() => window.location.href='/admin/contacts'}>View contacts</button>
            <button onClick={() => log()}>Log out</button>
            <CreateOffer show={purposeVisible} onHide={() => setPurposeVisible(false)}/>
        </div>
    )

})

export default AdminMenu;