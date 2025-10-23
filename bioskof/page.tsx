'use client'
import React from 'react'
import "./an/i.css"
import Link from 'next/link';

function Bioskob() {
  return (
    <div>
      <title>Now Showing Movies</title>
     <div className='container'>
        <div><h1 style={{marginLeft:700, marginTop:130}}>Now Showing</h1></div>
        <div><h2 style={{marginLeft:700, marginTop:-20}}>Demon Slayer : Kimetsu No Yaiba</h2></div>
        <p><b>Duration : 2h 35m</b></p>
        <p>Tanjiro Kamado and other members of the Demon Slayer Corps find themselves in an epic battle at Infinity Castle.</p>
        <li className='button1'><Link href="kny"><div>
          Book Now
          </div></Link></li>
    </div>
    <div className='gambar1' >
      <img src="adua.png" alt="KNY"/>
    </div>
    <div className="topnav">
        <li><Link className="active" href="baru">Home</Link></li>
        <li><Link href="tiket">Ticket</Link></li>
        <li><Link href="info">Info</Link></li>
        <li><Link href="cs">Coming Soon</Link></li>
    </div>
 <div className='kartu'> 
         <div className="movie-card">
      <img
        src="la.jpg"
        alt="La La Land"
        className="movie-image"
      />

      <div className="overlay">
        <h4 className="release-date">La La Land</h4>
        <p>When Sebastian, a pianist, and Mia, an actress, follow their passion and achieve success in their respective fields, 
          they find themselves torn between their love 
          for each other and their careers.</p>
        <div className="buttons">
        <li> <Link href="la" >
          <button className="btn ticket">Book ticket</button>
          </Link>
          </li>
        </div>
      </div>
    </div>
    

         <div className="movie-card">
      <img
        src="kmn.webp"
        alt="KIMI"
        className="movie-image"
      />

      <div className="overlay">
        <h4 className="release-date">Kimi No Nawa</h4>
            <p>
          Two teenagers share a profound, magical connection upon 
          discovering they are swapping bodies. 
          Things manage to become even more complicated 
          when the boy and girl decide to meet in person.
        </p>
        <div className="buttons">
        <li> <Link href="kimi" >
          <button className="btn ticket">Book ticket</button>
          </Link>
          </li>
        </div>
      </div>
    </div>
             <div className="movie-card">
      <img
        src="sp.jpg"
        alt="Hope On The Stage"
        className="movie-image"
      />

      <div className="overlay">
        <h4 className="release-date">Spider-man :
          No Way Home
        </h4>
        <p>
          Spider-Man seeks the help of Doctor Strange to forget his exposed secret identity as Peter Parker. However,
           Strange's spell goes horribly wrong, 
           leading to unwanted guests entering their universe.
        </p>
        <div className="buttons">
        <li> <Link href="sp" >
          <button className="btn ticket">Book ticket</button>
          </Link>
          </li>
        </div>
      </div>
    </div>
    </div>
    
          </div>
  )
}

export default Bioskob