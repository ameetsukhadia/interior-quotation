# Interior Quotation — Project Skeleton
A Next.js + TypeScript scaffold for an interior quotation app.

## Quick Start
```bash
npm install
npm run dev
# open http://localhost:3000
```

## Env Vars
Copy `.env.local.example` to `.env.local` and fill your Supabase values.

## Routes
Public: `/`, `/login`
Customer: `/dashboard`, `/quotes`, `/quote/new`, `/quote/[id]`, `/quote/preview`
Admin: `/admin`, `/admin/products`, `/admin/tiers`, `/admin/quotes`, `/admin/customers`, `/admin/settings`

## Deploy
Push to GitHub → Import to Vercel → add env vars → deploy.

## 🚀 Setup Checklist for Supabase & RLS
1) Create Supabase project and add env keys.
2) Run migrations in `supabase/migrations`: 001, 002, 003.
3) Seed check: `material_tiers` and `settings` have rows.
4) Create two users; set one to `admin` in `users` table to test roles.
5) Run the app and verify route protections.

## Placeholder Middleware (dev only)
Set cookies to simulate auth:
- `session=1`
- `role=admin` (for admin access)


---
## Dev cookies for middleware
Set in browser devtools: `session=1`, `role=admin` (for admin access). Replace with real Supabase auth soon.


---
### CI
This repo includes a GitHub Actions workflow (`.github/workflows/ci.yml`) that installs dependencies and builds the app on every push and pull request.


---
## Vercel Config
This repo includes a `vercel.json`:
- Sets Node.js 20 for API routes
- Targets regions **bom1** (Mumbai) and **sin1** (Singapore) for lower latency in India
- Adds long-term caching headers for static assets

> You can change regions later in `vercel.json` or via the Vercel dashboard.
