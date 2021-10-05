import { useSelector } from "react-redux";
import './OnePhone.css'

const OnePhone = (props) => {
    let phoneName = props.phoneName;

    //get the database of phones 
    const Allphones = useSelector(state => state.initialState? state.initialState.phones : undefined);

    //let phonePrice = Allphones ? Allphones[phoneName].price : undefined;
    //let phoneImg = Allphones ? Allphones[phoneName].Img : undefined;

    return (
      <div className="Phone">
          <img src={phoneImg} alt="phone"/>
          <h1 className="phoneName">{phoneName}</h1>
          <div className="phonePrice" >
            <p>$phonePrice</p>
          </div>
          <button className="seeDetails">See details</button>
      </div>
    );
}
  
export default OnePhone;

  