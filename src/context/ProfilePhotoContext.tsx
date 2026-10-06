import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { LOCKED_PROFILE_PHOTO_DATA_URL, LOCKED_OG_BANNER_DATA_URL } from '../data/lockedProfilePhoto';

export interface StudioEnhancementOptions {
  deepNavyBackdrop: boolean; // Enhances ambient edges to #071A2B
  studioLighting: boolean;   // Subtle 4K studio contrast & rim light while keeping face 100% identical
  objectPosition: string;    // e.g. 'center 18%' for portraits
}

interface ProfilePhotoContextType {
  profilePhoto: string;
  ogBannerPhoto: string;
  isPhotoLocked: boolean;
  isSavingToServer: boolean;
  saveStatusMessage: string | null;
  enhancement: StudioEnhancementOptions;
  setEnhancement: React.Dispatch<React.SetStateAction<StudioEnhancementOptions>>;
  uploadAndLockFiles: (files: FileList | File[]) => Promise<void>;
  clearProfilePhotos: () => Promise<void>;
  isPhotoModalOpen: boolean;
  setIsPhotoModalOpen: (open: boolean) => void;
}

const STORAGE_KEY_PROFILE = 'syed_khair_real_profile_v3';
const STORAGE_KEY_BANNER = 'syed_khair_real_banner_v3';
const STORAGE_KEY_ENHANCE = 'syed_khair_studio_enhance_v3';

const ProfilePhotoContext = createContext<ProfilePhotoContextType | undefined>(undefined);

/**
 * Processes an uploaded real photo on an HTML5 canvas at high resolution (up to 2048px)
 * to preserve 100% of the real facial features (0% AI generation / 100% face lock)
 * while optionally harmonizing the outer background vignette to deep navy #071A2B.
 */
async function processRealPhotoFile(
  file: File,
  applyDeepNavyEdgeHarmony: boolean
): Promise<{ dataUrl: string; width: number; height: number }> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.onload = () => {
        const maxDim = 2048;
        let targetW = img.width;
        let targetH = img.height;
        if (targetW > maxDim || targetH > maxDim) {
          const ratio = Math.min(maxDim / targetW, maxDim / targetH);
          targetW = Math.round(targetW * ratio);
          targetH = Math.round(targetH * ratio);
        }

        const canvas = document.createElement('canvas');
        canvas.width = targetW;
        canvas.height = targetH;
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          resolve({ dataUrl: reader.result as string, width: img.width, height: img.height });
          return;
        }

        // Base #071A2B deep navy canvas
        ctx.fillStyle = '#071A2B';
        ctx.fillRect(0, 0, targetW, targetH);

        // Draw 100% authentic original image without any facial distortion
        ctx.drawImage(img, 0, 0, targetW, targetH);

        // Optional subtle peripheral deep-navy (#071A2B) studio edge blend
        // Leaves center (face, eyes, nose, mustache, skin tone, blazer) 100% untouched
        if (applyDeepNavyEdgeHarmony && targetW / targetH < 1.45) {
          const grad = ctx.createRadialGradient(
            targetW * 0.5,
            targetH * 0.42,
            Math.min(targetW, targetH) * 0.36,
            targetW * 0.5,
            targetH * 0.5,
            Math.max(targetW, targetH) * 0.72
          );
          grad.addColorStop(0, 'rgba(7, 26, 43, 0)');
          grad.addColorStop(0.65, 'rgba(7, 26, 43, 0.08)');
          grad.addColorStop(1, 'rgba(7, 26, 43, 0.55)');
          ctx.fillStyle = grad;
          ctx.fillRect(0, 0, targetW, targetH);
        }

        const outputDataUrl = canvas.toDataURL('image/jpeg', 0.95);
        resolve({ dataUrl: outputDataUrl, width: targetW, height: targetH });
      };
      img.onerror = reject;
      img.src = reader.result as string;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

