// always the component which we are going to  create in our file structure /components folder, its name must start with the Capital letter .

import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/" >
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                {props.about}
              </a>
            </li>
          </ul>
          <div className={`form-check form-switch text-${props.mode === 'dark' ? 'light' :'dark' }`}>
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >{props.viceVersa}</label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  about: PropTypes.string.isRequired,
};
// while assigning the proptypes in this way  we make assure that we are  not passing  any wrong datatypes in our respecive props .
// if we give wrong datatype then it will  give error in console of chrome .
// if wrong datatype entered then this error comes : Parsing error: JSX value should be either an expression or a quoted JSX text. (7:39)

// and if we write somehwere ".isRequired" then it will give error in conosle of chrome and say that this feild is not filled and will suggest u to give the value for ur prop.
// it gives this error : "The prop `about` is marked as required in `Navbar`, but its value is `undefined`."

Navbar.defaultProps = {
  title: "Enter your title here",
  about: "Enter about here",
};
// if we do not pass value to the title and about props here  , then by default  this values will be captured and rendered in the DOM .

//here we are going to  learn about the props , passing the props . When we create a component it is forsure that we are  going to use it multiple times . so suppose there is a title which is going to be change in every differnent page where  the  component is creted , then we are gonna  do ti using props .
