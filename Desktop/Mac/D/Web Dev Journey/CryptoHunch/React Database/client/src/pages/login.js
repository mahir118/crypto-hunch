import logo from './logo.svg';
import React, { useEffect, useState } from "react";

function App() {
  const [email, setEmail] = useState ('')
  const [password, setPassword] = useState ('')

  async function loginUser(event) {
    event.preventDefault();
    const response = await fetch ('http://localhost:1337/api/login', {
      method: 'POST',
      headers: {
        'Content-type' : 'application/json',
      },
      body: JSON.stringify ({
        email,
        password
      })
    })

    const data = await response.json()
    console.log(data)
  }

  return <div>
    <h1>Log-In</h1>
    <form onSubmit ={loginUser}>
      <input 
       value = {email}
       onChange = {(e) => setEmail(e.target.value)}
       type = "email" 
       placeholder = "Email Address"/> 
      <br/>
      <input  
        value = {password}
        onChange = {(e) => setPassword(e.target.value)}
        type = "password" 
        placeholder = "Password"/>
      <br/>
      <input type="submit" value = "register" />
    </form>
  </div>
}

export default App;
