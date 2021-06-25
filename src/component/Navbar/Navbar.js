import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

// import { ReactComponent as Logo } from '../../image/logo.png';
import Logo from "../../image/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVideo,
  faToggleOff,
  faUserCircle,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="options">
        <Link className="option">
          <img style={{ height: "20px" }} src={Logo} className="logo" alt="" />
        </Link>
        <Link className="option">
          <FontAwesomeIcon icon={faVideo} />
        </Link>
        <div className="user">
          <Link className="option">
            <FontAwesomeIcon icon={faToggleOff} />
          </Link>
          <Link className="option">
            <FontAwesomeIcon icon={faUserCircle} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;


// <nav class="navbar navbar-expand-lg navbar-light bg-light">
    //   <Link className="option">
    //     <img style={{ height: "15px" }} src={Logo} className="logo" alt="" />
    //   </Link>
    //   <button
    //     class="navbar-toggler"
    //     type="button"
    //     data-toggle="collapse"
    //     data-target="#navbarNav"
    //     aria-controls="navbarNav"
    //     aria-expanded="false"
    //     aria-label="Toggle navigation"
    //   >
    //     <span class="navbar-toggler-icon"></span>
    //   </button>
    //   <div class="collapse navbar-collapse" id="navbarNav">
    //     <ul class="navbar-nav">
    //       <li class="nav-item">
    //         <Link className="option">
    //           <FontAwesomeIcon icon={faVideo} />
    //         </Link>
    //       </li>
    //       <li class="nav-item">
    //         <Link className="option">
    //           <FontAwesomeIcon icon={faToggleOff} />
    //         </Link>
    //       </li>
    //       <li class="nav-item">
    //         <Link className="option">
    //           <FontAwesomeIcon icon={faUserCircle} />
    //         </Link>
    //       </li>
    //     </ul>
    //   </div>
    // </nav>