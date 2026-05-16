'use client';

export default function Header() {

  return (
    <header>
      <a href='/'>
        <div>
          <h1 aria-label='Title'>Pointyware</h1>
          <p>Software with a Point</p>
        </div>
      </a>
      <a href='/login'>
        <div>
          {/* Account Icon */}
          <h2>User</h2>
          <p>User Account</p>
        </div>
      </a>
    </header>
  )
}
