import "./styles.css";
import { Route, Routes, Navigate} from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Service from "./routes/Service";
import Contact from "./routes/Contact";
import Login from "./routes/Auth";
import Admin from "./routes/Admin";
import {observer} from "mobx-react-lite";
import {useContext} from "react";
import {Context} from "./index";


const App = observer( () => {
      const {user} = useContext(Context)
      return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/service" element={<Service/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/admin" element={user.isAuth ? <Admin/> : <Navigate to="/login"/>}/>
                <Route path='*' element={<Navigate to='/'/>} />
            </Routes>
        </div>
      );
});

export default App;