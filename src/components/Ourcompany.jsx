import React from 'react'
import "./Ourcompany.css"
import image1 from "../assest/ourcompany.jpg"
const Ourcompany = () => {
  return (
    <div className="introduction-container">
    <div className="image-container">
      <img src={image1} alt="Company Logo" />
    </div>
    <div className="text-container">
      <h2 className="company-name">Our Company</h2>
      <hr className="line" />
      <p className="description">
      Nurtured in the vibrant land of India, our company thrives as a leading force in Offshore Software Development. With a passion for innovation, we embark on a digital journey, seamlessly blending technology and expertise. Our dedicated team pioneers tomorrow's revolutions today, embracing cutting-edge advancements to craft exceptional solutions. From the enchanting landscapes of India, we extend our transformative services nationwide, empowering businesses with the power of technology and driving remarkable growth in the digital realm.
      </p>
    </div>
  </div>
  )
}

export default Ourcompany
