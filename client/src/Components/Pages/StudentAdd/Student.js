import React, { useState } from 'react'
import './Student.css'

const Student = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [roll, setRoll] = useState("");
    const [deptname, setDeptname] = useState("");
    const [contact, setContact] = useState("");
    const [city, setCity] = useState("");

    const addstd  = async (e) =>  {
        e.preventDefault();
        const response = await fetch('http://localhost:5000/student/add-std', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, roll, deptname, contact, city })

        })

        if (response.ok) {
             alert("success"); 
           /*  toast.success('success', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            }); */

        }

        if (!response.ok) {
            alert("failed");
           /*  toast.warn('failed', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            }); */
        }
        
    }



    return (
        <div className='container'>
            <section class="get-in-touch">
                <h1 class="title">Student Form</h1>
                <form onSubmit={addstd} class="contact-form row">
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
                    <div class="form-field col-lg-6">
                        <input id="message" class="input-text js-input" type="text" required 
                        value={roll}
                        onChange={(e) => setRoll(e.target.value)}
                        />
                        <label class="label" for="message">Roll</label>
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
                    <div class="form-field col-lg-12">
                        <input class="submit-btn" type="submit" value="Submit" />
                    </div>
                </form>
            </section>
        </div>
    )
}

export default Student