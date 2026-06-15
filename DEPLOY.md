# Deployment to GitHub Pages

## One-Time Setup

1. Create a new GitHub repository named `duongkstn.github.io`
2. Clone this repo:
   ```bash
   git clone https://github.com/duongkstn/duongkstn-profile.git
   cd duongkstn-profile
   ```

3. Set up git remote:
   ```bash
   git remote add origin https://github.com/duongkstn/duongkstn.github.io.git
   git branch -M main
   git push -u origin main
   ```

## Deploying Your Site

### Manual Deployment

1. Build and export:
   ```bash
   npm run export
   ```

2. Copy exported files to gh-pages branch:
   ```bash
   git checkout gh-pages || git checkout --orphan gh-pages
   rm -rf * .gitignore
   cp -r out/* .
   cp out/.* . 2>/dev/null || true
   git add -A
   git commit -m "deploy: update site"
   git push origin gh-pages
   ```

3. Switch back to main:
   ```bash
   git checkout main
   ```

### GitHub Actions (Recommended)

The workflow in `.github/workflows/deploy.yml` automatically builds and deploys on every push to main.

1. Go to your repository Settings → Pages
2. Set source to "Deploy from a branch"
3. Select `gh-pages` branch
4. Push to main:
   ```bash
   git add .
   git commit -m "your changes"
   git push origin main
   ```

Site will be live at `https://duongkstn.github.io`
