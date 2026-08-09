import Link from 'next/link'

export default function Header() {
  return (
    <header style={{ padding: '1rem', borderBottom: '1px solid #eaeaea' }}>
      <nav>
        <Link href="/">
          <a style={{ marginRight: 16, textDecoration: 'none', color: 'inherit' }}>Home</a>
        </Link>
        <Link href="/about">
          <a style={{ marginRight: 16, textDecoration: 'none', color: 'inherit' }}>About</a>
        </Link>
        <Link href="/dashboard">
          <a style={{ textDecoration: 'none', color: 'inherit' }}>Dashboard</a>
        </Link>
      </nav>
    </header>
  )
}
