import React, { useEffect } from 'react'
import "./Home.css"
import Hero from './Hero'
import Ourcompany from './Ourcompany'
import Iws from './Iws'
import Wcu from './Wcu'
import GetQuote from './GetQuote'





// import About from './About'
const Home = () => {
  useEffect(() => {
    document.title = 'Rathi Consultancy Services-Home Page';
  }, []);
  

  return (
    <div>
     <Hero/>
      <Ourcompany/>
      <Iws/>
      <Wcu/>
      <GetQuote/>
      
    </div>
  )
}

export default Home
