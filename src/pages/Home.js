import React from 'react'
import './Home.css'
import {Link} from 'react-router-dom';

function Home() {
  return (
    <div>
         <header>
            <h2 href="#"> Mountain Travel</h2>
            <nav>
               <li><a href="#">Main</a> </li> 
                <li><a href="#">404</a> </li>
                <li><a href="#">Contact</a> </li>
                
            </nav>
            </header>
            
            <section class="hero">
            <div class="background-image" ></div>
                <div class="hero-content-area">
                <h1>Mountain Travel</h1>
                    <h3> Unmissable Adventure Tours Around the World</h3>
                <a href="#" class="btn">Contact Us</a>
                </div>
                
            </section>
        
        <section class="destinations">
        <h3 class="title">Rest information will go here:</h3>
            <p>blah blash blahs blahs blahss</p>
            <hr/>
           
        </section>
        
        
        <section class="contact">
		<h3 class="title">Join our newsletter</h3>	
		<p>Information will go here(if any)</p>
		<hr/>

		<form>*
			<input type="email" placeholder="Email"/>
			<a href="#" class="btn">Subscribe now</a>
		</form>
	</section> 
{/*  */}

<div class="card-group" >
  <div class="card" style={{height:"100px"}}>
    <img class="card-img-top" src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg" alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
    
  </div>
  <div class="card" >
    <img class="card-img-top" src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg" alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
    </div>
   
  </div>
  <div class="card">
    <img class="card-img-top" src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg" alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
    </div>
   
  </div>
</div>

    

	{/* <footer>
		<ul>
			<li><a href="#"><i class="fa fa-twitter-square"></i></a></li>
			<li><a href="#"><i class="fa fa-facebook-square"></i></a></li>
			<li><a href="#"><i class="fa fa-snapchat-square"></i></a></li>
			<li><a href="#"><i class="fa fa-pinterest-square"></i></a></li>
			<li><a href="#"><i class="fa fa-github-square"></i></a></li>
		</ul>
		<p>Made by Pardeep Singh</p>
		<p>No attribution required. you can remove this footer.</p>
	</footer> */}
        
        {/* <div className="popular movies">
  <h3 style={{ color: '#FFD700' }}>POPULAR MOVIES</h3>
  <br />

  <div className="row row-cols-1 row-cols-md-3 g-4">
   
    {Array(3).fill().map((_, index) => (
      <div className="col" key={index}>
        <div className="card">
          <img
            src="https://images.ctfassets.net/hrltx12pl8hq/3Z1N8LpxtXNQhBD5EnIg8X/975e2497dc598bb64fde390592ae1133/spring-images-min.jpg"
            className="card-img-top"
            alt={`Movie ${index + 1}`}
          />
          <div className="card-img-overlay">
            <div className="card-body">
              <h5 className="card-title">Movie Name {index + 1}</h5>
              <Link to="" className="btn btn-primary">
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>


  <br />

  <section className="playing-movies">
  <center>
    <p>Watch New Movies</p>
    <h1>Movies Now Playing</h1>
  </center>
  <br />
  <div className="row row-cols-1 row-cols-md-3 g-4">
    {Array(3).fill().map((_, index) => (
      <div className="col" key={index}>
        <div className="card">
          <img
            src="https://images.ctfassets.net/hrltx12pl8hq/3Z1N8LpxtXNQhBD5EnIg8X/975e2497dc598bb64fde390592ae1133/spring-images-min.jpg"
            className="card-img-top"
            alt={`Movie ${index + 1}`}
          />
          <div className="card-img-overlay">
            <div className="card-body">
              <h5 className="card-title">Movie Name {index + 1}</h5>
              <Link to="" className="btn">
                Get Tickets
              </Link>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>

  <br />

  <section className="offer" style={{ maxWidth: "100%", padding: "1rem", textAlign: "center" }}>
  <h3 style={{ fontSize: "1.5rem" }}>
    40% Discount for Students
    <span style={{ marginTop: "1rem", display: "block" }}>
      <button style={{ padding: "0.5rem 2rem", fontSize: "1rem" }}>Book Your Tickets Now</button>
    </span>
  </h3>
</section>




  <br /> */}
  {/*  */}
  {/* <div className="popular movies">
  <h3 style={{ color: '#FFD700' }}>POPULAR MOVIES</h3>
  <br />

  <div className="row row-cols-1 row-cols-md-3 g-4">
    
    {[1, 2, 3].map((index) => (
      <div className="col" key={index}>
        <div className="card">
          <img
            src="https://i.pinimg.com/236x/dd/97/3a/dd973ac116a977c8dd5296b0da504b8c.jpg"
            className="card-img-top"
            alt={`Movie ${index}`}
          />
          <div className="card-img-overlay">
            <div className="card-body">
              <h5 className="card-title">Movie Name {index}</h5>
              <Link to="" className="btn btn-primary">
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

<br />

<section className="playing-movies">
  <center>
   
    <p>Watch New Movies</p>
    <h1>Movies Now Playing</h1>
  </center>
  <br />
  <div className="row row-cols-1 row-cols-md-3 g-4">
    {[1, 2, 3].map((index) => (
      <div className="col" key={index}>
        <div className="card">
          <img
            src="https://i.pinimg.com/236x/dd/97/3a/dd973ac116a977c8dd5296b0da504b8c.jpg"
            className="card-img-top"
            alt={`Movie ${index}`}
          />
          <div className="card-img-overlay">
            <div className="card-body">
              <h5 className="card-title">Movie Name {index}</h5>
              <Link to="" className="btn">
                Get Tickets
              </Link>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>

<br />

<section className="offer">
  <h3>40% Discount for Students
    <span style={{ paddingLeft: '2rem', display: 'block', textAlign: 'center' }}>
      <button>Book Your Tickets Now</button>
    </span>
  </h3>
</section>

<br /> */}
{/*  */}
{/* <div className="popular movies" style={{ maxWidth: "100%", padding: "1rem", textAlign: "center" }}>
  <h3 style={{ color: '#FFD700', fontSize: "1.5rem" }}>POPULAR MOVIES</h3>
  <br />

  <div className="row row-cols-1 row-cols-md-3 g-4">
    {Array(3).fill().map(( ) => (
      <div className="col" >
        <div className="card">
          <img
            src="https://images.ctfassets.net/hrltx12pl8hq/3Z1N8LpxtXNQhBD5EnIg8X/975e2497dc598bb64fde390592ae1133/spring-images-min.jpg"
            className="card-img-top"
            alt={'Movie'}
            style={{ maxWidth: "100%" }}
          />
          <div className="card-img-overlay">
            <div className="card-body">
              <h5 className="card-title">Movie Name </h5>
              <Link to="" className="btn btn-primary">
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
<br/>

<section className="playing-movies" style={{ maxWidth: "100%", padding: "1rem", textAlign: "center" }}>
  <p style={{ fontSize: "1rem" }}>Watch New Movies</p>
  <h1 style={{ fontSize: "1.5rem" }}>Movies Now Playing</h1>
  <br />
  <div className="row row-cols-1 row-cols-md-3 g-4">
    {Array(3).fill().map(() => (
      <div className="col" >
        <div className="card">
          <img
            src="https://images.ctfassets.net/hrltx12pl8hq/3Z1N8LpxtXNQhBD5EnIg8X/975e2497dc598bb64fde390592ae1133/spring-images-min.jpg"
            className="card-img-top"
            alt={'Movie'}
            style={{ maxWidth: "100%" }}
          />
          <div className="card-img-overlay">
            <div className="card-body">
              <h5 className="card-title">Movie Name </h5>
              <Link to="" className="btn">
                Get Tickets
              </Link>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>

<br />

<section className="offer" style={{ maxWidth: "100%", padding: "1rem", textAlign: "center" }}>
  <h3 style={{ fontSize: "1.5rem" }}>
    40% Discount for Students
    <span style={{ marginTop: "1rem", display: "block" }}>
      <button style={{ padding: "0.5rem 2rem", fontSize: "1rem" }}>Book Your Tickets Now</button>
    </span>
  </h3>
</section>
      */}
    </div>
  )
}

