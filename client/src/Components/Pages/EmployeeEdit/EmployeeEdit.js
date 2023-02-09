import React, { useState, useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import './EmployeeEdit.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EmployeeEdit = () => {

    const navigate= useNavigate();

    const [emp,setEmp]=useState([]);

    const [_id,set_id]=useState(''); 
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [deptname,setDeptname]=useState('');
    const [contact,setContact]=useState('');
    const [city,setCity]=useState('');
    const [salary,setSalary]=useState('');

    const [count,setCount]=useState(0)

    useEffect(()=>{

        const data = localStorage.getItem('emp')
        if(data!=null && count==0)
        {

         setEmp(JSON.parse(data))
         set_id(JSON.parse(data)._id)
         setName(JSON.parse(data).name)
         setEmail(JSON.parse(data).email)
         setDeptname(JSON.parse(data).deptname)
         setContact(JSON.parse(data).contact)
         setCity(JSON.parse(data).city)
         setSalary(JSON.parse(data).salary)
         setCount(1);

        }
        if(data==null)
        {
            alert('No Employee is selected')
            navigate('/home')
        }

    },[])

/*     const updateuser = async(id)=>{
        // e.preventDefault();
        console.log(id);

        const {name,email,deptname,contact,city,salary} = emp;

        const res = await fetch(`http://localhost:5000/employee/update-emp/${id}`,{
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                name,email,deptname,contact,city,salary
            })
        });

        const data2 = await res.json();
        console.log(data2);

        if(res.status === 422 || !data2){
            alert("fill the data");
        }else{
            navigate("/home")
            setEmp(data2);
        }

    } */

    const updateEmp = async (e) => {
        e.preventDefault();
        console.log(_id)
        const response = await fetch(`http://localhost:5000/employee/update-emp/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({name, email, deptname, contact, city, salary})

        })

        if (response.ok) {
            /*  alert("Updated Success"); */
             toast.success('Updated Successful', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                
            });
            navigate('/home');

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
    <>

        <div className='container'>
            <section class="get-in-touch">
                <h1 class="title">Employee Form</h1>
                <form  onSubmit={updateEmp} class="contact-form row">
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
    </>
)
}

export default EmployeeEdit