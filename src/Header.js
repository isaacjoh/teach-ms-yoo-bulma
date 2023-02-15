import React from "react";
import { NavLink } from "react-router-dom";

class Header extends React.Component {
  state = {
    isActive: false,
  };

  toggleNav = () => {
    this.setState((prevState) => ({
      isActive: !prevState.isActive,
    }));
  };

  render() {
    return (
      <div className="header-section">
        <div className="header-title">
          <NavLink to="/" activeClassName="is-active">
            <h1>Hayoung Yoo Oh</h1>
          </NavLink>
          <p className="header-highlight page is-hidden-mobile">
            Innovative and passionate student-centered educator who empowers
            students through 21st century skills, blended learning, cognitively
            guided instruction, differentiated instruction, FactsWise, and
            skillful backwards designed lessons by incorporating student choice,
            voice, and interest
          </p>
          <p className="header-highlight-mobile is-hidden-tablet">
            Innovative and passionate student-centered educator
          </p>
        </div>
        <nav className="navbar" aria-label="main navigation">
          <div className="navbar-brand">
            <button className="button navbar-burger" onClick={this.toggleNav}>
              <span />
              <span />
              <span />
            </button>
          </div>
          <div
            className={
              this.state.isActive ? "navbar-menu is-active" : "navbar-menu"
            }
          >
            <div className="navbar-container">
              <NavLink
                to="/resume"
                className={({ isActive }) =>
                  isActive ? "navbar-item active" : "navbar-item"
                }
              >
                <span className="icon" style={{ marginRight: 5 }}>
                  <i className="fas fa-file-alt" />
                </span>
                Resume
              </NavLink>
              <NavLink
                className="navbar-item"
                to="/instructions"
                activeClassName="is-active"
              >
                <span className="icon" style={{ marginRight: 5 }}>
                  <i className="fas fa-desktop" />
                </span>
                Instructions
              </NavLink>
              <NavLink
                className="navbar-item"
                to="/blended-learning"
                activeClassName="is-active"
              >
                <span className="icon" style={{ marginRight: 5 }}>
                  <i className="fas fa-tablet-alt" />
                </span>
                Blended Learning
              </NavLink>
              <NavLink
                className="navbar-item"
                to="/workshop"
                activeClassName="is-active"
              >
                <span className="icon" style={{ marginRight: 5 }}>
                  <img
                    className="pencil-icon"
                    src="images/workshop.png"
                    alt="workshop"
                  />
                </span>
                Reader's and Writer's Workshop
              </NavLink>
              <NavLink
                className="navbar-item"
                to="/cgi-math"
                activeClassName="is-active"
              >
                <span className="icon" style={{ marginRight: 5 }}>
                  <img src="images/cgi-math.png" alt="math" />
                </span>
                <span>CGI Math</span>
              </NavLink>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
