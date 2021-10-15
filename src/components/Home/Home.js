// import css and image
import './Home.css';
import oppo1 from '../../utils/oppo1.jpg';
import oppo2 from '../../utils/oppo2.jpg';
import oppo3 from '../../utils/oppo3.jpg';
// import Compnents
import Header from '../Header/Header';
import Iot from '../Iot/Iot';
import Footer from "../Footer/Footer";
import Phones from "../Phones/Phones";
// React
import { useRef } from 'react';
// React bootstrap 
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

function Home(props) {
  // scroll to specific elements using Ref
  const phonesRef = useRef();
  const IotRef = useRef();
  const scrollPhones = 
            () => phonesRef.current.scrollIntoView({behavior: "smooth",block: "start"});
  const scrollIot = 
            () => IotRef.current.scrollIntoView({behavior: "smooth",block: "start"});  
  
  return (
    <div className="Home" >
      <Header>
          <button  className="navLink" onClick={scrollPhones}>Smart phones</button>
          <button  className="navLink" onClick={scrollIot}>Iot</button>
      </Header> 

      <Carousel>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={oppo1}
            alt="First slide"
          />
          <Carousel.Caption>
            <p>OPPO and Wimbledom, play with heart</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={oppo2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <p>Discover the power of OPPO</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={oppo3}
            alt="Third slide"
          />
          <Carousel.Caption>
            <p>Discover the power of OPPO</p>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>

      <div id='phones' ref={phonesRef} >
        <Phones />
      </div>
      
      <div id='Iot' ref={IotRef}>
        <Iot />
      </div>

      <Footer/>      
    </div>
  );
}

export default Home;
