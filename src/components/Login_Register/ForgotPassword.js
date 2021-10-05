// css
import './Login.css'
// react
import { useState } from 'react';
// firebase
import { getAuth , sendPasswordResetEmail } from '@firebase/auth';
// compnents
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const ForgotPassword = (props) => {

   const auth = getAuth();

   const [email , setEmail] = useState('');
   const [ErrMsg , setErrMsg] = useState(null);
   const [SucessMsg , setSucessMsg] = useState(null);

   // Register User with Email and password
   const sendResetEmail  = () => { sendPasswordResetEmail(auth, email)
    .then(() => {
      // Password reset email sent!
      setSucessMsg("Reset Email was sent!");
      setErrMsg(null);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setErrMsg(errorCode);
      setSucessMsg(null);
    });
    }
    return (
        <div className='LoginPage'>
            <Header Login={true} Home={true} />
            <div className="signIn">
                <h2 className="LoginH2">Please enter your Email</h2>

                <input  type="text"
                        placeholder='please enter you email' 
                        value={email} name='email' 
                        onChange={ e => setEmail(e.target.value) } />

                <button className="LoginButton" onClick={ sendResetEmail }>
                    Send reset Email
                </button>
                {ErrMsg? <p className="err">{ErrMsg.substring(ErrMsg.indexOf('/') + 1)}</p> : undefined}
                {SucessMsg? <p className="success">{SucessMsg}</p> : undefined}
            </div>
            <Footer/>
        </div>
    );
}
  
export default ForgotPassword;