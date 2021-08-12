import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";

const SideBar = () => {
  return (
    <div className="app__rightside__content__sidebar">
      <div className="app__rightside__content__sidebar__findus">
        <p>Znajdziesz nas na:</p>
        <a href="https://discord.gg/C5pkDan">
          <FontAwesomeIcon icon={faDiscord} /> Discord
        </a>
        <a href="https://mplauncher.pl/">
          <strong>MP</strong>Launcher.pl
        </a>
      </div>
    </div>
  );
};

export default SideBar;
