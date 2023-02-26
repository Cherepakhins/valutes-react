import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";
class Nav extends React.Component {
    
    render () {
        return(
            <nav>
                <div className="container">
                    <ul className="nav-links">
                        <li className="nav-item">
                            <NavLink to="/">
                                Главная
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/currentsValutes">
                                Текущие курсы валют
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}
export default Nav;