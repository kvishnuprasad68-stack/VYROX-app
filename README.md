# VYROX App - Prototype

This repository contains a minimal Next.js prototype app for personal use.

Features
- Pages router (Next.js)
- Mock login (client-side, localStorage)
- Dashboard that fetches sample data from /api/data
- Health endpoint at /api/health
- Vercel Analytics integrated in pages/_app.js

Run locally

1. Install

```bash
npm install
```

2. Dev

```bash
npm run dev
```

3. Build

```bash
npm run build
npm run start
```

Health check

GET /api/health

API

GET /api/data — returns sample items

Notes

This is a lightweight prototype. If you want authentication, database, or Supabase integration next, tell me and I will add it.
