import React, { useState } from 'react'
import {useNavigate} from "react-router"
import axios from 'axios'
import './Register.css'


function Register() {

    const navigate= useNavigate();
 
    const lclick=(()=>{
      navigate('/Login')
    })
    

    const url = 'http://training.ateesdemo.com/user-registration';
    const [data,setData]=useState({
        name:'',
        email:'',
        password:'',
        phone:'',

    });
     
    const handle =(a) =>{
        const newData={...data};
        newData[a.target.id] =a.target.value;
        setData(newData);
    };

    const handlesubmit =(e) =>{
        console.log(JSON.stringify(data))
        e.preventDefault();
        if(!data.name|| !data.email || !data.password || !data.phone)
        {
            alert("please fill in all the fields");
            return;
        }

        navigate ('/Login');
        
        var form = new FormData();
        form.append('name',data.name);
        form.append('email',data.email);
        form.append('password',data.password);
        form.append('phone',data.phone);

        axios
        .post(url,form,{
            headers:{'Content-Type':"multipart/form-data"},
        })
        .then((response) => {
            console.log(response.data);
            setData({...data,id: e.target.value})
    });

    };
  return (
    <div>
                <div className="container-fluid">
        <div className="row main-content bg-success text-center">
            <div className="col-md-4 text-center company__info">
                <span className="company__logo"><h2><span className="fa fa-android"></span></h2></span>
                
                <img  src='https://media.istockphoto.com/id/1144604540/photo/house-keys-with-house-shaped-keychain.jpg?s=612x612&w=0&k=20&c=IMBMiPKeCieUf1d61harCHMI_oJdoL9pyJzjm5uZVro=' />

            </div>
            <div className="col-md-8 col-xs-12 col-sm-12 login_form ">
                <div className="container-fluid">
                    <div className="row">
                        <h2 style={{marginTop:"10px"}}>Register..!</h2>
                    </div>
                    <div className="row">
                        <form onSubmit={(e)=>handlesubmit(e)} control="" className="form-group">
                            <div className="row">
                                <input onChange={(e,name)=>handle(e,name)} type="text" name="name" id="name" value={data.name} className="form__input" placeholder="Your name"/>
                            </div>
                            <div className="row">
                                <input onChange={(e,email)=>handle(e,email)} type="text" name="email" id="email" value={data.email} className="form__input" placeholder="your email"/>
                            </div>
                            <div className="row">
                                <input onChange={(e,password)=>handle(e,password)} type="password" name="password" id="password" value={data.password} className="form__input" placeholder="your enter password"/>
                            </div>
                            <div className="row">
                                <input onChange={(e,phone)=>handle(e,phone)} type="phone" name="phone" id="phone" value={data.phone} className="form__input" placeholder="your phone number"/>
                            </div>
                            {/* <div className="row">
                                <input onChange={(e,password)=>(e,password)} type="password" name="password" id="password" value={data.password} className="form__input" placeholder="Password"/>
                            </div>
                            <div className="row">
                                <input onChange={(e,phone)=>(e,phone)} type="number" name="phone" id="phone" value={data.password} className="form__input" placeholder="Phone no"/>
                            </div> */}
                            
                            <div className="row" style={{marginLeft:"-220px"}}>
                                <input type="submit" onClick={handlesubmit} value="Submit" class="btn"/>
                            </div>
                        </form>
                    </div>
                    <div className="row">
                        <p onClick={lclick}>Already have an account? <a href="#">Login Here</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    

        </div>
  )
}

export default Register

// import React from 'react'
// import './Register.css'
// function Register() {
//   return (
//    <div >
//      <div class="form_wrapper">
//   <div class="form_container">
//     <div class="title_container">
//       <h2> Registration Form</h2>
//     </div>
//     <div class="row clearfix">
//       <div class="">
//         <form>
//           <div class="input_field"> <span><i aria-hidden="true" class="fa fa-envelope"></i></span>
//             <input type="email" name="email" placeholder="Email" required />
//           </div>
//           <div class="input_field"> <span><i aria-hidden="true" class="fa fa-lock"></i></span>
//             <input type="password" name="password" placeholder="Password" required />
//           </div>
//           <div class="input_field"> <span><i aria-hidden="true" class="fa fa-lock"></i></span>
//             <input type="password" name="password" placeholder="Re-type Password" required />
//           </div>
//           <div class="row clearfix">
//             <div class="col_half">
//               <div class="input_field"> <span><i aria-hidden="true" class="fa fa-user"></i></span>
//                 <input type="text" name="name" placeholder="First Name" />
//               </div>
//             </div>
//             <div class="col_half">
//               <div class="input_field"> <span><i aria-hidden="true" class="fa fa-user"></i></span>
//                 <input type="text" name="name" placeholder="Last Name" required />
//               </div>
//             </div>
//           </div>
//             	<div class="input_field radio_option">
//               <input type="radio" name="radiogroup1" id="rd1"/>
//               <label for="rd1">Male</label>
//               <input type="radio" name="radiogroup1" id="rd2"/>
//               <label for="rd2">Female</label>
//               </div>
//               <div class="input_field select_option">
//                 <select>
//                   <option>Select a country</option>
//                   <option>Option 1</option>
//                   <option>Option 2</option>
//                 </select>
//                 <div class="select_arrow"></div>
//               </div>
//             <div class="input_field checkbox_option">
//             	<input type="checkbox" id="cb1"/>
//     			<label for="cb1">I agree with terms and conditions</label>
//             </div>
//             <div class="input_field checkbox_option">
//             	<input type="checkbox" id="cb2"/>
//     			<label for="cb2">I want to receive the newsletter</label>
//             </div>
//           <input class="button" type="submit" value="Register" />
//         </form>
//       </div>
//     </div>
//   </div>
// </div>
// {/* <p class="credit">Developed by <a href="http://www.designtheway.com" target="_blank">Design the way</a></p> 
//   	 */}
     
//     </div>




//   )
// }

// export default Register


