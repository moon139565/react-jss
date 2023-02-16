import './Banner.css';
import Carousel from 'react-bootstrap/Carousel';
import slider1 from "../../images/slider1.jpg"
import slider2 from "../../images/slider2.jpg"
import slider3 from "../../images/slider3.jpg"
import Button from 'react-bootstrap/Button';

const Banner = () =>{
    return (
        <Carousel className="Carousel">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slider1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>SPOTOGRAPHER</h5>
            <h2>Sports Photographer</h2>
            <p>I Capture Sports Moments and Actions.</p>
            <Button variant="secondary">More About Me</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slider2}
            alt="Second slide"
          />
  
          <Carousel.Caption>
          <h5>SPOTOGRAPHER</h5>
            <h2>Sports Photographer</h2>
            <p>I Capture Sports Moments and Actions.</p>
            <Button variant="secondary">More About Me</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slider3}
            alt="Third slide"
          />
  
          <Carousel.Caption>
          <h5>SPOTOGRAPHER</h5>
            <h2>Sports Photographer</h2>
            <p>I Capture Sports Moments and Actions.</p>
            <Button variant="secondary" className='btn'>More About Me</Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
};

export default Banner;