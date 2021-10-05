// import css and image
import './Home.css';
import oppo1 from '../../utils/oppo1.jpg';
// import Compnents
import Header from '../Header/Header';
import Iot from '../Iot/Iot';
import Footer from "../Footer/Footer";
import Phones from "../Phones/Phones";
// redux
import { useSelector } from "react-redux";
// React
import { useRef } from 'react';

function Home(props) {

  // Redux
  const authUser = useSelector(state => state.authUser);

  // scroll to specific elements using Ref
  const phonesRef = useRef();
  const IotRef = useRef();
  const scrollPhones = 
            () => phonesRef.current.scrollIntoView({behavior: "smooth",block: "start"});
  const scrollIot = 
            () => IotRef.current.scrollIntoView({behavior: "smooth",block: "start"});  
  
  return (
    <div className="Home" >
      {
      authUser?
      <Header LogOut={true}>
        <button onClick={scrollPhones} className='NavLink'>Smart phones</button>
        <button onClick={scrollIot} className='NavLink'>Iot</button>
      </Header> 
      :
      <Header Login={true} Register={true} >
        <button onClick={scrollPhones} className='NavLink'>Smart phones</button>
        <button onClick={scrollIot} className='NavLink'>Iot</button>
      </Header>
      }
      <img id="oppoImg" src={oppo1} alt='oppo'/>

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
