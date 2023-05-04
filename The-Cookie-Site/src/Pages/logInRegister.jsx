import '../main.css'

function Register() {
    return (
      <div className='register'>
        <h2 id='textRegister'>REGISTRAR</h2>
          <input type='text' id='usernameInputR' placeholder='Nome de Usuário'/><br/>
          <input type='email' id='emailInputR' placeholder='Email'/><br/>
          <input type='password' id='PWInputR' placeholder='Senha'/><br/>
          <input type='password' id='PWInputAgainR' placeholder='Senha de novo'/><button id="sendRegister">Registrar!</button>
      </div>
    )
  }
  
  function LogIn() {
    return (
      <div className='logIn'>
        <h2 id='textLogIn'>LOG IN</h2>
          <input type='email' id='emailInputLI' placeholder='Email'/><br/>
          <input type='password' id='PWInputLI' placeholder='Senha'/><button id="sendLogIn">Logar!</button>
      </div>
    )
  }
  
  function Google() {
    return (
      <div className='google'>
        <button id='googleBtn'>
          <div id='googleBtnList'>
            <img src='public/img/_73289301.jpg' id='googleImg'/>
            <text id='googleText'> Sign in with Google</text>
          </div>
        </button>
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
                <Google />
            </div>
        </div>
      </body>
    );
}