import { useSelector } from "react-redux";
import './ShowProduct.css'

const ShowProduct = (props) => {
    
    const myState = useSelector(state => state.seeDetails);
    return (
      <div>
          <p>{myState.productType}</p>
          <p>{myState.productName}</p>
      </div>
    );
}
  
export default ShowProduct;
