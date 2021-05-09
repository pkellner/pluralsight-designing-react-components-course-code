import { ThemeContext } from "../contexts/ThemeContext";
import { useContext } from "react";
import withAuth from "./withAuth";

function Header({ loggedInUser, setLoggedInUser }) {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="padT4 padB4">
      <div className="container mobile-container">
        <div className="d-flex justify-content-between">
          <div>
            <img alt="SVCC Home Page" src="/images/SVCCLogo.png" />
          </div>
          <div className="light">
            <h4 className="header-title">Silicon Valley Code Camp</h4>
          </div>
          <div className={theme === "light" ? "" : "text-info"}>
            {loggedInUser && loggedInUser.length > 0 ? (
              <div>
                <span>Logged in as {loggedInUser} </span>
                <button
                  className="btn btn-secondary"
                  onClick={() => {
                    setLoggedInUser("");
                  }}
                >
                  Logout
                </button>
              </div>
            ) : (
              <button
                className="btn btn-secondary"
                onClick={(e) => {
                  e.preventDefault();
                  const username = window.prompt("Enter Login name:", "");
                  setLoggedInUser(username);
                }}
              >
                login
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default withAuth(Header);
