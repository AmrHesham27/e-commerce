// React and Css
import { Link } from 'react-router-dom';
import "./Header.scss";
import { useHistory } from 'react-router';

// redux
import { useSelector } from 'react-redux';

// firebase
import { logOut } from '../../firebase/utils';

const Header = (props) => {
    const history = useHistory();
    // LogOut function
    const LogUserOut = () => {
    logOut();
    localStorage.setItem('user',undefined);
    history.push('/');
    }

    // is user logged in ? 
    const userId = useSelector(state => state.authUser);
     
    // in return() you have to add props.children to add elements indside the component (like buttons) in other compnents files
    // check Home component 
    return (
        <div className="myHeader">

          <div>
            <Link className="navLink"  to="/" >Home</Link>
            {userId ? <Link className="navLink"  to="/ShoppingCart" >ShoppingCart</Link> : undefined}
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