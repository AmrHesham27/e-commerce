import './Phones.css'
import { useSelector } from "react-redux";
import OnePhone from "../OnePhone/OnePhone";

function Phones() {
  // phones names in array to apply map method
  let phones = useSelector(state => state.products? state.products.smartPhones : undefined);

  return (
    <div className="Phones">
      <h1 id="smartPhones-h1">Smart phones</h1>
      <div className="container">
      {phones ? Object.entries(phones).map( ([key,value]) => {return (<OnePhone phoneName={key} data={value} key={key} />)}) : undefined}
      </div>
    </div>
  );
}

export default Phones;
