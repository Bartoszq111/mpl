import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";

const LatestNews = () => {
  return (
    <>
      <div className="app__rightside__content__latestnews">
        <p>Latest news</p>
      </div>
      <div className="app__rightside__content__sidebar">
        <div className="app__rightside__content__sidebar__findus">
          <p>Znajdziesz nas na:</p>
          <p>
            <FontAwesomeIcon icon={faDiscord} /> Discord
          </p>
          <p>
            <strong>MP</strong>Launcher.pl
          </p>
        </div>
      </div>
    </>
  );
};

export default LatestNews;
