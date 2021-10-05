import { useSelector } from "react-redux"
import { getDatabase, ref, onValue} from "firebase/database";
import { useDispatch } from "react-redux";
import { addShoppingDataAction } from "../../actions/shoppingCart";

const ShoppingCart = (props) => {
    const dispatch = useDispatch();
    const userId = useSelector(state => state.authUser);
    const shoppingData = useSelector(state => state.shoppingData);

    // Listener to write data from Firebase
    const db = getDatabase();
    const shoppingCartRef = ref(db, 'users/' + userId + '/shoppingCart');
        onValue(shoppingCartRef, (snapshot) => {
            const data = snapshot.val();
            dispatch(addShoppingDataAction(data));
        });

    return (
        <div>
            <h1>your shopping cart</h1>
            <p>{userId? userId : undefined}</p>
            <p>{ shoppingData? shoppingData : undefined }</p>
        </div>
    )
}

export default ShoppingCart