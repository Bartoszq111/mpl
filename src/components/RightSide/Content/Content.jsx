import { Switch, Route } from "react-router-dom";
import LatestNews from "./LatestNews/LatestNews";

const Content = () => {
  return (
    <div className="app__rightside__content">
      <Switch>
        <Route path="/profile">Użytkownik</Route>
        <Route path="/settings">Ustawienia</Route>
        <Route path="/" exact>
          <LatestNews />
        </Route>
        <Route path="/servers">Serwery</Route>
        <Route path="/">404</Route>
      </Switch>
    </div>
  );
};

export default Content;
