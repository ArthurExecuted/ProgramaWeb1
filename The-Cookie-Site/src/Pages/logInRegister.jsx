import '../main.css'
import React, {useState} from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../src/firebase'
import AuthDetails from '../components/AuthDetails';
import { Navigate, useNavigate } from 'react-router-dom';

function Register() {
      const [name, setName] = useState('');
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const [password2, setPassword2] = useState('');

      const signIn = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password, name)
        .catch((error) => {
          alert(error);
        })
      }

    return (
      <div className='register'>
        <form onSubmit={signIn}>
        <h2 id='textRegister'>REGISTRAR</h2>
          <input type='text' id='usernameInputR' placeholder='Nome de Usuário' 
          value={name} onChange={(e) => setName(e.target.value)}/><br/>
          <input type='email' id='emailInputR' placeholder='Email' 
          value={email} onChange={(e) => setEmail(e.target.value)}/><br/>
          <input type='password' id='PWInputR' placeholder='Senha' 
          value={password} onChange={(e) => setPassword(e.target.value)}/><br/>
          <input type='password' id='PWInputAgainR' placeholder='Senha de novo' 
          value={password2} onChange={(e) => setPassword2(e.target.value)}/>
          <button id="sendRegister" type='submit'>Registrar!</button>
          </form>
      </div>
    )
  }
  
  function LogIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const logIn = (e) => {
      e.preventDefault();
      signInWithEmailAndPassword(auth, email, password)
      .catch((error) => {
        alert(error);
      })
      navigate('/Cookie')
    }

  return (
    <div className='register'>
      <form onSubmit={logIn}>
      <h2 id='textRegister'>LOG IN</h2>
        <input type='email' id='emailInputLI' placeholder='Email' 
        value={email} onChange={(e) => setEmail(e.target.value)}/><br/>
        <input type='password' id='PWInputLI' placeholder='Senha' 
        value={password} onChange={(e) => setPassword(e.target.value)}/>
        <button id="sendLogIn" type='submit'>Logar!</button>
        </form>
    </div>
  )
  }
  
export default function LogInRegister() {
    return (
      <body className='bodyLogIn'>
        <div className='InputForm'>
            <div className='logInRegister'>
                <Register />
                <LogIn />
                <AuthDetails/>
            </div>
        </div>
      </body>
    );
}