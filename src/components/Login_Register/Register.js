// css
import './Login.css'
// react
import { useState } from 'react';
import { useHistory } from 'react-router';
// firebase
import { getAuth } from '@firebase/auth';
import { createUserWithEmailAndPassword } from "firebase/auth";
// compnents
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Register = (props) => {   
    const history = useHistory(); 
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [confirmPassword , setConfirmedPassword] = useState('');
    const [Msg , setMsg] = useState(null);
    const [msgColor, setMsgColor] = useState('black');
    const auth = getAuth();

    // check before Register 
    // you can add more check to decrease the load on the server of FireBase
    const check = () => {
        if(password === confirmPassword){return true}
        else{return false}
    }
    // Register User with Email and password
    const createUserWithEmail = () => {
    if(check()){
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            setMsgColor('green');
            setMsg('Registered sucessfuly!');
            history.push('/');
            return user;
        })
        .catch((error) => {
            const errorCode = error.code;
            setMsgColor('red');
            setMsg(errorCode);
        });
        }
    else{
        setMsgColor('red');
        setMsg('check the password again')}  
    }
    
    return (
        <div className='LoginPage'>
            <Header/>
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

                <input  type="password" 
                        placeholder='please confirm you password' 
                        value={confirmPassword} 
                        name='password' 
                        onChange={ e => setConfirmedPassword(e.target.value) } />        

                <button className="LoginButton" onClick={ ()=> createUserWithEmail(auth, email, password) }>
                    Register
                </button>
                {Msg? <p style={{color:msgColor}}>{Msg.substring(Msg.indexOf('/') + 1)}</p> : undefined}
            </div>
            <Footer/>
        </div>
    );
}
  
export default Register;
