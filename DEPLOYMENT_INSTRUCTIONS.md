# Deployment Instructions: Render Backend & Vercel Frontend

This guide explains the exact steps and code changes needed to connect your Next.js frontend (Vercel) to your FastAPI backend (Render).

---

## Phase 1: Before Deploying the Backend to Render

Your backend is mostly ready! Make sure you follow these steps when setting it up on Render.

### 1. Update CORS settings in `backend/main.py` (Optional but Recommended)
Currently, `allow_origins=["*"]` allows any website to use your API. Once your frontend is live on Vercel, you should secure your backend by only allowing requests from your Vercel URL.

```python
# In backend/main.py
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",                  # For local testing
        "https://your-app-name.vercel.app"        # REPLACE with your actual Vercel URL
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
```
*(If you want to quickly test it first, leaving it as `["*"]` will guarantee it works without CORS errors).*

### 2. Render Settings
When creating your Web Service on Render, use precisely these commands:
- **Build Command:** `pip install --upgrade pip && pip install -r requirements.txt`
- **Start Command:** `uvicorn main:app --host 0.0.0.0 --port $PORT`

Once Render finishes building, **copy your new backend URL** (e.g., `https://encryption-backend.onrender.com`).

---

## Phase 2: After Deploying the Backend to Render

Now that your backend is living on the internet, you need to tell your Vercel frontend how to find it.

### 1. Give Vercel your Backend URL
1. Go to your project on the [Vercel Dashboard](https://vercel.com/dashboard).
2. Go to **Settings** > **Environment Variables**.
3. Add a new variable:
   - **Key:** `NEXT_PUBLIC_BACKEND_URL`
   - **Value:** *Paste your Render URL here (e.g., `https://encryption-backend.onrender.com`)*. Make sure there is no trailing slash (`/`) at the end.

### 2. Update `frontend/next.config.mjs`
Change your Next.js config so it redirects API traffic to Render instead of your local machine.

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        // Points to Render in production, but falls back to localhost if testing locally without env vars
        destination: `${process.env.NEXT_PUBLIC_BACKEND_URL || 'http://127.0.0.1:8000'}/:path*`, 
      },
    ];
  },
};

export default nextConfig;
```

### 3. Update File Encryption Endpoints (`frontend/src/app/page.js`)
Currently, around lines 135 and 228 in `page.js`, you have hardcoded IP addresses for the file upload endpoints. You must change them to use the environment variable.

**Find the File Encryption block:**
```javascript
// Replace this:
// const endpoint = method === 'rsa' ? 'http://127.0.0.1:8000/rsa-file-encrypt' : 'http://127.0.0.1:8000/aes-file-encrypt';

// With this:
const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://127.0.0.1:8000';
const endpoint = method === 'rsa' 
  ? `${backendUrl}/rsa-file-encrypt` 
  : `${backendUrl}/aes-file-encrypt`;
```

**Find the File Decryption block:**
```javascript
// Replace this:
// const endpoint = method === 'rsa' ? 'http://127.0.0.1:8000/rsa-file-decrypt' : 'http://127.0.0.1:8000/aes-file-decrypt';

// With this:
const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://127.0.0.1:8000';
const endpoint = method === 'rsa' 
  ? `${backendUrl}/rsa-file-decrypt` 
  : `${backendUrl}/aes-file-decrypt`;
```

---

## Final Step
After making these code changes, **commit and push them to GitHub**. 
Vercel will automatically trigger a new deployment, and it will pick up the `NEXT_PUBLIC_BACKEND_URL` environment variable you set earlier.

Your full stack application will now be officially live! 🚀
