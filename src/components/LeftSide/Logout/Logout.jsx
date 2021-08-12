import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";

const Logout = () => {
  return (
    <div className="app__leftside__logout">
      <FontAwesomeIcon icon={faPowerOff} className="icon"></FontAwesomeIcon>{" "}
      <p>Wyloguj się</p>
    </div>
  );
};

export default Logout;
