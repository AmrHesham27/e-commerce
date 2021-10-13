import { Link } from 'react-router-dom';
import "./Header.scss";

// redux
import { useDispatch, useSelector } from 'react-redux';
import { addUserAction } from '../../actions/authUser'

// firebase
import { logOut } from '../../firebase/utils';

const Header = (props) => {

    const dispatch = useDispatch();
    // LogOut function
    const LogUserOut = () => {
    logOut();
    dispatch (addUserAction(null));
    }

    // is user logged in ? 
    const userId = useSelector(state => state.authUser); 

    // in return() you have to add props.children to add elements indside the component (like buttons) in other compnents files
    // check Home component 
    return (
        <div className="Header">

          <div>
            <Link className="nav-link"  to="/" >Home</Link>
            {userId ? <Link className="nav-link"  to="/ShoppingCart" >ShoppingCart</Link> : undefined}
            {props.children}
          </div>

          <div>
            {!userId ? <Link className="loginButton" to="/Register" >Register</Link> : undefined}
            {!userId ? <Link className="loginButton"  to="/Login" >Login</Link> : undefined}
            {userId ? <button className="loginButton"  onClick={LogUserOut}>Log out</button> : undefined}
          </div>

        </div>
        );
}
  
export default Header;