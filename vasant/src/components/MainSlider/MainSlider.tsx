import React, { FC } from 'react';
import { Carousel } from 'react-bootstrap';


interface MainSliderProps {}

const MainSlider: FC<MainSliderProps> = () => (
  <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block"
          src="https://nhs-dynamic.secure.footprint.net/Images/Homes/Gehan10429/50743197-210706.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src="https://nhs-dynamic.secure.footprint.net/Images/Homes/Gehan10429/50743200-210706.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src="https://nhs-dynamic.secure.footprint.net/Images/Homes/Gehan10429/50743178-210706.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
);

export default MainSlider;
