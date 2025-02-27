# Computer Repair Shop

A Next.js application for managing computer repair services.

## Overview

This application helps manage computer repair tickets, customers, and technician assignments.

## Features

- Customer management and search
- Ticket creation and tracking
- Technician assignment (manager access)
- Status tracking for repair tickets

## Tech Stack

- 🔗 [Next.js](https://nextjs.org/)
- 🔗 [React](https://reactjs.org/)
- 🔗 [TypeScript](https://www.typescriptlang.org/)
- 🔗 [TailwindCSS](https://tailwindcss.com/)
- 🔗 [ShadCN/ui](https://ui.shadcn.com/)
- 🔗 [Sentry](https://sentry.io/)
- 🔗 [Kinde Auth](https://kinde.com/)
- 🔗 [Neon Postgres](https://neon.tech/)
- 🔗 [Drizzle ORM](https://orm.drizzle.team/)
- 🔗 [react-hook-form](https://react-hook-form.com/)
- 🔗 [Zod](https://zod.dev/)
- 🔗 [next-safe-action](https://next-safe-action.dev/)
- 🔗 [TanStack Table](https://tanstack.com/table/v8)
- 🔗 [Vercel](https://vercel.com/)

## Installation and Setup

1. Clone the repository

   ```bash
   git clone https://github.com/mr-kasper/repairShop.git
   cd repairshop
   ```

2. Install dependencies

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. Set up environment variables

   - Create a `.env.local` file in the root directory
   - See the [Environment Variables](#environment-variables) section for required variables

4. Set up the database

   ```bash
   npm run db:push
   # or
   yarn db:push
   ```

5. Start the development server
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

## Environment Variables

Create a `.env.local` file with the following variables:

```
SENTRY_AUTH_TOKEN=

KINDE_CLIENT_ID=
KINDE_CLIENT_SECRET=
KINDE_ISSUER_URL=
KINDE_SITE_URL=http://localhost:3000
KINDE_POST_LOGOUT_REDIRECT_URL=http://localhost:3000
KINDE_POST_LOGIN_REDIRECT_URL=http://localhost:3000/tickets

DATABASE_URL=

KINDE_DOMAIN=
KINDE_MANAGEMENT_CLIENT_ID=
KINDE_MANAGEMENT_CLIENT_SECRET=
```

## Development Workflow

- **Database Changes**: Use Drizzle to manage schema changes

  ```bash
  npm run db:generate
  npm run db:push
  ```

- **Testing**: Run tests with
  ```bash
  npm run test
  ```

## Deployment

Visit our live application at [Repair Shop](https://repair-shop-eight.vercel.app/)
