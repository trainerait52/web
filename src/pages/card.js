// import React from 'react'
// const Card=({data,cardIndex})=>{
//     return(
//         <div>
//             {data[cardIndex].map(item=>{
//                 <div className='card'>
//                     <p>{item.title}</p>
//                     <p>{item.name}</p>
//                     </div>
//             })}
//         </div>
//     )
// }
// export default Card;
// import React from 'react';

// const Card = ({ data, cardIndex }) => {
//   return (
//     <div>
//       {data[cardIndex].map((item, index) => (
//         <div className='card' key={index}>
//           <p>{item.title}</p>
//           <p>{item.name}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Card;
import React from 'react';

const Card = ({ data, cardIndex }) => {
  return (
    <div>
      {data[cardIndex].map((item, index) => (
        <div className='card' key={index}>
          {/* <img src={item.imageUrl} alt={`Card ${index + 1}`} /> */}
          <img src={item.imageUrl} />
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Card;
// The expression `Card ${index + 1}` appears to be a string template in a programming context, specifically in a language that supports string interpolation. 

// Here's a breakdown of its meaning:

// 1. `Card`: This is a string literal, likely representing the word "Card" or some identifier in your code.

// 2. `${index + 1}`: This is an example of string interpolation or template literals, which is a feature in some programming languages that allows you to embed expressions within a string. In this case, `${index + 1}` is an expression that will be evaluated at runtime. It takes the value of the variable `index`, adds 1 to it, and then substitutes the result into the string at this location.

// For example, if `index` has the value 2, the resulting string would be "Card 3" because 2 + 1 equals 3.

// The purpose of this code might be to generate a string that includes the index incremented by 1 within the context of a "Card." This can be useful in various programming scenarios, such as generating user-friendly output or labeling elements in an array or list.