import React from 'react'
import './Navbar.css'
import datalogo from '../../Image/datalogo.png'

const Navbar = () => {
  return (
    <>
    <nav style={{backgroundColor: "transparent"}} class="navbar navbar-expand-lg navbar-light px-0 py-3">
  <div class="container-xl">
   {/*  <!-- Logo --> */}
    <a class="navbar-brand" href="/">
      <img src={datalogo} class="h-8" alt="logo"/>
    </a>
    {/* <!-- Navbar toggle --> */}
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    {/* <!-- Collapse --> */}
    <div class="collapse navbar-collapse" id="navbarCollapse">
      {/* <!-- Nav --> */}
      <div class="navbar-nav mx-lg-auto">
        <a style={{backgroundColor: "transparent"}} class="nav-item nav-link active" href="#" aria-current="page">Home</a>
        <a style={{backgroundColor: "transparent"}} class="nav-item nav-link" href="#">Contact</a>
        <a style={{backgroundColor: "transparent"}} class="nav-item nav-link" href="#">FAQ</a>
      </div>
   {/*    <!-- Right navigation --> */}
{/*       <div class="navbar-nav ms-lg-4">
        <a class="nav-item nav-link" href="#">Sign in</a>
      </div> */}
      {/* <!-- Action --> */}
      <div class="d-flex align-items-lg-center mt-3 mt-lg-0">
        <a href="#" class="btn  btn-primary w-full w-lg-auto">
          Logout
        </a>
      </div>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar