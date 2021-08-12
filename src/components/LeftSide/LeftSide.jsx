import Menu from "./Menu/Menu";
import Logout from "./Logout/Logout";
import UserInfo from "./UserInfo/UserInfo";

const LeftNavbar = () => {
  return (
    <div className="app__leftside">
      <UserInfo />
      <Menu />
      <Logout />
    </div>
  );
};

export default LeftNavbar;
