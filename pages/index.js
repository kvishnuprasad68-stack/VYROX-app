export default function Home() {
  return (
    <main style={{ padding: '4rem', fontFamily: 'system-ui, sans-serif' }}>
      <h1>VYROX App</h1>
      <p>Minimal Next.js app for deployment and analytics smoke test.</p>
      <p>
        This prototype includes a mock login, a dashboard that fetches sample data
        from /api/data, and a health endpoint at /api/health.
      </p>
    </main>
  )
}
