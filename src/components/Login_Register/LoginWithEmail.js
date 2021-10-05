// css
import './Login.css'
// react
import { useState } from 'react';
import { useHistory } from 'react-router';
// firebase
import { getAuth } from '@firebase/auth';
import { signInWithEmailAndPassword  } from "firebase/auth";
// compnents
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const LoginWithEmail = (props) => {

   const auth = getAuth();
   const history = useHistory();
   const [email , setEmail] = useState('');
   const [password , setPassword] = useState('');
   const [ErrMsg , setErrMsg] = useState(null);

   // Register User with Email and password
   const signIn  = () => { signInWithEmailAndPassword (auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrMsg(errorCode);
      });    
    }

    return (
        <div className='LoginPage'>
            <Header Login={true} Home={true} />
            <div className="signIn">
                <h2 className="LoginH2">Sign In with your Email</h2>

                <input  type="text"
                        placeholder='please enter you email' 
                        value={email} name='email' 
                        onChange={ e => setEmail(e.target.value) } />

                <input  type="password" 
                        placeholder='please enter you password' 
                        value={password} 
                        name='password' 
                        onChange={ e => setPassword(e.target.value) } />

                <button className="LoginButton" onClick={ signIn }>
                    Sign In
                </button>
                <button id="forgotPassword" onClick={ () => history.push("/ForgotPassword")} >
                    forgot password?
                </button>
                {ErrMsg? <p className="err">{ErrMsg.substring(ErrMsg.indexOf('/') + 1)}</p> : undefined}
            </div>
            <Footer/>
        </div>
    );
}
  
export default LoginWithEmail;
