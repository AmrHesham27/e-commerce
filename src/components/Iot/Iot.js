import './Iot.css'
import { useSelector } from "react-redux";
import OneIot from "../OneIot/OneIot";

function Iot() {
  // phones names in array to apply map method
  let iot = useSelector(state => state.products? state.products.iot : undefined);

  return (
    <div className="Iot">
      <h1 id="Iot-h1">Iot</h1>
      <div className="container">
      {iot? Object.entries(iot).map(( [key,value] ) => {return (<OneIot iotName={key} data={value} key={key} />)}) : undefined}
      </div>
    </div>
  );
}

export default Iot;