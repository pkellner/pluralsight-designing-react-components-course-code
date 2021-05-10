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

// function withAuth(Component) {
//   //const { loggedInUser, setLoggedInUser } = useContext(AuthContext);
//   return function () {
//     return (
//       <AuthContext.Consumer>
//         {({ loggedInUser, setLoggedInUser }) => {
//           return (
//             <Component
//               loggedInUser={loggedInUser}
//               setLoggedInUser={setLoggedInUser}
//             ></Component>
//           );
//         }}
//       </AuthContext.Consumer>
//     );
//   };
// }

export default withAuth;
