import { useSelector } from "react-redux"
import { getDatabase, ref, get, child } from "firebase/database";
import ShoppingItem from "./shoppingItem";
import { useEffect, useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./shoppingCart.css"

const ShoppingCart = (props) => {
    const userId = useSelector(state => state.authUser);
    const [shoppingItems, setShoppingItems] = useState(undefined)

    // Listener to write data from Firebase
    const dbRef = ref(getDatabase());
    const shoppingDataFirebase = () => { get(child(dbRef, `users/${userId}/shoppingCart`)).then((snapshot) => {
        if (snapshot.exists()) {
          setShoppingItems(snapshot.val());
        } else {
          console.log("no shopping data");
        }
    }).catch((error) => {
        console.error(error);
    });
    }

    // 
    useEffect(
        () => {
            let mounted = true;
            if (mounted){ shoppingDataFirebase(); }
            return ()=>{mounted = false};
        },[userId]
    );


    return (
        <div className="shoppingContainer">
            <Header/>
            <div className="shoppingWrap">
                {shoppingItems ? Object.entries(shoppingItems).map( (i) => { return (<ShoppingItem nameAndNo={i} key={i[0]} />) }) : undefined}
            </div>
            <Footer/>
        </div>
    )
}

export default ShoppingCart