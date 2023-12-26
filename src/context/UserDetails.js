import React, { Component } from 'react'
import UsesContext from './useContext';

 class UserDetails extends Component {
    static contextType=UsesContext
  render() {
    let usDetails=this.context
    return (
      <div>
        <h1>name:{usDetails.name}</h1>
     <h1>age:{usDetails.age}</h1>
      </div>
    )
  }
}
export default UserDetails;