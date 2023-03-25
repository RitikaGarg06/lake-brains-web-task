
import './App.css';

import { useState } from 'react';

function App() {

  const [login, setLogin] = useState("")
  const [password, setPassword] = useState("")

  const [allEntry, setAllEntry] = useState([])
  const submitForm = (e) => {
    e.preventDefault();
    const newEntry = { Login: login, Password: password }
    setAllEntry([...allEntry, newEntry])
    console.log(allEntry);
    alert(`email:${login}\npassword:${password}`)
  }
  return (
    <>
      <div className='fullpg'>
        {/* <img src="Vectors.png" className='bgsvg'/> */}
        <div className='signIn'>Sign in</div>
        <div className='candidates'>Sign in and start managing your candidates</div>

        <form onSubmit={submitForm} >
          <div className='logInform'>
            <input type="text" id="login" placeholder="Login" value={login} onChange={(e) => setLogin(e.target.value)} /><br />
            <input type="password" id="pass" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} /><br />
            <div className='rememberRows'>
              <input type='checkbox' id='' ></input>
              <label htmlFor="remember" id="rememberCheckbox">Remember password</label>
              <a href='#'>
                <span id='forgot'>forgot password?</span>
              </a>
            </div>
            <button type="submit" id='button'>Log in</button>
          </div>
        </form>
      
      </div>
      
    </>
  );
}

export default App;
