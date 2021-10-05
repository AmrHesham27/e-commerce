import './OneIot.css'
import { addSeeDetailsAction } from '../../actions/seeDetails'; 
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';

const OneIot = (props) => {
    const history = useHistory();
    const dispatch = useDispatch();

    let iotName = props.iotName;
    let iotPrice = props.data.price;
    let iotImg = props.data.Img;

    const productType = "iot";
    const seeDetails = () => {
      dispatch( addSeeDetailsAction( productType , iotName) );
      history.push('/ShowProduct')     
    }
    return (
      <div className="OneIot">
          <img src={iotImg} alt="Iot"/>
          <h1 className="IotName">{iotName}</h1>
          <div className="productPrice" >
            <p>${iotPrice}</p>
          </div>
          <button onClick={seeDetails} className="seeDetails">See details</button>
      </div>
    );
}
  
export default OneIot;

  