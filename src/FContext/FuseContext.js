import React, { useState } from 'react'
import UserContext from './usecontext'
import Stucontext from './Stucontext'

function FuseContext() {
    const student={names:'balu',study:12}
    // const [student,setStudent]=useState("veera")

  
  return (
    <div>
    <UserContext.Provider value={student}>
        <h1>function</h1>
<Stucontext/>
    </UserContext.Provider>

</div>
  )
}

export default FuseContext