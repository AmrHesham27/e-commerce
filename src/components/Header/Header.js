import './Header.css'
import { Link } from 'react-router-dom';

// redux
import { useDispatch } from 'react-redux';
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

    // in return() you have to add props.children to add elements indside the component like buttons 
    return (
        <div className='header'>
          <p className='OPPO'>OPPO</p>
          {props.Register ? <Link to="/Register" >Register</Link> : undefined}
          {props.Login ? <Link to="/Login" >Login</Link> : undefined}
          {props.LogOut ? <button onClick={LogUserOut} className='NavLink' id='logOut'>Log out</button> : undefined}
          {props.Home ? <Link to="/" >Home</Link> : undefined}

          <Link to="/ShowProduct" >ShowProduct</Link> 
          <Link to="/ShoppingCart" >ShoppingCart</Link>

          {props.children}
        </div>
    );
}
  
export default Header;