// css
import './Login.css'
// react
import { useState } from 'react';
// firebase
import { getAuth } from '@firebase/auth';
import { createUserWithEmailAndPassword } from "firebase/auth";
// compnents
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Register = (props) => {    
   const [email , setEmail] = useState('');
   const [password , setPassword] = useState('');
   const [ErrMsg , setErrMsg] = useState(null);
   const auth = getAuth();

   const handlePassword = (e) => {
       setPassword(e.target.value);
   }
   // Register User with Email and password
   const createUserWithEmail = () => { createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      return user;
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
                <h2 className="LoginH2">Register</h2>

                <input  type="text"
                        placeholder='please enter you email' 
                        value={email} name='email' 
                        onChange={ e => setEmail(e.target.value) } />

                <input  type="password" 
                        placeholder='please enter you password' 
                        value={password} 
                        name='password' 
                        onChange={ e => setPassword(e.target.value) } />

                <button className="LoginButton" onClick={ ()=> createUserWithEmail(auth, email, password) }>
                    Register
                </button>
                {ErrMsg? <p className="err">{ErrMsg.substring(ErrMsg.indexOf('/') + 1)}</p> : undefined}
            </div>
            <Footer/>
        </div>
    );
}
  
export default Register;
