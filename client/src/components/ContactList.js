import "./ObjectStyles.css";
import {useContext, useEffect, useState} from "react";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {fetchContact} from "../http/contactAPI";
import ContactData from "./ContactData";

const ContactList = observer(() => {

    const {contact} = useContext(Context)
    let [count, setCount] = useState(0)
    useEffect(() => {
        fetchContact().then(data => {
            contact.setContacts(data.rows)
            setCount(data.count)
        })
    }, [contact])
    return (
    <div className="contact">
      <h1>Contacts {count}</h1>
        <div className="object">
            {contact.contacts.map(contact =>
                <ContactData
                    key={contact.id}
                    heading={contact.name}
                    email={" Email: " + contact.email}
                    phone={" Phone: " + contact.phone}
                    text={contact.message}
                />
            )}
        </div>
    </div>

  );
})

export default ContactList;