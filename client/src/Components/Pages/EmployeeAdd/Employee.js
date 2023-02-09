import React, { useState } from 'react'
import './Employee.css'
import { Navigate, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Employee = () => {
    const navigate= useNavigate();

    const [name, setName]= useState("");
    const [email, setEmail]= useState("");
    const [deptname, setDeptname]= useState("");
    const [contact, setContact]= useState("");
    const [city, setCity]= useState("");
    const [salary, setSalary]= useState("");


    const addEmp = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:5000/employee/add-emp', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, deptname, contact, city, salary })

        })

        if (response.ok) {
             /* alert("success"); */
             navigate('/home');
            toast.success('success', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });

        }

        if (!response.ok) {
            /* alert("failed"); */
            toast.warn('failed', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    }

    return (
        <div className='empbg'>
        <div className='container'>
            <section class="get-in-touch">
                <h1 class="title">Employee Form</h1>
                <form onSubmit={addEmp} class="contact-form row">
                    <div class="form-field col-lg-6">
                        <input id="name" class="input-text js-input" type="text" required 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        />
                        <label class="label" for="name">Name</label>
                    </div>
                    <div class="form-field col-lg-6 ">
                        <input id="email" class="input-text js-input" type="email" required 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                        <label class="label" for="email">E-mail</label>
                    </div>
                    <div class="form-field col-lg-6 ">
                        <input id="company" class="input-text js-input" type="text" required 
                        value={deptname}
                        onChange={(e) => setDeptname(e.target.value)}
                        />
                        <label class="label" for="company">Department Name</label>
                    </div>
                    <div class="form-field col-lg-6 ">
                        <input id="phone" class="input-text js-input" type="text" required
                        value={contact}
                        onChange={(e) => setContact(e.target.value)} 
                        />
                        <label class="label" for="phone">Contact Number</label>
                    </div>
                    <div class="form-field col-lg-6">
                        <input id="message" class="input-text js-input" type="text" required 
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        />
                        <label class="label" for="message">City</label>
                    </div>
                    <div class="form-field col-lg-6">
                        <input id="message" class="input-text js-input" type="text" required 
                        value={salary}
                        onChange={(e) => setSalary(e.target.value)}
                        />
                        <label class="label" for="message">Salary</label>
                    </div>
                    <div class="form-field col-lg-12">
                        <input class="submit-btn" type="submit" value="Submit" />
                    </div>
                </form>
            </section>
        </div>
        </div>
    )
}

export default Employee