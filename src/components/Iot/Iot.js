import './Iot.css'
import { useSelector } from "react-redux";
import OneIot from "../OneIot/OneIot";

function Iot() {
  // phones names in array to apply map method
  let iot = useSelector(state => state.products? state.products.iot : undefined);

  return (
    <div className="Iot">
      <p>Iot products</p>
      <div className="container">
      {iot? 
      Object.entries(iot).map(( [productName, infoObject] ) => {return (<OneIot iotName={productName} data={infoObject} key={productName} />)}) 
      : undefined}
      </div>
    </div>
  );
}

export default Iot;
