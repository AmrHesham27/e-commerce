import './Iot.css'
import OneIot from "../OneIot/OneIot";
import products from '../products';

function Iot() {
  // phones names in array to apply map method
  let iot = products.iot;

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
