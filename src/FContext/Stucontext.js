import React, { useContext, useState } from 'react'
import UserContext from './usecontext';

function Stucontext() {
    // const [student1,setStudent]=useState("veera")

    const student=useContext(UserContext);
    // const click=(()=>{
    //     setStudent("balu")
    // })
  return (
    <div>
        <h1>name {student.names}</h1>
        <h1>standard {student.study}</h1>
        {/* <h1>{student1}</h1>
        <button onClick={click}>click</button> */}
    </div>
  )
}

export default Stucontext