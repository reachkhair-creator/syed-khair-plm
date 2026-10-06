import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json({ limit: '50mb' }));

  const publicDir = path.resolve(__dirname, 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  // API endpoint to permanently lock the user's real photo into the project source & public assets
  app.post('/api/lock-profile-photo', async (req, res) => {
    try {
      const { profileDataUrl, ogBannerDataUrl } = req.body as {
        profileDataUrl?: string;
        ogBannerDataUrl?: string;
      };

      if (!profileDataUrl && !ogBannerDataUrl) {
        res.status(400).json({ error: 'No image data provided' });
        return;
      }

      // Read current locked file values if only one is updated
      const lockedFilePath = path.resolve(__dirname, 'src/data/lockedProfilePhoto.ts');
      let existingProfile = '';
      let existingBanner = '';

      if (fs.existsSync(lockedFilePath)) {
        const content = fs.readFileSync(lockedFilePath, 'utf-8');
        const profileMatch = content.match(/LOCKED_PROFILE_PHOTO_DATA_URL:\s*string\s*=\s*"([^"]*)"/);
        const bannerMatch = content.match(/LOCKED_OG_BANNER_DATA_URL:\s*string\s*=\s*"([^"]*)"/);
        if (profileMatch) existingProfile = profileMatch[1];
        if (bannerMatch) existingBanner = bannerMatch[1];
      }

      const finalProfile = profileDataUrl !== undefined ? profileDataUrl : existingProfile;
      const finalBanner = ogBannerDataUrl !== undefined ? ogBannerDataUrl : existingBanner || finalProfile;

      // Save binary files to /public so /syed-khair-profile.jpg and /syed-khair-og.jpg work for og:image & static links
      if (finalProfile && finalProfile.startsWith('data:image/')) {
        const base64Data = finalProfile.replace(/^data:image\/\w+;base64,/, '');
        fs.writeFileSync(path.join(publicDir, 'syed-khair-profile.jpg'), Buffer.from(base64Data, 'base64'));
      }

      if (finalBanner && finalBanner.startsWith('data:image/')) {
        const base64Data = finalBanner.replace(/^data:image\/\w+;base64,/, '');
        fs.writeFileSync(path.join(publicDir, 'syed-khair-og.jpg'), Buffer.from(base64Data, 'base64'));
      }

      // Persist directly into src/data/lockedProfilePhoto.ts so it is baked into the bundle and Git repo
      const tsFileContent = `// This file stores the 100% authentic, unmodified profile photo of Syed Abdul Khair.
// Automatically locked via Face-Lock Photo Manager (Zero AI face alteration).

export const LOCKED_PROFILE_PHOTO_DATA_URL: string = ${JSON.stringify(finalProfile)};
export const LOCKED_OG_BANNER_DATA_URL: string = ${JSON.stringify(finalBanner)};
`;
      fs.writeFileSync(lockedFilePath, tsFileContent, 'utf-8');

      res.json({
        success: true,
        message: 'Real profile photo permanently locked into project source and /public/syed-khair-profile.jpg'
      });
    } catch (error) {
      console.error('Failed to save profile photo:', error);
      res.status(500).json({ error: 'Failed to save profile photo to disk' });
    }
  });

  // Serve static files from public directory
  app.use(express.static(publicDir));

  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
