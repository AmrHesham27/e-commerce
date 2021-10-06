import { useSelector } from "react-redux";
import './ShowProduct.css'
import Header from "../Header/Header"
import Footer from "../Footer/Footer";
import { useState } from "react";
import { getDatabase, ref, runTransaction  } from "firebase/database";

const ShowProduct = (props) => {
    // get product type and name from Redux
    const seeDetails = useSelector(state => state.seeDetails);
    const productName = seeDetails.productName;
    const productType = seeDetails.productType;
    // get the actual products from redux and the logged in user Id
    const product = useSelector(state => state.products[productType][productName]);
    const userId = useSelector(state => state.authUser); 
    // product info
    const Img = product.Img;
    const price = product.price;
    const RAM = product.RAM ? product.RAM : undefined;
    const Memory = product.Memory? product.Memory : undefined;

    // function to write data to firebase
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
    const buy = () => {
      if (userId){
        fireBaseBuy(userId , productName);
      }
      else{setMsg("please login first")}
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
          <p className="err">{msg ? msg : undefined}</p>      
        </div>
        <Footer/>
      </div>
    );
}
  
export default ShowProduct;
