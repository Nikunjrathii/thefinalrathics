import Carousel from "react-bootstrap/Carousel";
import image1 from "../assest/image4.jpg";
// import image2 from "../assest/image2.jpg";
import image3 from "../assest/image3.jpg";
import image4 from "../assest/image1.jpg";
import "./Hero.css";


function Hero() {
  return (
    <div className="hero-container">
      <Carousel pause="false">
        <Carousel.Item interval={5500}>
          <img className="d-block outer" src={image3} alt="First slide" />
          <Carousel.Caption className="caption">
            <h3>
              Harness the Potential of Premium Services for Exceptional
              Outcomes.
            </h3>
            <p>
              Building Trust with the World's Most Innovative Companies, Since
              Day One.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5500}>
          <img className="d-block outer" src={image4} alt="Second slide" />
          <Carousel.Caption className="caption">
            <div>
              <h3>
                Igniting Innovation.
                <br />
                Delivering Exceptional Services.
              </h3>
              <p>
                Combining Innovation and Cutting-edge Technology to Create
                Market-Winning Software Services.
              </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5500}>
          <img className="d-block outer" src={image1} alt="Third slide" />
          <Carousel.Caption className="caption">
            <h3>
              Crafting Digital Experiences, <br />
              Empowering Online Presence.
            </h3>
            <p>
              Harnessing Technology to Build Engaging Websites and Transforming
              Brands Online.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Hero;
