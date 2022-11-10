import "./styles.css";
import { Route, Routes, Navigate} from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Service from "./routes/Service";
import Contact from "./routes/Contact";
import Login from "./routes/Auth";
import Admin from "./routes/Admin";
import ContactView from "./routes/ContactView";
import {observer} from "mobx-react-lite";
import {useContext, useEffect, useState} from "react";
import {Context} from "./index";
import {check} from "./http/userAPI";
import {Spinner} from "react-bootstrap";



const App = observer( () => {
      const {user} = useContext(Context)
      const [loading, setLoading] = useState(true)

      useEffect(() => {
          check().then(data => {
              user.setUser(true)
              user.setIsAuth(true)
          }).finally(() => setLoading(false))
        }, [user])
        if (loading) {
                return <Spinner animation={"grow"}/>
            }
      return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/service" element={<Service/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/admin" element={user.isAuth ? <Admin/> : <Navigate to="/login"/>}/>
                <Route path="/contactview" element={user.isAuth ? <ContactView/> : <Navigate to="/login"/>}/>
                <Route path='*' element={<Navigate to='/'/>} />
            </Routes>
        </div>
      );
});

export default App;