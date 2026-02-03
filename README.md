# Steam Boiler Room

A web application that helps Steam users discover game bundles containing games they want. Search for games, view your Steam library, and find the best bundle deals.

**Live site:** [steamboilerroom.com](https://steamboilerroom.com/)

## Tech Stack

- **Framework:** Next.js 16 with TypeScript
- **Database:** PostgreSQL with Prisma ORM
- **API:** GraphQL (Apollo Server)
- **Auth:** NextAuth.js with Steam and Twitch OAuth
- **UI:** Material-UI (MUI)
- **Hosting:** Vercel
- **Database Hosting:** Neon

## Prerequisites

- Node.js 18+
- PostgreSQL database (Neon recommended)
- Steam API key
- Twitch OAuth credentials (optional, for premium features)

## Environment Variables

Create a `.env` file in the root directory. See `.env.example` for the template.

| Variable | Description | Required |
|----------|-------------|----------|
| `DATABASE_URL` | PostgreSQL connection string (pooled) | Yes |
| `DIRECT_URL` | PostgreSQL direct connection (for migrations) | Yes |
| `NEXTAUTH_URL` | Your app URL (e.g., `https://steamboilerroom.com`) | Yes |
| `NEXTAUTH_SECRET` | Random secret for NextAuth sessions | Yes |
| `STEAM_API_KEY` | Steam Web API key | Yes |
| `TWITCH_CLIENT_ID` | Twitch OAuth client ID | Optional |
| `TWITCH_CLIENT_SECRET` | Twitch OAuth client secret | Optional |
| `TWITCH_CHANNEL_ID` | Your Twitch channel ID | Optional |

### Getting API Keys

- **Steam API Key:** [Steam Web API Key](https://steamcommunity.com/dev/apikey)
- **Twitch Credentials:** [Twitch Developer Console](https://dev.twitch.tv/console)
- **NextAuth Secret:** Generate with `openssl rand -base64 32`

## Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/steam-boiler-room.git
   cd steam-boiler-room
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your credentials
   ```

4. **Set up the database**
   ```bash
   npx prisma migrate dev
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000)

## Deployment

### Database Setup (Neon)

1. Create a free account at [neon.tech](https://neon.tech)

2. Create a new project and database

3. Get your connection strings from the Neon dashboard:
   - **Pooled connection** (for `DATABASE_URL`): `postgresql://user:pass@ep-xxx.region.aws.neon.tech/dbname?sslmode=require`
   - **Direct connection** (for `DIRECT_URL`): `postgresql://user:pass@ep-xxx.region.aws.neon.tech/dbname?sslmode=require` (use the non-pooled endpoint)

### Vercel Deployment

1. **Connect to Vercel**
   - Push your code to GitHub
   - Import the repository in [Vercel](https://vercel.com)

2. **Add Environment Variables**
   In Vercel project settings, add all environment variables from the table above.

3. **Neon Integration (Recommended)**
   - In Vercel, go to your project > Storage > Connect Database
   - Select Neon and follow the prompts
   - This automatically configures `DATABASE_URL` and `DIRECT_URL`

4. **Deploy**
   - Vercel will automatically build and deploy on push
   - Build command: `prisma generate && prisma migrate deploy && next build`

### Database Migrations

Migrations run automatically during the build process. To run manually:

```bash
# Development (creates migration files)
npx prisma migrate dev

# Production (applies pending migrations)
npx prisma migrate deploy
```

## Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run codegen` | Generate GraphQL types |
| `npm run prisma:studio` | Open Prisma Studio |
| `npm run prisma:migrate` | Run database migrations (dev) |

## Project Structure

```
├── components/      # React components
├── graphql/         # GraphQL schema and resolvers
├── pages/           # Next.js pages and API routes
│   ├── api/         # API endpoints (auth, graphql)
│   └── ...          # Page routes
├── prisma/          # Database schema and migrations
├── utils/           # Utility functions
└── generated/       # Auto-generated types
```

## Features

- **Bundle Search:** Find Steam bundles containing specific games
- **Library Import:** Import your Steam library to see which bundles have games you don't own
- **Friend Comparison:** Compare libraries with Steam friends to find shared games
- **Twitch Integration:** Premium features for Twitch subscribers
