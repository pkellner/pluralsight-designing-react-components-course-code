import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

function withAuth(Component) {
  return function (props) {
    const { loggedInUser, setLoggedInUser } = useContext(AuthContext);
    return (
      <Component {...props}
        loggedInUser={loggedInUser}
        setLoggedInUser={setLoggedInUser}
      ></Component>
    );
  };
}

export default withAuth;
