import './App.css';
import {Route,Routes}from 'react-router-dom'
import Navbar from './NavBar/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Register from './pages/Register';
import Footer from './pages/Footer';
import Addtocart from './pages/Addtocart';
import Jreg from './pages/jwtreg';
import DataList from './pages/page';
import New from './pages/new';
import Batman from './b';
import LifecycleExample from './a';
import A from './a';
import FuseContext from './FContext/FuseContext';
// import LogoutButton from './pages/logout';
import Secret from './secret';
// import { useState } from 'react';
// import Card from './pages/card';
// import Data from './pages/Data';
function App() {
  // const[active,setActive]=useState("FirstCard");
  return (
    <div className="App">
      {/* <nav>
        <button onClick={()=>setActive("FirstCard")}>one</button>
        <button onClick={()=>setActive("SecondCard")}>two</button>
        <button onClick={()=>setActive("ThirdCard")}>three</button>
      </nav>
      <div>
        {active==="FirstCard"&& <Card data={Data} cardIndex={0}/>}
        {active==="SecondCard"&& <Card data={Data} cardIndex={1}/>}
        {active==="ThirdCard"&& <Card data={Data} cardIndex={2}/>}
      </div> */}
   <Navbar/>
   <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='about' element={<About/>}/>
  <Route path='login' element={<Login/>}/>
  <Route path='register' element={<Register/>}/>
  <Route path='add' element={<Addtocart/>}/>
  <Route path='jwtreg' element={<Jreg/>}/>
  <Route path='data' element={<DataList/>}/>
  <Route path='new' element={<New/>}/>
  <Route path='b' element={<Batman/>}/>
  <Route path='a' element={<LifecycleExample/>}/>
  <Route path='c' element={<FuseContext/>}/>
  <Route path='secret' element={<Secret/>}/>
  
   </Routes>
   {/* <A name="kavin"age="21" /> */}
   {/* <LogoutButton/> */}
   <Footer/>

    </div>
  );
}

export default App;
///////////////////////////////////////////////
// import './App.css';
// import React, { useState } from 'react';
// import Card from './pages/card';
// import Data from './pages/Data';

// function App() {
//   const [active, setActive] = useState(0); // Use index for active state

//   return (
//     <div className="App">
//       <nav>
//         <button onClick={() => setActive(0)}>one</button>
//         <button onClick={() => setActive(1)}>two</button>
//         <button onClick={() => setActive(2)}>three</button>
//       </nav>
//       <div>
//         {/* Render the Card component based on the active index */}
//         <Card data={Data} cardIndex={active} />
//       </div>
//     </div>
//   );
// }

// export default App;
