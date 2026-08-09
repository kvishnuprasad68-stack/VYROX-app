import { useState } from 'react'
import { login } from '../lib/auth'

export default function Login() {
  const [email, setEmail] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if (!email) return alert('Enter an email')
    login(email)
    window.location.href = '/dashboard'
  }

  return (
    <main style={{ padding: '4rem', fontFamily: 'system-ui, sans-serif' }}>
      <h1>Login (mock)</h1>
      <form onSubmit={handleSubmit} style={{ maxWidth: 400 }}>
        <label style={{ display: 'block', marginBottom: 8 }}>Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          style={{ width: '100%', padding: 8, marginBottom: 12 }}
        />
        <button type="submit">Sign in</button>
      </form>
    </main>
  )
}
