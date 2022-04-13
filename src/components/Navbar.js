import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export default function Navbar(props) {
  const {title,about,mode,togglemode,redtogglemode,greentogglemode}=props
  
  return (
    <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
            <div className="container-fluid">
              <a className="navbar-brand" href="#">{title}</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    {/* <Link className="nav-link active" aria-current="page" to="/Home">Home</Link> */}
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                  </li>
                  {/* <li className="nav-item">
                    <Link className="nav-link" to="/about">{about}</Link>
                  </li> */}
                  
                </ul>
                {/* <form className="d-flex">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                  <button className="btn btn-outline-primary" type="submit">Search</button>
                </form> */}
                <div className={`form-check form-switch text-${mode ==='light'?'dark':'light'}`}>
                  <input className="form-check-input" type="checkbox" onClick={greentogglemode} role="switch" id="flexSwitchCheckDefault" />
                  <label className="form-check-label" htmlfor="flexSwitchCheckDefault">Enable Greenmode </label>
                </div>
                <div className={`form-check form-switch text-${mode ==='light'?'dark':'light'}`}>
                  <input className="form-check-input" type="checkbox" onClick={redtogglemode} role="switch" id="flexSwitchCheckDefault" />
                  <label className="form-check-label" htmlfor="flexSwitchCheckDefault">Enable Redmode </label>
                </div>
                <div className={`form-check form-switch text-${mode ==='light'?'dark':'light'}`}>
                  <input className="form-check-input" type="checkbox" onClick={togglemode} role="switch" id="flexSwitchCheckDefault" />
                  <label className="form-check-label" htmlfor="flexSwitchCheckDefault">Enable darkmode</label>
                </div>
              </div>
            </div>
      </nav>
  )
}
