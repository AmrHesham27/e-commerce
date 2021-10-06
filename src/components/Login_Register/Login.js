// css
import './Login.css'
// React
import React, { useEffect } from "react";
import { useHistory } from "react-router";
// compnents
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
// redux
import { useSelector } from "react-redux";
// firebase
import { signInWithGoogle } from '../../firebase/utils'

const Login = props => {

    const history = useHistory();
    const authUser = useSelector(state => state.authUser);

    // if user is logged in , go to home page
    useEffect(
        ()=>{
            if (authUser)
            {history.push('/')}}
        ,[authUser]
    );
    
    return (
        <div className='LoginPage'>
            <Header/>
            <div className="signIn">
                <h2 className='LoginH2'>Login</h2>
                <button className="LoginButton" onClick={ signInWithGoogle }>
                    Sign In with Google
                </button>
                <button className="LoginButton" onClick={ () => history.push('/LoginWithEmail') }>
                    Sign In with Email
                </button>
            </div>
            <Footer/>
        </div>
    )
}

export default Login