import React, { Component } from 'react'
import bg from './images/flowers.jpg'
import UsesContext from './context/useContext'
import UserDetails from './context/UserDetails'
 class A extends Component {

  render() {
    let user={name:"ram",age:26}
    // const{name,age}=this.props
    return (
//       <div style={{height:"600px",width:"1000px",backgroundImage:`url(${bg})`,backgroundRepeat:"no-repeat"}}>
// <h1> wlcome {name + age}</h1>

//       </div>
<div style={{height:"300px"}}> 
<UsesContext.Provider value={user}>
  <h1>usecontext</h1>
  <UserDetails/>

</UsesContext.Provider>
</div>
    )
  }
}
export default A;




// If you have simple state needs, you can use useContext , but if your state needs are more complex or large, you can use Redux to manage it more effectively.




















// import React, { Component } from 'react';

// class ComponentDidMountExample extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: null,
//       loading: true,
//     };
//   }

//   componentDidMount() {
//     // Simulate fetching data from an API (e.g., with the Fetch API or Axios)
//     setTimeout(() => {
//       // Replace this with your actual API request
//       const fakeData = { message: 'Data fetched from an API' };

//       this.setState({
//         data: fakeData,
//         loading: false,
//       });
//     }, 2000); // Simulate a 2-second delay for the API request
//   }

//   render() {
//     const { data, loading } = this.state;

//     return (
//       <div>
//         <h1>ComponentDidMount Example</h1>
//         {loading ? (
//           <p>Loading...</p>
//         ) : (
//           <p>Data: {data.message}</p>
//         )}
//       </div>
//     );
//   }
// }

// export default ComponentDidMountExample;
////////////////////////////////////////////////////
// import React, { Component } from 'react';

// class ComponentDidUpdateExample extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//     };
//   }

//   // A custom method to increment the count
//   incrementCount = () => {
//     this.setState((prevState) => ({
//       count: prevState.count + 1,
//     }));
//   }

//   // The componentDidUpdate method
//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.count !== this.state.count) {
//       console.log(`Count updated: ${this.state.count}`);
//     }
//   }

//   render() {
//     return (
//       <div>
//         <h1>ComponentDidUpdate Example</h1>
//         <p>Count: {this.state.count}</p>
//         <button onClick={this.incrementCount}>Increment Count</button>
//       </div>
//     );
//   }
// }

// export default ComponentDidUpdateExample;
/////////////////////////////////////////////////////////
// import React, { Component } from 'react';

// class ComponentWillUnmountExample extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//     };
//   }

//   // A custom method to increment the count
//   incrementCount = () => {
//     this.setState((prevState) => ({
//       count: prevState.count + 1,
//     }));
//   }

//   // Set up an interval when the component is mounted
//   componentDidMount() {
//     this.interval = setInterval(() => {
//       console.log('Interval tick');
//     }, 1000);
//   }

//   // Clear the interval when the component is about to be unmounted
//   componentWillUnmount() {
//     clearInterval(this.interval);
//   }

//   render() {
//     return (
//       <div>
//         <h1>ComponentWillUnmount Example</h1>
//         <p>Count: {this.state.count}</p>
//         <button onClick={this.incrementCount}>Increment Count</button>
//       </div>
//     );
//   }
// }

// export default ComponentWillUnmountExample;
////////////////////////////////////////////////////////
