import './Navbar.css';
import {Link, useNavigate} from 'react-router-dom';
import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

function Navbar(){
  // let user=JSON.parse(localStorage.getItem('user-info'))
  const navigate=useNavigate
  const Logout=(()=>{
    localStorage.clear();
    navigate('/register')
  })
   return(

      <nav className='navbar  sticky-top navbar-expand-lg  navbar-light '>
        <img style={{width:"150px",height:"50px"}} src='https://img.squadhelp.com/story_images/visual_images/1637709851-Shoppy.jpg?class=show' alt='img'/>
     
   <button style={{width:"60px"}} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon" ></span>
    </button>
    <div  class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0" style={{marginRight:"70px"}}>
      <li  className='Nav-item'>
          <Link to="/" style={{color:"black",textDecoration:"none"}}> Home </Link>
         </li>
         <li  className='Nav-item'>
          <Link to="about" style={{color:"black",textDecoration:"none"}}>About</Link>
         </li>
         <li  className='Nav-item'>
          <Link to="login" style={{color:"black",textDecoration:"none"}}>Login</Link>
         </li>
         <li  className='Nav-item'>
          <Link to="register" style={{color:"black",textDecoration:"none"}}>Register</Link>
         </li>
         <li  className='Nav-item'>
          <Link to="add" style={{color:"black",textDecoration:"none"}}>add</Link>
         </li>
         <li  className='Nav-item'>
          <Link to="jwtreg" style={{color:"black",textDecoration:"none"}}>jreg</Link>
         </li>
         <li  className='Nav-item'>
          <Link to="data" style={{color:"black",textDecoration:"none"}}>page</Link>
         </li>
         <li  className='Nav-item'>
          <Link to="new" style={{color:"black",textDecoration:"none"}}>new</Link>
         </li>
         <li  className='Nav-item'>
          <Link to="b" style={{color:"black",textDecoration:"none"}}>b</Link>
         </li>
         <li  className='Nav-item'>
          <Link to="a" style={{color:"black",textDecoration:"none"}}>a</Link>
         </li>
         <li  className='Nav-item'>
          <Link to="c" style={{color:"black",textDecoration:"none"}}>c</Link>
         </li>
   
    </ul>
    
  </div>
  <Dropdown>
      <Dropdown.Toggle variant="dark" id="dropdown-basic" >
       user 
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1" onClick={Logout}>Logout</Dropdown.Item>
        {/* <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
      </Dropdown.Menu>
    </Dropdown>
  </nav>

    );
}
export default Navbar;

// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import Dropdown from 'react-bootstrap/Dropdown';
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/bootstrap.js';
// import './Navbar.css';

// function Navbar() {
//   const navigate = useNavigate();

//   const logout = () => {
//     localStorage.clear();
//     navigate('/register');
//   };

//   return (
//     <nav className="navbar sticky-top navbar-expand-lg navbar-light">
//       <img
//         style={{ width: '150px', height: '50px' }}
//         src="https://img.squadhelp.com/story_images/visual_images/1637709851-Shoppy.jpg?class=show"
//         alt="img"
//       />

//       <button
//         style={{ width: '60px' }}
//         className="navbar-toggler"
//         type="button"
//         data-bs-toggle="collapse"
//         data-bs-target="#navbarSupportedContent"
//         aria-controls="navbarSupportedContent"
//         aria-expanded="false"
//         aria-label="Toggle navigation"
//       >
//         <span className="navbar-toggler-icon"></span>
//       </button>

//       <div className="collapse navbar-collapse" id="navbarSupportedContent">
//         <ul className="navbar-nav ms-auto mb-2 mb-lg-0" style={{ marginRight: '70px' }}>
//           {[
//             { to: '/', label: 'Home' },
//             { to: 'about', label: 'About' },
//             { to: 'login', label: 'Login' },
//             { to: 'register', label: 'Register' },
//             { to: 'add', label: 'add' },
//             { to: 'jwtreg', label: 'jreg' },
//             { to: 'data', label: 'page' },
//             { to: 'new', label: 'new' },
//             { to: 'b', label: 'b' },
//             { to: 'a', label: 'a' },
//             { to: 'c', label: 'c' },
//           ].map((item, index) => (
//             <li key={index} className="Nav-item">
//               <Link to={item.to} style={{ color: 'black', textDecoration: 'none' }}>
//                 {item.label}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </div>

//       <Dropdown>
//         <Dropdown.Toggle variant="dark" id="dropdown-basic">
//           user
//         </Dropdown.Toggle>

//         <Dropdown.Menu>
//           <Dropdown.Item href="#/action-1" onClick={logout}>
//             Logout
//           </Dropdown.Item>
//         </Dropdown.Menu>
//       </Dropdown>
//     </nav>
//   );
// }

// export default Navbar;


// import: This keyword is used in ES6 modules to import functionality from other modules. In this case, it's used to import the Bootstrap CSS file.

// "bootstrap/dist/css/bootstrap.min.css": This is the path to the Bootstrap CSS file. The bootstrap is the name of the package or module, dist stands for distribution, css is the folder containing the CSS files, and bootstrap.min.css is the actual minified CSS file for Bootstrap.

// So, this line of code is essentially importing the Bootstrap CSS file into your JavaScript file or module. 