export default Home


// <div className="popular movies" style={{ maxWidth: "100%", padding: "1rem", textAlign: "center" }}>
//   <h3 style={{ color: '#FFD700', fontSize: "1.5rem" }}>POPULAR MOVIES</h3>
//   <br />

//   <div className="row row-cols-1 row-cols-md-3 g-4">
//     {Array(3).fill().map((_, index) => (
//       <div className="col" key={index}>
//         <div className="card">
//           <img
//             src="https://images.ctfassets.net/hrltx12pl8hq/3Z1N8LpxtXNQhBD5EnIg8X/975e2497dc598bb64fde390592ae1133/spring-images-min.jpg"
//             className="card-img-top"
//             alt={`Movie ${index + 1}`}
//             style={{ maxWidth: "100%" }}
//           />
//           <div className="card-img-overlay">
//             <div className="card-body">
//               <h5 className="card-title">Movie Name {index + 1}</h5>
//               <Link to="" className="btn btn-primary">
//                 Book Now
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     ))}
//   </div>
// </div>

// <br />

// <section className="playing-movies" style={{ maxWidth: "100%", padding: "1rem", textAlign: "center" }}>
//   <p style={{ fontSize: "1rem" }}>Watch New Movies</p>
//   <h1 style={{ fontSize: "1.5rem" }}>Movies Now Playing</h1>
//   <br />
//   <div className="row row-cols-1 row-cols-md-3 g-4">
//     {Array(3).fill().map((_, index) => (
//       <div className="col" key={index}>
//         <div className="card">
//           <img
//             src="https://images.ctfassets.net/hrltx12pl8hq/3Z1N8LpxtXNQhBD5EnIg8X/975e2497dc598bb64fde390592ae1133/spring-images-min.jpg"
//             className="card-img-top"
//             alt={`Movie ${index + 1}`}
//             style={{ maxWidth: "100%" }}
//           />
//           <div className="card-img-overlay">
//             <div className="card-body">
//               <h5 className="card-title">Movie Name {index + 1}</h5>
//               <Link to="" className="btn">
//                 Get Tickets
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     ))}
//   </div>
// </section>

// <br />

// <section className="offer" style={{ maxWidth: "100%", padding: "1rem", textAlign: "center" }}>
//   <h3 style={{ fontSize: "1.5rem" }}>
//     40% Discount for Students
//     <span style={{ marginTop: "1rem", display: "block" }}>
//       <button style={{ padding: "0.5rem 2rem", fontSize: "1rem" }}>Book Your Tickets Now</button>
//     </span>
//   </h3>
// </section>
