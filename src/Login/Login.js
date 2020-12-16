import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import "./Login.styled.css";
import {auth} from '../firebase';

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = e => {
    e.preventDefault();

    // firbase
    auth.signInWithEmailAndPassword(email, password)
    .then(auth => {
      history.push('/')
    })
    .catch(error => alert(error))  
  }

  const register = e => {
    e.preventDefault();

  
    //  firebase register
   auth.createUserWithEmailAndPassword(email, password)
   .then((auth) => {
     console.log(auth)
     if(auth) {
       history.push('/')
     }
   })
   .catch(error => alert(error))  
  }


  return (
    <div className='login'>
      <Link to='/'>
        <div className='login__logo'/>
      </Link>
      
      

      <div className='login__container'>
        <h2>Sign-in</h2>

        <form className='login__form'>
          <div className='login__row'>
            <label>Email</label>
            <input type="text" maxlength="128" value={email} onChange={e => setEmail(e.target.value)} />
          </div>

          <div className='login__row'>
            <label>Password</label>
            <input type="password" maxlength="128" value={password} onChange={e => setPassword(e.target.value)} />
          </div>

          <button type='submit' className='btn btn__create' onClick={signIn}>Sign-in</button>
        </form>

        <p className='login__text'>
          By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
        </p>

        <div className='divider-break'>
          <h5 >New to Amazon?</h5>
        </div>
        
        <button className='btn' role='button' onClick={register}>Create your Amazon account</button>
      </div>
    </div>
  )
}

export default Login
