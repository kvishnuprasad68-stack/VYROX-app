import { useEffect, useState } from 'react'
import { getUser, logout } from '../lib/auth'

export default function Dashboard() {
  const [user, setUser] = useState(null)
  const [items, setItems] = useState([])

  useEffect(() => {
    setUser(getUser())
    fetch('/api/data')
      .then((r) => r.json())
      .then((d) => setItems(d.items))
  }, [])

  if (!user) {
    return (
      <main style={{ padding: '4rem', fontFamily: 'system-ui, sans-serif' }}>
        <h1>Dashboard</h1>
        <p>You must be logged in to view the dashboard.</p>
        <a href="/login">Go to Login</a>
      </main>
    )
  }

  return (
    <main style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>Dashboard</h1>
        <div>
          <span style={{ marginRight: 12 }}>Signed in as {user}</span>
          <button onClick={() => { logout(); window.location.href = '/' }}>Sign out</button>
        </div>
      </div>

      <section style={{ marginTop: 20 }}>
        <h2>Sample items</h2>
        <ul>
          {items.map((it) => (
            <li key={it.id} style={{ padding: 8, borderBottom: '1px solid #eee' }}>
              <strong>{it.title}</strong>
              <div style={{ color: '#666' }}>{it.description}</div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}
