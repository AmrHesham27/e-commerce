// css
import './Login.css'
// React
import React from "react";
import { useHistory } from "react-router";
// compnents
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
// firebase
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const Login = props => {

    const history = useHistory();
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    const sigInWithGoogle = () => {signInWithPopup(auth, provider)
    .then((result) => {
        //const user = result.user;
        history.push('/');
    }).catch((error) => {
        // in case needed
        //const errorCode = error.code;
        //const errorMessage = error.message;
        //const email = error.email;
    });
    }

    return (
        <div className='LoginPage'>
            <Header/>
            <div className="signIn">
                <h2 className='LoginH2'>Login</h2>
                <button className="LoginButton" onClick={ sigInWithGoogle }>
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