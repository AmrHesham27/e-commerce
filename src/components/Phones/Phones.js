import './Phones.css'
import OnePhone from "../OnePhone/OnePhone";
import products from '../products';

function Phones() {
  // phones names in array to apply map method
  let phones = products.smartPhones;
  return (
    <div className="Phones">
      <p>Smart phones</p>
      <div className="container">
      {phones ? 
      Object.entries(phones).map( ([productName, infoObject ]) => {return (<OnePhone phoneName={productName} data={infoObject} key={productName} />)}) 
      : undefined}
      </div>
    </div>
  );
}

export default Phones;
