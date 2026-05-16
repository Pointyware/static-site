'use client'

import { useState, type Dispatch, type SetStateAction } from "react"
import styles from '@/app/page.module.css'

const TEST_AUTH_SERVER = 'http://Taushs-Mac-Studio.local:3001'
const PROD_AUTH_SERVER = 'https://api.pointyware.org'
const TEST_SOCIAL_SERVER = 'http://Taushs-Mac-Studio.local:3002'
const PROD_SOCIAL_SERVER = 'https://api.pointyware.org'

type LoginFormProps = {
  username: string
  password: string
  confirmPass: string
  setUsername: Dispatch<SetStateAction<string>>
  setPassword: Dispatch<SetStateAction<string>>
  setConfirmPass: Dispatch<SetStateAction<string>>

  onLogin: (username:string,password:string)=>void
  onCreateUser: (username:string,password:string,confirm:string)=>void
}

type LoginPageProps = {
  onLogin: (username:string,password:string)=>void
  onCreateUser: (username:string,password:string,confirm:string)=>void
}

export default function LoginPage({ onLogin, onCreateUser }:LoginPageProps) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPass, setConfirmPass] = useState('')

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <LoginForm username={username} setUsername={setUsername} 
          password={password} setPassword={setPassword} 
          confirmPass={confirmPass} setConfirmPass={setConfirmPass}
          onLogin={onLogin} onCreateUser={onCreateUser} />
      </main>
    </div>
  )
}

function LoginForm(props: LoginFormProps) {
  const [showPassword, setShowPassword] = useState(false)
  const [newUser, setNewUser] = useState(false)

  return (
    <form className={styles.loginForm} name='login-form' action={TEST_AUTH_SERVER + '/login'} method='post'>
      <label>
        Username: <input 
        type='text' 
        required 
        name='username'
        value={props.username} 
        onChange={(e)=>props.setUsername(e.target.value)}></input>
      </label>
      <span>
        <label>
          Password: <input 
            type={ showPassword ? 'text' : 'password' } 
            required autoComplete='new-password' 
            name='password'
            value={props.password} 
            onChange={(e)=>props.setPassword(e.target.value)}
            placeholder="Enter Your Password"></input>
        </label>
        <button type='button' onClick={()=>setShowPassword(!showPassword)}>
          { showPassword ? 'Hide' : 'Show' }
        </button>
      </span>
      { newUser ? 
        <label>
          Confirm Password: <input 
            type={ showPassword ? 'text' : 'password' } 
            required autoComplete='new-password'
            value={props.confirmPass} 
            onChange={(e)=>props.setConfirmPass(e.target.value)}
            placeholder="Confirm Your Password"></input>
        </label>
        : '' }
      <button type='button' onClick={()=>setNewUser(!newUser)}>
        { newUser ? 'Existing User' : 'New User' }
      </button>
      <button>Submit</button>
    </form>
  )
}
