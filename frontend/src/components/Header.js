import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../redux/reducers/userSlice";

function Header() {
  const user = useSelector((state) => state.user.currentUser)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const logoutUser = () => {
    dispatch(logout())
    navigate('/')
  }
  
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <Link to="/" className="navbar-brand mt-2 mt-lg-0">
              MERN
            </Link>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/addWorkout" className="nav-link">
                  Add Workout
                </Link>
              </li>
            </ul>
          </div>

          { user 
            ?
            <div className="dropdown text-end">
              <a
                href="#"
                role="button"
                className="d-block link-dark text-decoration-none dropdown-toggle show"
                id="dropdownUser1"
                data-bs-toggle="dropdown"
                aria-expanded="true"
              >
                <img
                  src="https://staticg.sportskeeda.com/editor/2022/06/f452a-16564241478609-1920.jpg"
                  alt="mdo"
                  width="32"
                  height="32"
                  className="rounded-circle"
                />
              </a>
              <ul
                className="dropdown-menu text-small"
                aria-labelledby="dropdownUser1"
                style={{
                  position: "absolute",
                  inset: "0px auto auto 0px",
                  margin: "0px",
                  transform: "translate(-60px, 36px)",
                }}
                data-popper-placement="bottom-end"
              >
              <li>
                <span className="dropdown-item"  onClick={logoutUser}>
                  Sign out
                </span>
              </li>
            </ul>
          </div> :
          <div>
            <Link to="/login" className="nav-link">
              Login
            </Link>
          </div>
        }
        </div>
      </nav>
    </header>
  );
}

export default Header;

{
  /* <header className="p-3 mb-3 border-bottom">
    <div className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">
          MERN
        </a>

        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><a href="#" className="nav-link px-2 link-dark">Inventory</a></li>
        </ul>

        <div className="dropdown text-end">
          <a href="#" className="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle" />
          </a>
          <ul className="dropdown-menu text-small" aria-labelledby="dropdownUser1">
            <li><a className="dropdown-item" href="#">Profile</a></li>
            <li><a className="dropdown-item" href="#">Sign out</a></li>
          </ul>
        </div>
      </div>
    </div>
  </header> */
}
