# API Routes

## Auth
- `POST /api/auth/signin`
- `POST /api/auth/signup`
- `GET /api/auth/session`

## Projects
- `POST /api/projects` create project and enqueue pipeline
- `GET /api/projects` list user projects
- `GET /api/projects/:id` full detail (scenes/jobs/assets)
- `PATCH /api/projects/:id` update creative brief
- `POST /api/projects/:id/regenerate-scene/:sceneId`

## Generation
- `POST /api/generate/script`
- `POST /api/generate/storyboard`
- `POST /api/generate/assets`
- `POST /api/generate/voiceover`
- `POST /api/generate/edit-plan`

## Timeline
- `GET /api/timeline/:projectId`
- `PATCH /api/timeline/:projectId`
- `POST /api/timeline/:projectId/render`

## Export
- `POST /api/export/:projectId`
- `GET /api/export/:projectId/status`
- `GET /api/export/:projectId/download`

## Admin
- `GET /api/admin/users`
- `GET /api/admin/usage`
- `GET /api/admin/render-queue`
- `PATCH /api/admin/users/:id/credits`
