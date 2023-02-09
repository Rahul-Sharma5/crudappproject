import './App.css';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from './Components/Home/Home';
import Employee from './Components/Pages/EmployeeAdd/Employee';
import Student from './Components/Pages/StudentAdd/Student';
import LandingPage from './Components/Pages/LandingPage/LandingPage';
import EmployeeEdit from './Components/Pages/EmployeeEdit/EmployeeEdit';
import StudentEdit from './Components/Pages/StudentEdit/StudentEdit';
import Error from './Components/Pages/404Page/Error';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
          
          <Route path='/addemployee' element={<Employee/>}></Route>
          <Route path='/editemployee' element={<EmployeeEdit/>}></Route>

          <Route path='/addstudent' element={<Student/>}></Route>
          <Route path='/editstudent' element={<StudentEdit/>}></Route>

          <Route path='*' element={<Error/>}></Route> 
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
