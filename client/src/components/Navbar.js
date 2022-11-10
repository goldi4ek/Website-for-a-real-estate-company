import { Component } from "react";
import "./NavbarStyles.css";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";
import {check} from "../http/userAPI";


let auth = false
check().then(data => {
    auth = true
})
class Navbar extends Component {
  // Set state
  state = {clicked: false};
  handleClick = () => {
      this.setState({clicked: !this.state.clicked})
  }
  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">Easybud</
            h1>

          <div className="menu-icons" onClick={this.handleClick}>
              <i className= {this.state.clicked ?
                  "fas fa-times" : "fas fa-bars"}></i>
          </div>

        <ul className={this.state.clicked ?
            "nav-menu active" : "nav-menu"}>
            {MenuItems.map((item, index) => {
                return(
                    <li key = {index}>
                        <Link className=
                               {item.cName}
                           to=
                               {item.url}>
              <i className={item.icon}></i>{item.title}
            </Link>
          </li>
                )
            })}
            {auth ? <button onClick={event =>  window.location.href='/admin'}>Admin page</button>: null}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
