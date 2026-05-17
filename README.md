# Faceless Studio AI

Production-ready architecture and starter codebase for an end-to-end YouTube faceless automation platform.

## Stack
- Next.js 15 + TypeScript + Tailwind + Framer Motion
- Auth.js (email/password + Google)
- PostgreSQL + Prisma
- Redis + BullMQ queues
- Node API + Python rendering/AI microservices
- FFmpeg + Remotion rendering pipeline
- OpenAI GPT-5 for script/strategy generation

## Monorepo layout
- `apps/web`: Frontend + BFF APIs
- `services/api`: Domain APIs, queue producers, admin APIs
- `services/ai-orchestrator`: Prompt pipelines and multi-model orchestration
- `services/renderer`: Rendering workers (FFmpeg/Remotion)
- `prisma`: Database schema
- `infra`: Docker and deployment assets
- `docs`: Architecture, workflows, deployment and env

## Quick start
1. Copy `.env.example` to `.env` and fill secrets.
2. `docker compose -f infra/docker-compose.yml up -d postgres redis minio`
3. `npm install`
4. `npx prisma migrate dev`
5. `npm run dev`

## Core workflow
`IDEA -> Script -> Storyboard -> Assets -> Voiceover -> Edit -> Render -> Export`

See `docs/ARCHITECTURE.md` for full design.
