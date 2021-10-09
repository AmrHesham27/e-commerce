import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getDatabase, ref, runTransaction, get, child  } from "firebase/database";

const ShoppingItem = (props) => {  
    const userId = useSelector( state => state.authUser );
    const [Img, setImg] = useState(undefined);
    const name = props.nameAndNo[0];
    const [noOfOrders , setNoOfOrders] = useState(props.nameAndNo[1]);

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

    useEffect(
        ()=>{
            let mounted = true;
            const dbRef = ref(getDatabase());
            const ImgFireBase = () => { get(child(dbRef, `Images/${name}`)).then((snapshot) => {
                if (snapshot.exists()) {
                  setImg(snapshot.val());
                } else {
                  console.log("no photo");
                }
            }).catch((error) => {
                console.error(error);
            });
            }
            if(mounted){ ImgFireBase(); ;}
            return () => {mounted = false}
        }
    );

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