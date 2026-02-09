# ✅ Quick Deployment Checklist

## Before You Deploy

### 1. Fix File Names (CRITICAL!)
```bash
# Rename these files in your project:
mv vite_config.ts vite.config.ts
mv _gitignore .gitignore  
mv _env.local .env.local
```

### 2. Create Pages Folder
```bash
mkdir -p pages
```
Then copy all 7 `.tsx` files from `/outputs/pages/` to your `pages/` folder.

### 3. Replace These Files
Copy from `/outputs/` to your project root:
- [ ] `vite.config.ts` (updated)
- [ ] `package.json` (updated)
- [ ] `vercel.json` (updated)
- [ ] `.gitignore` (updated)

### 4. Set Your API Key Locally
Edit `.env.local`:
```
GEMINI_API_KEY=your_actual_gemini_api_key_here
```

### 5. Install Dependencies
```bash
npm install
```

### 6. Test Locally
```bash
npm run dev
```
Visit http://localhost:5173 - Should work perfectly!

### 7. Test Build
```bash
npm run build
```
Should complete with NO errors.

---

## Deploy to Vercel

### 8. Set Environment Variable in Vercel
1. Go to Vercel Dashboard → Your Project
2. Settings → Environment Variables
3. Add:
   - **Name**: `GEMINI_API_KEY`
   - **Value**: Your Gemini API key
   - **Environments**: All (Production, Preview, Development)

### 9. Deploy
```bash
git add .
git commit -m "Fix all deployment issues"
git push
```

Or use Vercel CLI:
```bash
vercel
```

---

## Verification

After deployment, check:
- [ ] Site loads at your Vercel URL
- [ ] Home page displays correctly
- [ ] Blog page shows articles
- [ ] Navigation works (all links)
- [ ] Cookie banner appears
- [ ] Emergency banner at bottom
- [ ] All pages accessible (About, Contact, Privacy, Disclaimer)
- [ ] No console errors in browser DevTools

---

## If It Fails

1. Check Vercel build logs for exact error
2. Verify file names are correct (especially `vite.config.ts`)
3. Verify `GEMINI_API_KEY` is set in Vercel
4. Verify pages folder exists with all 7 components
5. Clear Vercel cache and redeploy

---

## File Structure Should Look Like This

```
your-project/
├── .env.local              ← Contains GEMINI_API_KEY
├── .gitignore              ← Ignores node_modules, dist, .env.local
├── vite.config.ts          ← Correct name!
├── vercel.json             ← Build config
├── package.json            ← Updated dependencies
├── tsconfig.json
├── index.html
├── index.tsx
├── App.tsx
├── constants.tsx
├── types.ts
├── metadata.json
└── pages/
    ├── Home.tsx
    ├── Blog.tsx
    ├── BlogPostPage.tsx
    ├── About.tsx
    ├── Contact.tsx
    ├── Privacy.tsx
    └── Disclaimer.tsx
```

**That's it! Your site should deploy successfully now.** 🎉
