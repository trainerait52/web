import React from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { emailValidator, passwordValidator } from './regexValidator';

function Login() {
	
    const navigate= useNavigate();
	const [errorMessage, seterrorMessage] = React.useState('');
	const [successMessage, setsuccessMessage] = React.useState('');
	React.useEffect(()=>{
		if(localStorage.getItem('auth')) navigate('/new')
	},[])

	const formSubmitter = e => {
		e.preventDefault();
		setsuccessMessage('');
		if (!emailValidator(data.email)) return seterrorMessage('Please enter valid email id');

		if (!passwordValidator(data.password))
			return seterrorMessage(
				'Password should have minimum 8 character with the combination of uppercase, lowercase, numbers and specialcharaters'
			);
		// setsuccessMessage('Successfully Validated');
		if(data.email !== 'admin@a.com' || data.password !== 'Password@1') return seterrorMessage('Invalid email or password');

		navigate('/new')
		localStorage.setItem('auth', true)

	};
//  ///////////////////////////////
    const rclick=(()=>{
      navigate('/')
    })
	const url = 'http://training.ateesdemo.com/user-login';
    const [data,setData]=useState({
        email:"",
        password:"",

    });
	

	const handle =(e)=>{
		const newData={...data};
		newData[e.target.id]=e.target.value;
		setData(newData);
	};

	
  

	const handlesubmit =(e) =>{
		console.log(JSON.stringify(data))
		e.preventDefault();

		if(!data.email || !data.password)
        {
            alert("please fill in all the fields");
            return;
        }

		
        navigate ('/new');
        var form = new FormData();
    
        form.append('email',data.email);
        form.append('password',data.password);

        axios
        .post(url,form,{
            headers:{'Content-Type':"multipart/form-data"},
        })
        .then((response) => {
            console.log(response.data);
            setData({...data,id: e.target.value})
    });

	

	}
  return (

	<div class="container-fluid">
		<div class="row main-content bg-success text-center">
			<div class="col-md-4 text-center company__info">
				<span class="company__logo"><h2><span class="fa fa-android"></span></h2></span>
				{/* <h4 class="company_title">Your Company Logo</h4> */}
        <img  src='https://media.istockphoto.com/id/1144604540/photo/house-keys-with-house-shaped-keychain.jpg?s=612x612&w=0&k=20&c=IMBMiPKeCieUf1d61harCHMI_oJdoL9pyJzjm5uZVro=' />
			</div>
			<div class="col-md-8 col-xs-12 col-sm-12 login_form ">
				<div class="container-fluid">
					<div class="row">
						<h2>Log In</h2>
					</div>
					<div class="row">
						<form control="" class="form-group" onSubmit={formSubmitter}>
							<div class="row">
								<input onChange={(e,email)=>handle(e,email)} type="text" name="email" id="email"  value={data.email} className="form__input" placeholder="Email"/>
							</div>
							<div class="row">
								{/* <!-- <span class="fa fa-lock"></span> --> */}
								<input onChange={(e,password)=>handle(e,password)} type="password" name="password" id="password" value={data.password} className="form__input" placeholder="Password"/>
							</div>
							<div class="row">
								<input type="checkbox" name="remember_me" id="remember_me" class=""/>
								<label for="remember_me">Remember Me!</label>
							</div>
							<div   class="row">
								<input style={{marginLeft:'70px'}} onClick={handlesubmit} type="submit" value="Submit" class="btn"/>
							</div>
						</form>
					</div>
					<div class="row">
						<p onClick={rclick}>Don't have an account? <a href="#">Register Here</a></p>
					</div>
				</div>
			</div>
		</div>


		
	</div>
	


   
  )
}

export default Login

// import React from 'react'
// import './Login.css'
// function Login() {
//   return (
//     <div style={{marginLeft:"100px" ,marginTop:"30px"}}>
//         	<div class="container-fluid" >

// <div class="row" id="login">
//   <div class="col-xs-12 col-md-10 col-md-offset-1 col-lg-2 col-lg-offset-3 text-center" id="left">
//     <i class="glyphicon glyphicon-road"></i>
//     <h2>Memeway</h2>
//     <h4>Like highway but way better.</h4>
//   </div>

//   <div class="col-xs-12 col-md-10 col-md-offset-1 col-lg-4 col-lg-offset-0" id="right">
//     <h1 class="text-center">Log In</h1>

//     <div id="username">
//       <span>Username:</span>
//       <input type="text" placeholder="username"/>
//     </div>

//     <div id="password">
//       <span>Password:</span>
//       <input type="password" placeholder="*********"/>
//     </div>

//     <button>Log In</button>

//     <div class="text-center" id="acct">
//     <span> Not got an account yet? </span>
//     </div>

//     <button id="signup-button">Sign Up</button>
//   </div>
// </div>

// </div>
//     </div>
//   )
// }

// export default Login