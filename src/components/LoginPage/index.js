// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react'
import './index.css'

function LoginPage({onLogin}) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    if (username && password) {
      onLogin()
    } else {
      setErrorMessage('*Please enter username and password')
    }
  }

  return (
    <div className="login-page">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <div className="button-container">
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  )
}

export default LoginPage
