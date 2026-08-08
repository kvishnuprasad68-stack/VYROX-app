# VYROX App

Minimal Next.js app with Vercel Analytics integrated.

How to run locally

1. Install dependencies

```bash
npm install
```

2. Run the dev server

```bash
npm run dev
```

3. Build

```bash
npm run build
npm run start
```

Health check

- GET /api/health — returns { status: 'ok', uptime: <seconds> }

Notes

- Analytics is integrated in `pages/_app.js` via `@vercel/analytics/react`.
- Deployment is configured via `vercel.json`.
