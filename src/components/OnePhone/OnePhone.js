import './OnePhone.css'
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { addSeeDetailsAction } from '../../actions/seeDetails'; 

const OnePhone = (props) => {
    const history = useHistory();
    const dispatch = useDispatch();

    let phoneName = props.phoneName;
    let data = props.data;
    let phonePrice = data.price;
    let phoneImg = data.Img;

    const seeDetails = () => {
      dispatch( addSeeDetailsAction( phoneName, data ) );
      history.push('/ShowProduct')     
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

