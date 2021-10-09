import { useSelector } from "react-redux";
import './ShowProduct.css'
import Header from "../Header/Header"
import Footer from "../Footer/Footer";
import { useState } from "react";
import { getDatabase, ref, runTransaction  } from "firebase/database";

const ShowProduct = (props) => {
    // get state fromo redux
    const userId = useSelector( state => state.authUser );

    let name = props.name;
    let data = props.data;
    // product info
    const Img = data.Img ;
    const price = data.price ;
    const RAM = data.RAM ? data.RAM : undefined;
    const Memory = data.Memory? data.Memory : undefined;

    // function to write data to firebase (buy item)
    function fireBaseBuy( userId , name ) {
      const db = getDatabase();
      const shoppingRef = ref(db, '/users/' + userId + '/shoppingCart/' + name);
      runTransaction(shoppingRef, (name) => {
        if (userId){
          if (name) { name++ }  
          else { name = 1 }
        }
        return name;
      });
    }
    // Buy function
    const [msg, setMsg] = useState(undefined);
    const [msgColor, setMsgColor] = useState("black");
    const buy = () => {
      if (userId){
        fireBaseBuy(userId , name);
        setMsg("purchase was made successfully!");
        setMsgColor("green");
      }
      else{
        setMsg("please login first");
        setMsgColor("red");
      }
    } 

    return (
      <div className="showProductPage">
        <Header/>
        <div className="product">
          <h1 className="productName">{name}</h1>
          <img src={Img} alt="product"/>
          <p>{Memory ? "Memory is " + Memory + "GB" : undefined}</p>
          <p>{RAM ? "RAM is " + RAM + "GB" : undefined}</p>
          <p>${price}</p>
          <button onClick={buy} className="buyButton">Buy now</button>
          <p style={{color:msgColor}}>{msg ? msg : undefined}</p>      
        </div>
        <Footer/>
      </div>
    );
}
  
export default ShowProduct;
