import './Header.css'
import { Link } from 'react-router-dom';

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

    // in return() you have to add props.children to add elements indside the component like buttons 
    return (
        <div className='header'>
          <p className='OPPO'>OPPO</p>
          {!userId ? <Link className="nav-link headerLogin" to="/Register" >Register</Link> : undefined}
          {!userId ? <Link className="nav-link headerLogin"  to="/Login" >Login</Link> : undefined}
          {userId ? <button className="nav-link headerLogin"  onClick={LogUserOut} id='logOut'>Log out</button> : undefined}
          <Link className="nav-link"  to="/" >Home</Link>
          {userId ? <Link className="nav-link"  to="/ShoppingCart" >ShoppingCart</Link> : undefined}

          {props.children}
        </div>
    );
}
  
export default Header;