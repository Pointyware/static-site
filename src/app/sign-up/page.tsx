
import styles from '@/app/page.module.css'

export interface SignUpProps {

}

export default function SignUpPage(props: SignUpProps) {

  return (
    <main className={styles.main}>
      <SignUpForm />
    </main>
  )
}

function SignUpForm() {
  return (
    <div>
      <form className={styles.loginForm} name='form-sign-up'>
        <label htmlFor='username'>Username</label>
        <input name='username' required type='text' autoComplete='username'>
        </input>
        
        <label htmlFor='password'>Password</label>
        <input name='password' required type='password' autoComplete='new-password'>
        </input>
        
        <label htmlFor='password-confirm'>Confirm Password</label>
        <input name='password-confirm' required type='password' autoComplete='new-password'>
        </input>
        
        <label htmlFor='name'>Name</label>
        <input name='name' type='text' autoComplete='name'>
        </input>

        <label htmlFor='email'>Email</label>
        <input name='email' type='text' autoComplete='email'>
        </input>

        <button>Submit</button>
      </form>
      <a href='/login' className={styles.signUp}>I have an account</a>
    </div>
  )
}
