import React from 'react'
 import './LandingPage.css'
import { useNavigate } from 'react-router-dom'

const LandingPage = () => {
    /*  UseNavigate  */
    const navigate = useNavigate();

    const homepage = () => {
      navigate("/home");
    }

  return (
    <>
<div className='container'>
      <div>
      <h1 style={{textAlign: "center", marginTop: "25%"}}>Welcome To CRUD Application</h1>
        <div>
          <button onClick={homepage} href="#" class="btn btn-primary w-full mainbtn">
            Get Start
          </button>
        </div>
      </div>
      </div>
    </>
  )
}

export default LandingPage