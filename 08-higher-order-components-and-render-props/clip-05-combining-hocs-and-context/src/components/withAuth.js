import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

function withAuth(Component) {
  return function () {
    const { loggedInUser, setLoggedInUser } = useContext(AuthContext);
    return (
      <Component
        loggedInUser={loggedInUser}
        setLoggedInUser={setLoggedInUser}
      ></Component>
    );
  };
}

export default withAuth;
