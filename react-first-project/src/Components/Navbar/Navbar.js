import React from 'react'
import propTypes from 'prop-types'
import "./Navbar.css"
export default function Navbar(props) {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary my-nav">
    <div className="container-fluid my-container">
      <a className="navbar-brand" href="#">TextUtils</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">{props.Title}</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">{props.aboutText}</a>
          </li>
        </ul>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  
  </nav>
    </>
  )
}
Navbar.propTypes = {Title: propTypes.string,
                    aboutText: propTypes.string}
Navbar.defaultProps = {
    Title: "kon h tu bsdk?",
    aboutText: "apne baare mein bta chl"
}                    