import React from "react";
import { NavLink } from "react-router-dom";
import { styled } from "styled-components";
import { Use } from "./Context/ContentProvider";

const Navbar = () => {
  const { state } = Use();
  return (
    <>
      <Div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary  p-3 head">
          <div className="container-fluid first">
            <NavLink className="navbar-brand logo" to="/">
              Project
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse sec" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <NavLink className="nav-link" aria-current="page" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about">
                    About
                  </NavLink>
                </li>

                { state==undefined ?
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/login">
                      Login
                    </NavLink>
                  </li> :""
                }
                <li className="nav-item">
                  <NavLink className="nav-link" to="/register">
                    Registration
                  </NavLink>
                </li>
                { state!=undefined ?  <li className="nav-item">
                  <NavLink className="nav-link" to="/logout">
                    logout
                  </NavLink>
                </li>:""
                }
              </ul>
            </div>
          </div>
        </nav>
      </Div>
    </>
  );
};

const Div = styled.nav`
  .head {
    height: 10vh;

    .first {
      padding: 0 4.5rem;
      .logo {
        font-size: 2.5rem;
        letter-spacing: 2px;
        font-family: "Pacifico", cursive;
      }
    }

    .sec {
      ul {
        font-size: 1.6rem;
        column-gap: 1rem;
        li {
          .nav-link {
            color: #000000;
            &:hover {
              color: #0073ff;
            }
          }
        }
      }
    }
  }
`;

export default Navbar;
