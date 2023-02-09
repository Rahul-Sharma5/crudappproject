import React from 'react'
import './Error.css'
import { NavLink } from 'react-router-dom'

const Error = () => {
  return (
    <>
    <div id="notfound">
        <div className="notfound">
            <div className="notfound-404">
                <h1>404</h1>
            </div>
            <h2>we are sorry, page not found!</h2>
                <p className="mb-5">
                The page you are looking for might havbeen removed
                had its name changed or is temporarilunavailable.
                </p>
                <NavLink to="/home"> Back To Homepage </NavLink>
        </div>
    </div>
    </>
  )
}

export default Error