# Deployment Guide

## Production topology
- Vercel: Next.js web app
- AWS ECS/Fargate: API service + workers
- AWS Batch/Kubernetes: render workers (GPU optional)
- RDS Postgres + ElastiCache Redis
- S3 + CloudFront for media delivery

## Steps
1. Provision Postgres, Redis, object storage.
2. Deploy `apps/web` with env vars to Vercel.
3. Build and deploy `services/api`, `services/ai-orchestrator`, `services/renderer` containers.
4. Configure BullMQ worker autoscaling by queue depth.
5. Set up observability (OpenTelemetry + Prometheus + Grafana).
6. Configure webhooks/callbacks for Runway/Pika completion.
7. Enable daily cost guardrails and per-user quotas.

## SLA controls
- Retry policy with exponential backoff.
- Dead-letter queues for failed render jobs.
- Idempotent pipeline stages using `projectId + stage` lock keys.
