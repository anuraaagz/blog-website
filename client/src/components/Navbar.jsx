import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext.jsx";

export default function Navbar() {
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="container">
        <div
          className="logo"
          style={{ display: "flex", gap: "2px", alignItems: "baseline" }}
        >
          <Link to="/">
            <span style={{ color: "#5f0f40", fontSize: "30px" }}>Vibe</span>
            <div>
              <span style={{ color: "#297373", fontSize: "30px" }}>S</span>
              <span style={{ color: "#297373", fontSize: "25px" }}>cribe</span>
            </div>
          </Link>
        </div>
        <div className="links">
          <Link className="link" to={"/?cat=art"}>
            <h6>ART</h6>
          </Link>
          <Link className="link" to={"/?cat=science"}>
            <h6>SCIENCE</h6>
          </Link>
          <Link className="link" to={"/?cat=technology"}>
            <h6>TECHNOLOGY</h6>
          </Link>
          <Link className="link" to={"/?cat=cinema"}>
            <h6>CINEMA</h6>
          </Link>
          <Link className="link" to={"/?cat=design"}>
            <h6>DESIGN</h6>
          </Link>
          <Link className="link" to={"/?cat=food"}>
            <h6>FOOD</h6>
          </Link>
          <span>{currentUser?.username}</span>
          {currentUser ? (
            <span onClick={logout}>Logout</span>
          ) : (
            <Link to="/login">Login</Link>
          )}
          <span className="write">
            <Link className="link" to={"/write"}>
              Write
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}
