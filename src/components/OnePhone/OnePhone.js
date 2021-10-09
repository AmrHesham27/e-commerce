import './OnePhone.css'
import { useHistory } from 'react-router';

const OnePhone = (props) => {
    const history = useHistory();

    let phoneName = props.phoneName;
    let data = props.data;
    let phonePrice = data.price;
    let phoneImg = data.Img;

    const seeDetails = () => {
      history.push('/ShowProduct/' + phoneName)     
    }

    return (
      <div className="Phone">
          <h1 className="phoneName">{phoneName}</h1>
          <img src={phoneImg} alt="phone"/>
          <div className="productPrice" >
            <p>${phonePrice}</p>
          </div>
          <button onClick={seeDetails} className="seeDetails">See details</button>
      </div>
    );
}
  
export default OnePhone;

