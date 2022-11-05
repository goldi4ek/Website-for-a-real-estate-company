import "./ContactFormStyles.css";
import {useState} from "react";
import {createContact} from "../http/contactAPI";

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const validate = () => {
      if (name.length > 0  && email.length > 0 && phone.length > 0) {
          return true;
      }
  };

  const handleSubmit = (event) => {
      const formData = new FormData()
      formData.append('name', name)
      formData.append('email', email)
      formData.append('phone', phone)
      formData.append('message', message)
      createContact(formData)
   }

  return (
    <div className="from-container">
      <h1>Share your contact with us!</h1>
        <form onSubmit={handleSubmit}>
            <input type="name" value={name} placeholder="Name" onChange={(e) => { setName(e.target.value) }}/>
            <input type="email" value={email} placeholder="Email" onChange={(e) => { setEmail(e.target.value) }}/>
            <input type="phone" value={phone} placeholder="Phone number" onChange={(e) => { setPhone(e.target.value) }}/>
            <textarea value={message} placeholder="Message" rows="4" onChange={(e) => { setMessage(e.target.value) }}></textarea>
            <button type='submit' disabled={!validate()} >Share Contact</button>
        </form>
    </div>
  );
}

export default ContactForm;
