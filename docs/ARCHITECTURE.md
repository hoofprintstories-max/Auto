# Architecture

## 1. System services
- **Web App (Next.js)**: dashboard, project creation, timeline editor, exports.
- **API Service (Node/Nest style)**: projects, billing, credits, admin, queue orchestration.
- **AI Orchestrator Service**: script generation, storyboard prompts, retention optimization, metadata.
- **Renderer Service**: assembles scenes, captions, effects and renders MP4 (1080p/4K).
- **Worker Queue (BullMQ/Redis)**: asynchronous pipeline and retries.
- **Storage (S3/R2 compatible)**: assets, render outputs, subtitles.
- **PostgreSQL**: persistent product and job state.

## 2. Pipeline
1. User submits project brief.
2. API validates plan/credits and enqueues `project.generate`.
3. AI orchestrator creates script package:
   - Hook (0-15s)
   - Retention loops
   - Scene breakdown with timing
4. Storyboard module generates visual prompts per scene.
5. Asset module generates/acquires images, clips, b-roll.
6. Voice module generates TTS + word timing.
7. Edit planner creates timeline JSON with transitions/SFX/BGM/captions.
8. Renderer consumes timeline JSON and emits final video + subtitles.
9. Export module generates YouTube metadata + thumbnail prompts.

## 3. Scalability
- Stateless APIs behind load balancer.
- Dedicated queues for script, assets, voice, render.
- Horizontal workers per queue.
- Idempotent jobs with `job_key` and checkpointed state.
- Asset caching for prompt dedupe and cost control.

## 4. Security and governance
- Auth.js + JWT session.
- Role-based access: USER, ADMIN.
- Signed URLs for upload/download.
- Per-provider API usage logs and cost ledger.
- PII-minimal prompt storage with optional redaction.

## 5. Editing quality strategy
- Beat-aware cut planner using speech pace and music BPM.
- Scene energy curve target (hook spike, curiosity midpoints, payoff close).
- Caption typography presets and motion templates.
- Dynamic Ken Burns on static imagery.
- SFX layering rules by transition type.
