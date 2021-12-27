// import React from "react";
// import "./../scss/custom.scss";
// import Button from "@material-ui/core/Button";

// const Navbar = () => {
//   return (
//     <div id="header">
//       <div class="row ">
//         <div class="col d-flex justify-content-center p-4">
//           <img
//             src="https://preview.uideck.com/items/appvilla/assets/images/logo/white-logo.svg"
//             className="logo"
//             alt="logo"
//           ></img>
//         </div>
//         <div className="col-6 ">
//           <div className="row d-flex justify-content-center p-4">
//             <div class="col menu">Home</div>
//             <div class="col menu">Features</div>
//             <div class="col menu">Overview</div>
//             <div class="col menu">Pricing</div>
//             <div class="col menu">Team</div>
//             {/* <div class="col menu">Blog</div> */}
//             <div class="col menu">Contact</div>
//           </div>
//         </div>
//         <div className="col d-flex justify-content-center button">
//           <Button className="get-it-now">Get It Now</Button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import React from "react";
import "./../scss/custom.scss";

const Navbar = () => {
  return (
    <div>
      <nav id="header" className="navbar navbar-expand-lg">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Navbar
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Link
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link disabled"
                  href="#"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Disabled
                </a>
              </li>
            </ul>
            <form class="d-flex">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
