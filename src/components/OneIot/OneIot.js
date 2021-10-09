import './OneIot.css'
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';

const OneIot = (props) => {
    const history = useHistory();

    let iotName = props.iotName;
    let data = props.data;
    let iotPrice = data.price;
    let iotImg = data.Img;

    const seeDetails = () => {
      history.push('/ShowProduct/' + iotName)     
    }
    return (
      <div className="OneIot">
          <h1 className="IotName">{iotName}</h1>
          <img src={iotImg} alt="Iot"/>
          <div className="productPrice" >
            <p>${iotPrice}</p>
          </div>
          <button onClick={seeDetails} className="seeDetails">See details</button>
      </div>
    );
}
  
export default OneIot;

  