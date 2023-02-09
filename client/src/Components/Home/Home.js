import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import './Home.css'
import img from '../../Image/img.png'
import { useNavigate } from 'react-router-dom'

import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';

const Home = () => {
  const [basicModal, setBasicModal] = useState(false);
  const [oneempdata, setOneempdata] = useState([]);

  const [studentShow, setstudentShow] = useState(false)


  const toggleShow = () => {
    setBasicModal(!basicModal);
  }

  /*  UseNavigate  */
  const navigate = useNavigate();

  const addemp = () => {
    navigate("/addemployee");
  }
  const addstd = () => {
    navigate("/addstudent");
  }
  /*  UseNavigate End  */

  /*  Get all Employee Data  */
  const [empdata, SetEmpdata] = useState([]);

  const getdata = async (e) => {

    const response = await fetch('http://localhost:5000/employee/all-emps', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }

    });

    const data = await response.json();
    Object.values(data).forEach(function
      (i) {
      SetEmpdata(i);
    })

  }

  useEffect(() => {
    getdata();
  }, [])

  /*  Edit Employee Data  */
  
  const editEmployee= (value) =>{

    localStorage.setItem('emp',JSON.stringify(value))
    navigate('/editemployee')
  }

  /*  View Employee Data  */
  const [getuserdata, setUserdata] = useState([]);
  /* console.log(getuserdata); */

  const getdatabyid = async (id) => {
    toggleShow();
    setstudentShow(false)
    const res = await fetch(`http://localhost:5000/employee/get-emp/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });

    const data = await res.json();
    Object.values(data).forEach(function
      (i) {
      setOneempdata(i)
    })

    /* console.log(data); */

    /*     if (res.status === 422 || !data) {
            console.log("error ");
    
        } else {
            setUserdata(data)
            console.log("get data");
        } */
  }

  useEffect(() => {
    getdata();
  }, [])

  /*  Delete Employee Data  */

  const deleteuser = async (id) => {
    /* console.log(id) */

    const res = await fetch(`http://localhost:5000/employee/delete-emp/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    });

    const deletedata = await res.json();
    /* console.log(deletedata); */

    if (res.status === 422 || !deletedata) {
      console.log("error");
    } else {
      alert("user deleted");
      window.location = '/home'
    }

  }

  return (
    <div className='homebg'>
      <div className='container'>
        <Navbar />
        <section id="hero" className="d-flex align-items-center mt-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
                <h1>One Destination</h1>
                <h3>For All Details Insertions</h3>

                <div classNameName='addbtn'>
                  <button onClick={addemp} className="shadow-6 m-button">
                    <i className="fa-sharp fa-solid fa-user-tie"></i>&nbsp;&nbsp;
                    Add Employee</button>
                  <button onClick={addstd} className="shadow-6 m-button">
                    <i className="fa-solid fa-user-plus"></i>&nbsp;&nbsp;
                    Add Student</button></div>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 hero-img">
                <img src={img} className="img-fluid" alt="img" />
              </div>
            </div>
          </div>
        </section>

        <div className="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
          <div className="h-screen flex-grow-1">
            <main className="py-6 bg-surface-secondary">
              <div className="container-fluid">

                {/*  // ! Employee Details Table // */}
                <div className="card mb-7 mt-3">
                  <div className="card-header">
                    <h3 className="mb-0" style={{ textTransform: "uppercase", color: "#000000", fontWeight: "Bold" }}>Employee Details</h3>
                  </div>
                  <div className="table-responsive">
                    <table className="table table-hover table-nowrap">

                      <thead className="table-light">
                        <tr>
                          <th scope="col">Name</th>
                          <th scope="col">E-mail</th>
                          <th scope="col">Department Name</th>
                          <th scope="col">Contact Number</th>
                          <th scope="col">City</th>
                          <th scope="col">Salary</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>

                        {empdata.map((value) => {
                          return (
                            <tr>
                              <td>
                                <a className="text-heading font-semibold" href="">
                                  {value.name}
                                </a>
                              </td>
                              <td>
                                {value.email}
                              </td>
                              <td>
                                <a className="text-heading font-semibold" href="">
                                  {value.deptname}
                                </a>
                              </td>
                              <td>
                                <a className="text-heading font-semibold" href="">
                                  {value.contact}
                                </a>
                              </td>
                              <td>
                                <a className="text-heading font-semibold" href="">
                                  {value.city}
                                </a>
                              </td>
                              <td>
                                <a className="text-heading font-semibold" href="">
                                  {value.salary}
                                </a>
                              </td>
                              <td className="text-end">

                                {/* View Data */}
                                <button className="btn btn-sm btn-neutral"
                                  onClick={() => getdatabyid(value._id)}
                                >View</button>

                                {/* Edit Data */}
                                <button onClick={()=> editEmployee(value)} type="button" className="btn btn-sm btn-square btn-neutral text-danger-hover m-1">
                                  <i className="fa-regular fa-pen-to-square"></i>
                                </button>
                                
                                {/* Delete Data */}
                                <button type="button" className="btn btn-sm btn-square btn-neutral text-danger-hover"
                                  onClick={() => deleteuser(value._id)}
                                >
                                  <i className="bi bi-trash"></i>
                                </button>
                              </td>
                            </tr>
                          )
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* // ! Students Details Table // */}
                <div className="card mb-7">
                  <div className="card-header">
                    <h3 className="mb-0" style={{ textTransform: "uppercase", color: "#000000", fontWeight: "Bold" }}>Student Details</h3>
                  </div>
                  <div className="table-responsive">
                    <table className="table table-hover table-nowrap">

                      <thead className="table-light">
                        <tr>
                          <th scope="col">Name</th>
                          <th scope="col">E-mail</th>
                          <th scope="col">Roll</th>
                          <th scope="col">Department Name</th>
                          <th scope="col">Contact Number</th>
                          <th scope="col">City</th>
                          <th></th>
                        </tr>
                      </thead>

                      <tbody>

                        <tr>
                          <td>
                            <a href="" className="text-heading font-semibold">
                              Rahul Sharma
                            </a>
                          </td>
                          <td>
                            abc@gmail.com
                          </td>
                          <td>
                            <a href="" className="text-heading font-semibold">
                              12345
                            </a>
                          </td>
                          <td>
                            <a href="" className="text-heading font-semibold">
                              Full Stack Dev
                            </a>
                          </td>
                          <td>
                            <a href="" className="text-heading font-semibold">
                              9876543210
                            </a>
                          </td>
                          <td>
                            <a href="" className="text-heading font-semibold">
                              Delhi
                            </a>
                          </td>
                          <td className="text-end">
                            <a href="" className="btn btn-sm btn-neutral">View</a>
                            <button type="button" className="btn btn-sm btn-square btn-neutral text-danger-hover m-1">
                              <i className="fa-regular fa-pen-to-square"></i>
                            </button>
                            <button type="button" className="btn btn-sm btn-square btn-neutral text-danger-hover">
                              <i className="bi bi-trash"></i>
                            </button>
                          </td>
                        </tr>

                        {/*                       <tr>
                        <td>

                          <a href="" className="text-heading font-semibold" >
                            Rahul Sharma
                          </a>
                        </td>
                        <td>
                          abc@gmail.com
                        </td>
                        <td>
                          <a href="" className="text-heading font-semibold" >
                            12345
                          </a>
                        </td>
                        <td>
                          <a href="" className="text-heading font-semibold" >
                            Full Stack Dev
                          </a>
                        </td>
                        <td>
                          <a href="" className="text-heading font-semibold" >
                            9876543210
                          </a>
                        </td>
                        <td>
                          <a href="" className="text-heading font-semibold" >
                            Patna
                          </a>
                        </td>
                        <td className="text-end">
                          <a href="" className="btn btn-sm btn-neutral">View</a>
                          <button type="button" className="btn btn-sm btn-square btn-neutral text-danger-hover m-1">
                            <i className="fa-regular fa-pen-to-square"></i>
                          </button>
                          <button type="button" className="btn btn-sm btn-square btn-neutral text-danger-hover">
                            <i className="bi bi-trash"></i>
                          </button>
                        </td>
                      </tr> */}

                      </tbody>
                    </table>
                  </div>
                </div>

              </div>
            </main>
          </div>
        </div>
      </div>

{/* MDB MODAL BOX */}
      <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Modal title</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>

              {studentShow ?
                <>

            {/*  write here */}


                </> :
                <>
                  <h4>Name : {oneempdata.name}</h4>
                  <h4>E-mail : {oneempdata.email}</h4>
                  <h4>Department Name : {oneempdata.deptname}</h4>
                  <h4>Contact Number : {oneempdata.contact}</h4>
                  <h4>City : {oneempdata.city}</h4>
                  <h4>Salary : {oneempdata.salary}</h4>
                </>}


            </MDBModalBody>

            <MDBModalFooter>
{/*               <button color='secondary' onClick={toggleShow}>
                Close
              </button>
              <button>Save changes</button> */}
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </div>
  )
}

export default Home