export const ProfilePhotoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [profilePhoto, setProfilePhoto] = useState<string>(() => {
    if (LOCKED_PROFILE_PHOTO_DATA_URL) return LOCKED_PROFILE_PHOTO_DATA_URL;
    try {
      return localStorage.getItem(STORAGE_KEY_PROFILE) || '';
    } catch {
      return '';
    }
  });

  const [ogBannerPhoto, setOgBannerPhoto] = useState<string>(() => {
    if (LOCKED_OG_BANNER_DATA_URL) return LOCKED_OG_BANNER_DATA_URL;
    try {
      return localStorage.getItem(STORAGE_KEY_BANNER) || '';
    } catch {
      return '';
    }
  });

  const [enhancement, setEnhancement] = useState<StudioEnhancementOptions>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_ENHANCE);
      if (saved) return JSON.parse(saved);
    } catch {
      // ignore
    }
    return {
      deepNavyBackdrop: true,
      studioLighting: true,
      objectPosition: 'center 18%'
    };
  });

  const [isSavingToServer, setIsSavingToServer] = useState(false);
  const [saveStatusMessage, setSaveStatusMessage] = useState<string | null>(null);
  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_ENHANCE, JSON.stringify(enhancement));
    } catch {
      // ignore
    }
  }, [enhancement]);

  // Dynamically sync og:image and twitter:image meta tags in index.html
  useEffect(() => {
    const activeOgUrl = ogBannerPhoto || profilePhoto || '/syed-khair-og.jpg';
    let ogMeta = document.querySelector('meta[property="og:image"]') as HTMLMetaElement | null;
    if (!ogMeta) {
      ogMeta = document.createElement('meta');
      ogMeta.setAttribute('property', 'og:image');
      document.head.appendChild(ogMeta);
    }
    ogMeta.setAttribute('content', activeOgUrl);

    let twitterMeta = document.querySelector('meta[name="twitter:image"]') as HTMLMetaElement | null;
    if (!twitterMeta) {
      twitterMeta = document.createElement('meta');
      twitterMeta.setAttribute('name', 'twitter:image');
      document.head.appendChild(twitterMeta);
    }
    twitterMeta.setAttribute('content', activeOgUrl);
  }, [profilePhoto, ogBannerPhoto]);

  const persistToServer = useCallback(async (newProfile: string, newBanner: string) => {
    setIsSavingToServer(true);
    setSaveStatusMessage('Locking your real photo directly into source code & /public...');
    try {
      const response = await fetch('/api/lock-profile-photo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          profileDataUrl: newProfile,
          ogBannerDataUrl: newBanner
        })
      });
      if (response.ok) {
        setSaveStatusMessage('Locked! Your 100% original photo is now permanently saved in the codebase.');
      } else {
        setSaveStatusMessage('Saved in browser storage.');
      }
    } catch {
      setSaveStatusMessage('Saved in browser storage.');
    } finally {
      setIsSavingToServer(false);
      setTimeout(() => setSaveStatusMessage(null), 5000);
    }
  }, []);

  const uploadAndLockFiles = useCallback(
    async (fileList: FileList | File[]) => {
      const files = Array.from(fileList).filter((f) => f.type.startsWith('image/'));
      if (files.length === 0) return;

      let chosenProfile = profilePhoto;
      let chosenBanner = ogBannerPhoto;

      for (const file of files) {
        const processed = await processRealPhotoFile(file, enhancement.deepNavyBackdrop);
        const aspect = processed.width / processed.height;

        if (aspect >= 1.45) {
          // Wide banner photo (e.g., Teamcenter PLM Architect Digital Thread banner)
          chosenBanner = processed.dataUrl;
          if (!chosenProfile && files.length === 1) {
            chosenProfile = processed.dataUrl;
          }
        } else {
          // Portrait or square headshot (e.g., 8.13.10 PM.jpg or 8.07.51 PM.jpeg)
          chosenProfile = processed.dataUrl;
          if (!chosenBanner) {
            chosenBanner = processed.dataUrl;
          }
        }
      }

      setProfilePhoto(chosenProfile);
      setOgBannerPhoto(chosenBanner);

      try {
        if (chosenProfile) localStorage.setItem(STORAGE_KEY_PROFILE, chosenProfile);
        if (chosenBanner) localStorage.setItem(STORAGE_KEY_BANNER, chosenBanner);
      } catch {
        // ignore quota errors
      }

      await persistToServer(chosenProfile, chosenBanner);
    },
    [profilePhoto, ogBannerPhoto, enhancement.deepNavyBackdrop, persistToServer]
  );

  const clearProfilePhotos = useCallback(async () => {
    setProfilePhoto('');
    setOgBannerPhoto('');
    try {
      localStorage.removeItem(STORAGE_KEY_PROFILE);
      localStorage.removeItem(STORAGE_KEY_BANNER);
    } catch {
      // ignore
    }
    await persistToServer('', '');
  }, [persistToServer]);

  // Global drag-and-drop listener so user can simply drag & drop their photo anywhere on the page
  useEffect(() => {
    const handleDragOver = (e: DragEvent) => {
      if (e.dataTransfer?.types.includes('Files')) {
        e.preventDefault();
      }
    };
    const handleDrop = (e: DragEvent) => {
      if (e.dataTransfer?.files && e.dataTransfer.files.length > 0) {
        const hasImages = Array.from(e.dataTransfer.files).some((f) => f.type.startsWith('image/'));
        if (hasImages) {
          e.preventDefault();
          uploadAndLockFiles(e.dataTransfer.files);
        }
      }
    };
    window.addEventListener('dragover', handleDragOver);
    window.addEventListener('drop', handleDrop);
    return () => {
      window.removeEventListener('dragover', handleDragOver);
      window.removeEventListener('drop', handleDrop);
    };
  }, [uploadAndLockFiles]);

  return (
    <ProfilePhotoContext.Provider
      value={{
        profilePhoto,
        ogBannerPhoto,
        isPhotoLocked: Boolean(profilePhoto),
        isSavingToServer,
        saveStatusMessage,
        enhancement,
        setEnhancement,
        uploadAndLockFiles,
        clearProfilePhotos,
        isPhotoModalOpen,
        setIsPhotoModalOpen
      }}
    >
      {children}
    </ProfilePhotoContext.Provider>
  );
};

export const useProfilePhoto = () => {
  const ctx = useContext(ProfilePhotoContext);
  if (!ctx) {
    throw new Error('useProfilePhoto must be used within a ProfilePhotoProvider');
  }
  return ctx;
};
