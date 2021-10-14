// import css and image
import './Home.css';
import oppo1 from '../../utils/oppo1.jpg';
import oppo2 from '../../utils/oppo2.jpg';
// import Compnents
import Header from '../Header/Header';
import Iot from '../Iot/Iot';
import Footer from "../Footer/Footer";
import Phones from "../Phones/Phones";
// React
import { useRef } from 'react';

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
          <button  className="nav-link" onClick={scrollPhones}>Smart phones</button>
          <button  className="nav-link" onClick={scrollIot}>Iot</button>
      </Header> 

      <img src={oppo1} alt='oppo'/>

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
