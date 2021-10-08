import { useSelector } from "react-redux";
import './ShowProduct.css'
import Header from "../Header/Header"
import Footer from "../Footer/Footer";
import { useState } from "react";
import { getDatabase, ref, runTransaction  } from "firebase/database";

const ShowProduct = (props) => {
    // get state fromo redux
    const userId = useSelector( state => state.authUser )
    const seeDetails = useSelector(state => state.seeDetails);
    let productName = seeDetails.productName;
    let productInfo = seeDetails.productInfo;
    // product info
    const Img = productInfo && productInfo.Img ? productInfo.Img : undefined;
    const price = productInfo && productInfo.price ? productInfo.price : undefined;
    const RAM = productInfo && productInfo.RAM ? productInfo.RAM : undefined;
    const Memory = productInfo && productInfo.Memory? productInfo.Memory : undefined;

    // function to write data to firebase (buy item)
    function fireBaseBuy( userId , productName ) {
      const db = getDatabase();
      const shoppingRef = ref(db, '/users/' + userId + '/shoppingCart/' + productName);
      runTransaction(shoppingRef, (productName) => {
        if (userId){
          if (productName) { productName++ }  
          else { productName = 1 }
        }
        return productName;
      });
    }
    // Buy function
    const [msg, setMsg] = useState(undefined);
    const [msgColor, setMsgColor] = useState("black");
    const buy = () => {
      if (userId){
        fireBaseBuy(userId , productName);
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
          <h1 className="productName">{productName}</h1>
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
