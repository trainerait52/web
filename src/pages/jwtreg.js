
import React, { useState } from 'react';

function Jreg() {
    const [formData, setFormData] = useState({
        name:"",
        email:"",
        password:"",
        phone:"",
      });
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(JSON.stringify(formData))
        try {
          // Send registration data to your backend to create a new user and get a JWT token.
          const response = await fetch('http://training.ateesdemo.com/user-registration', {
            method: 'POST',
            headers: {
                headers:{"Content-Type":"multipart/form-data"},
            },
            body: JSON.stringify(formData),
            
          });
    
          if (response.ok) {
            // Registration successful, handle the JWT token and redirect the user as needed.
          } else {
            // Handle registration error.
          }
        } catch (error) {
          // Handle network or other errors.
        }
      };
  return (
    <div>
    <h2>Registration</h2>
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
         <label>Phone</label>
        <input
          type="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Register</button>
    </form>
  </div>
  )
}

export default Jreg