# ForestDine

Homestays and forest dining, booked directly from the people who host them.

ForestDine connects travelers with small eco-homestays and farm-to-table dining experiences in forest and hill regions — without a hotel chain in between.

## Tech Stack

- **Frontend:** Next.js (App Router) + TypeScript
- **Styling:** Tailwind CSS
- **Backend:** Coming soon
- **Database:** Coming soon
- **Auth:** Coming soon
- **Deployment:** Vercel (planned)

## Project Structure

```
src/
  app/             # routes (Home, About, Dashboard, Login)
  components/      # Navbar, Hero, Card, Footer, CanopyDivider
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Setup — coming soon

Backend, database, and authentication setup instructions will be added once those layers are built in upcoming weeks.

## How to run backend locally

```bash
cd backend
npm install
cp .env.example .env
npm run dev
```

API runs on `http://localhost:5000`. Endpoints:

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/health | Health check |
| GET | /api/stays | List all stays |
| GET | /api/stays/:id | Get single stay |
| GET | /api/stays/search?q= | Search stays |
| POST | /api/stays | Create a stay |
| PUT | /api/stays/:id | Update a stay |
| DELETE | /api/stays/:id | Delete a stay |
| GET | /api/bookings | List all bookings |
| POST | /api/bookings | Create a booking |
| PATCH | /api/bookings/:id/status | Update booking status |
