import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserCircle,
  faCog,
  faNewspaper,
  faPlayCircle,
} from "@fortawesome/free-solid-svg-icons";

const LeftNavbar = () => {
  return (
    <div className="app__leftside">
      <div className="app__leftside__avatar">
        <img
          src="https://camo.githubusercontent.com/5031bcfee988f32344f1841eaa5e64b49c553903/68747470733a2f2f63726166617461722e636f6d2f617661746172732f30363961373966343434653934373236613562656663613930653338616166353f73697a653d313238"
          alt="Avatar"
        />
      </div>
      <div className="app__leftside__username">
        <p>Łowca siusiaczków</p>
      </div>
      <div className="app__leftside__menu">
        <ul>
          <li>
            <FontAwesomeIcon
              icon={faUserCircle}
              className="icon"
            ></FontAwesomeIcon>{" "}
            Profil
            <br />
            użytkownika
          </li>
          <li>
            <FontAwesomeIcon icon={faCog} className="icon"></FontAwesomeIcon>{" "}
            Ustawienia
            <br />
            użytkownika
          </li>
          <li>
            <FontAwesomeIcon
              icon={faNewspaper}
              className="icon"
            ></FontAwesomeIcon>{" "}
            Nowości
          </li>
          <li>
            <FontAwesomeIcon
              icon={faPlayCircle}
              className="icon"
            ></FontAwesomeIcon>{" "}
            Wybór serwera
          </li>
        </ul>
      </div>
      <div className="app__leftside__logout">
        <p>Wyloguj się</p>
      </div>
    </div>
  );
};

export default LeftNavbar;
