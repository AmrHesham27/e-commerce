import { useState } from "react";
import { useSelector } from "react-redux";
import { getDatabase, ref, runTransaction } from "firebase/database";
import products from "../products";

const ShoppingItem = (props) => {  
    const userId = useSelector( state => state.authUser );
    const name = props.nameAndNo[0];
    const [noOfOrders , setNoOfOrders] = useState(props.nameAndNo[1]);
    // get the Img of the product
    let allProducts = {...products.iot,...products.smartPhones};
    let Img = allProducts[name].Img;

    function fireBasePlus( userId , name ) {
        const db = getDatabase();
        const shoppingRef = ref(db, '/users/' + userId + '/shoppingCart/' + name);
        runTransaction(shoppingRef, (name) => {
            if (userId){
                if (name) { name++ }  
                else { name = 1 }
            }
            setNoOfOrders(name);
            return name;
        });
    }

    function fireBaseMinus( userId , name ) {
        const db = getDatabase();
        const shoppingRef = ref(db, '/users/' + userId + '/shoppingCart/' + name);
        runTransaction(shoppingRef, (name) => {
            if (userId){
                if (name) { name-- }  
                if (!name) {name = null}
            }
            setNoOfOrders(name);
            return name;
        });
    }

    return (
        <div className="shoppingProduct">
            <p>{name}</p>
            <img src={Img} alt="product" />
            <p>{noOfOrders}</p>
            <button onClick={()=>fireBasePlus(userId, name)} className="shoppingItemButton">+</button>
            <button onClick={()=>fireBaseMinus(userId, name)} className="shoppingItemButton">-</button>
        </div>
    )

}

export default ShoppingItem;