import Carousel from 'react-bootstrap/Carousel';
import './HomeCarousel.css'

export default function HomeCarousel() {
  return (
    <div className='home-carousel'>
      <Carousel fade className='m-2'>
        <Carousel.Item>
          <img
            className="carousel-home d-block w-100"
            src="https://guardforlife.com/wp-content/uploads/2015/07/Lifeguarding-Myths.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h1 style={{color:'black'}}>At The Pool</h1>
            <p style={{color:'black'}}>All guards must complete scanning!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-home d-block w-100"
            src="https://blogs.cdc.gov/wp-content/uploads/sites/6/2021/05/A-first-aid-kit.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h1>Standard First Aid</h1>
            <p>A must have across all health and instructor related fields!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-home d-block w-100"
            src="https://blogs.bmj.com/injury-prevention/files/2020/08/lifeguard-1-scaled.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h1>Waterfront Guarding</h1>
            <p>
              The next level after pool national lifeguarding!
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
