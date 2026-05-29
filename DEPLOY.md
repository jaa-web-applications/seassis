# Deploy SeAssis frontend (Netlify)

## Prerequisites

- MongoDB Atlas and Mailgun configured on the [backend](../seassis-backend/DEPLOY.md) first
- LocationIQ API key for map images ([locationiq.com](https://locationiq.com/))

## 1. Connect the repository

1. In [Netlify](https://app.netlify.com/), choose **Add new site** → **Import an existing project**.
2. Connect GitHub/GitLab and select the `seassis` repository (or monorepo with **Base directory** set to `seassis`).
3. Netlify reads `netlify.toml` automatically:
   - **Build command:** `npm ci && npm run build`
   - **Publish directory:** `build`
   - **Node version:** 16

## 2. Environment variables

In **Site settings** → **Environment variables**, add (required at **build** time for `REACT_APP_*`):

| Variable | Example | Description |
|----------|---------|-------------|
| `REACT_APP_SERVER` | `https://seassis-backend.onrender.com` | Render backend URL, no trailing slash |
| `REACT_APP_IQ_URL` | `https://maps.locationiq.com/v3/staticmap` | LocationIQ static map endpoint |
| `REACT_APP_IQ_KEY` | *(your key)* | LocationIQ access token |

Redeploy after changing any `REACT_APP_*` variable (they are baked into the build).

## 3. Deploy

Trigger **Deploy site**. SPA routing is handled by `netlify.toml` and `public/_redirects`.

## 4. Point the backend at this site

On Render, set `FRONTEND_URL` on the backend to your Netlify URL (e.g. `https://your-site.netlify.app`), then redeploy the backend so CORS allows the frontend.

## Local build check

```bash
cp .env.sample .env
# fill in values, then:
npm ci
npm run build
```
