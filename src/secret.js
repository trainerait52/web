import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './App.css';

const Secret = () => {
  const navigate = useNavigate();
  const [logout, setLogout] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("auth")) {
      navigate("/login");
    }
  }, [logout]);

  const logoutHandler = (e) => {
    e.preventDefault();
    localStorage.removeItem("auth");
    setLogout(true);
  };

  return (
    <div style={{ height: "300px" }}>
      <button onClick={logoutHandler} className="btn btn-primary text-left">
        Logout
      </button>
      <hr />
      <div className="App">Dashboard</div>
    </div>
  );
};

export default Secret;

// import React,{useEffect} from "react";
// import { useNavigate } from "react-router-dom";
// import './App.css'

// const Secret = () => {
//   const navigate = useNavigate();
//   const [logout, setLogout] = React.useState(false);

//   React.useEffect(() => {
//     if (!localStorage.getItem("auth")) navigate("/login");
//   }, [logout]);

//   const logoutHandler = (e) => {
//     e.preventDefault();
//     localStorage.removeItem("auth");
//     setLogout(true);
//   };

//   return (
//     < div style={{height:"300px"}}>
//       <button onClick={logoutHandler} className="btn btn-primary text-left">
//         Logout
//       </button>
// 	  <hr/>
//       <div className="App">Dashboard</div>
	 
//     </div>
//   );
// };

// export default Secret;
