import { useEffect, useState } from "react";
import { getDatabase, ref, get, child } from "firebase/database";

const ShoppingItem = (props) => {
    const productName = props.nameAndNo[0];
    const noOfOrders = props.nameAndNo[1];

    const [Img, setImg] = useState(undefined);

    const dbRef = ref(getDatabase());
    const ImgFireBase = () => { get(child(dbRef, `Images/${productName}`)).then((snapshot) => {
        if (snapshot.exists()) {
          setImg(snapshot.val());
        } else {
          console.log("no shopping data");
        }
    }).catch((error) => {
        console.error(error);
    });
    }

    useEffect(
        ()=>{
            let mounted = true;
            if(mounted){ ImgFireBase(); ;}
            return () => {mounted = false}
        },[]
    );

  
    return (
        <div className="shoppingProduct">
            <p>{productName}</p>
            <img src={Img} alt="product" />
            <p>{noOfOrders}</p>
        </div>
    )

}

export default ShoppingItem;