import Carousel from 'react-bootstrap/Carousel';

export default function HomeCarousel() {
  return (
    <Carousel className='m-2'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://guardforlife.com/wp-content/uploads/2015/07/Lifeguarding-Myths.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://blogs.cdc.gov/wp-content/uploads/sites/6/2021/05/A-first-aid-kit.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://blogs.bmj.com/injury-prevention/files/2020/08/lifeguard-1-scaled.jpg"
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
}
