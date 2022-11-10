import "./AuthFormStyles.css";
import {useContext, useState} from "react";
import {login} from "../http/userAPI";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {useNavigate} from "react-router-dom";


const AuthForm = observer(() => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {user} = useContext(Context)
  const click = async (event) => {
      try {
          event.preventDefault();
          await login(email, password);
          user.setUser(user)
          user.setIsAuth(true)
          window.location.href='/admin'
      }catch (e) {
          alert(e.response.data.message)
      }
  }

  const validate = () => {
      if (password.length > 0  && email.length > 0) {
          return true;
      }
  };

  return (
    <div className="from-container">
      <h1>Authorization</h1>
        <form onSubmit={click}>
            <input type="email" value={email} placeholder="Email" onChange={(e) => { setEmail(e.target.value) }}/>
            <input type="password" value={password} placeholder="Password" onChange={(e) => { setPassword(e.target.value) }}/>
            <button type="submit" disabled={!validate()}>Login</button>
        </form>
    </div>
  );
})

export default AuthForm;