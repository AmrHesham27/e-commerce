import { useSelector } from "react-redux"
import { onValue, getDatabase, ref } from "firebase/database";
import ShoppingItem from "./shoppingItem";
import { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./shoppingCart.css";
import products from "../products";

const ShoppingCart = (props) => {
    const userId = useSelector(state => state.authUser);    
    const [shoppingItems, setShoppingItems] = useState({})
    const [total , setTotal] = useState(0);
  
    const getTotalAmount = (data) => {
        let AllProducts = { ...products.smartPhones, ...products.iot};
        let prices = Object.entries(data).map(([i,y]) => {
            let productPrice = AllProducts[i].price;
            return( productPrice * y )
        });
        let total = 0;
        for (let i = 0; i < prices.length; i++) {
            total += prices[i];
        };
        setTotal(total);
    };

    // listener
    const db = getDatabase();
    const shoppingCartRef = ref(db, `users/${userId}/shoppingCart`);
    onValue(shoppingCartRef, (snapshot) => {
        const data = snapshot.val();
        if (snapshot.exists()) {
            if(JSON.stringify(data) === JSON.stringify(shoppingItems)){
               return;
            }
           else{
            setShoppingItems(data);
            getTotalAmount(data);
           };
        }
        else{ if(total!==0) {setTotal(0)}
              else{return}
        }             
    });
    
    return (
        <div className="shoppingCart">
            <Header/>
            <div className="shoppingWrap">
                {shoppingItems ? <p>your total purchases is $ {total}</p> : undefined}
                {shoppingItems ? Object.entries(shoppingItems).map( (i) => { return (<ShoppingItem nameAndNo={i} key={i[0]} />) }) : undefined}
            </div>
            <Footer/>
        </div>
    )
}

export default ShoppingCart