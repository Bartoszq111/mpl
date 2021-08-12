import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserCircle,
  faCog,
  faNewspaper,
  faPlayCircle,
} from "@fortawesome/free-solid-svg-icons";

const Menu = () => {
  return (
    <div className="app__leftside__menu">
      <nav>
        <ul>
          <li>
            <NavLink to="/profile" activeClassName="active">
              <FontAwesomeIcon
                icon={faUserCircle}
                className="icon"
              ></FontAwesomeIcon>{" "}
              Profil
              <br />
              użytkownika
            </NavLink>
          </li>
          <li>
            <NavLink to="/settings" activeClassName="active">
              <FontAwesomeIcon icon={faCog} className="icon"></FontAwesomeIcon>{" "}
              Ustawienia
              <br />
              użytkownika
            </NavLink>
          </li>
          <li>
            <NavLink to="/" activeClassName="active" exact>
              <FontAwesomeIcon
                icon={faNewspaper}
                className="icon"
              ></FontAwesomeIcon>{" "}
              Nowości
            </NavLink>
          </li>
          <li>
            <NavLink to="/servers" activeClassName="active">
              <FontAwesomeIcon
                icon={faPlayCircle}
                className="icon"
              ></FontAwesomeIcon>{" "}
              Wybór serwera
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
