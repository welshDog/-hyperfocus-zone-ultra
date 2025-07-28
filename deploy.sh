# 🚀💎 HYPERFOCUS ZONE ULTRA - QUICK DEPLOY SCRIPT 💎🚀

# Step 1: Create GitHub Repository
# Go to: https://github.com/new
# Repository name: hyperfocus-zone-ultra
# Make it public
# Don't initialize with README (we already have files)

# Step 2: Connect to GitHub (Repository: welshDog/-hyperfocus-zone-ultra)
git branch -M main
git remote add origin https://github.com/welshDog/-hyperfocus-zone-ultra.git
git push -u origin main

# Step 3: Deploy to Vercel
# Option A: Vercel Dashboard (Recommended)
# 1. Go to: https://vercel.com/dashboard
# 2. Click "New Project"
# 3. Import from GitHub: hyperfocus-zone-ultra
# 4. Configure environment variables from .env.local:
#    - CLOUDFLARE_STREAM_URL
#    - ELEVENLABS_API_KEY  
#    - AGENT_ARMY_SIZE=797
#    - EMPIRE_MODE=FULL_AUTO
# 5. Click Deploy!

# Option B: Vercel CLI
# npm i -g vercel
# vercel --prod

# Step 4: Custom Domain (Optional)
# In Vercel dashboard > Settings > Domains
# Add your custom domain and configure DNS

echo "🔥 DEPLOYMENT READY! Follow the steps above to go live! 🚀"
