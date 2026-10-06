import React, { useRef } from 'react';
import { Camera, Upload, Sparkles, ShieldCheck } from 'lucide-react';
import { useProfilePhoto } from '../context/ProfilePhotoContext';

interface ProfilePhotoSlotProps {
  variant: 'header-40' | 'hero-280' | 'about-400' | 'contact-120' | 'footer-48' | 'cv-80';
  className?: string;
}

export const ProfilePhotoSlot: React.FC<ProfilePhotoSlotProps> = ({ variant, className = '' }) => {
  const { profilePhoto, enhancement, uploadAndLockFiles, setIsPhotoModalOpen } = useProfilePhoto();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      await uploadAndLockFiles(e.target.files);
      e.target.value = '';
    }
  };

  const studioFilterStyle: React.CSSProperties = {
    objectPosition: enhancement.objectPosition || 'center 18%',
    filter: enhancement.studioLighting ? 'contrast(1.04) brightness(1.02) saturate(1.03)' : 'none',
  };

  // 1. Header 40px circular thumb
  if (variant === 'header-40') {
    return (
      <div className={`relative group shrink-0 w-10 h-10 rounded-full overflow-hidden bg-[#071A2B] border-2 border-[#0099FF] shadow-[0_0_12px_rgba(0,153,255,0.45)] ${className}`}>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          multiple
          onChange={handleFileChange}
          className="hidden"
        />
        {profilePhoto ? (
          <>
            <img
              src={profilePhoto}
              alt="Syed Abdul Khair"
              referrerPolicy="no-referrer"
              style={studioFilterStyle}
              className="w-full h-full object-cover"
            />
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setIsPhotoModalOpen(true);
              }}
              title="Manage Face-Lock Real Profile Photo"
              className="absolute inset-0 bg-[#071A2B]/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-[#0099FF]"
            >
              <Camera className="w-4 h-4" />
            </button>
          </>
        ) : (
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              fileInputRef.current?.click();
            }}
            title="Click to select your real photo (100% Face-Lock)"
            className="w-full h-full flex flex-col items-center justify-center bg-[#071A2B] text-[#0099FF] hover:bg-[#0B253D] transition-colors"
          >
            <span className="text-[11px] font-extrabold font-display tracking-tight text-white">SK</span>
          </button>
        )}
      </div>
    );
  }

  // 2. Footer 48px circular thumb
  if (variant === 'footer-48') {
    return (
      <div className={`relative group shrink-0 w-12 h-12 rounded-full overflow-hidden bg-[#071A2B] border-2 border-[#0099FF] shadow-[0_0_16px_rgba(0,153,255,0.4)] ${className}`}>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          multiple
          onChange={handleFileChange}
          className="hidden"
        />
        {profilePhoto ? (
          <>
            <img
              src={profilePhoto}
              alt="Syed Abdul Khair"
              referrerPolicy="no-referrer"
              style={studioFilterStyle}
              className="w-full h-full object-cover"
            />
            <button
              type="button"
              onClick={() => setIsPhotoModalOpen(true)}
              title="Manage Real Profile Photo"
              className="absolute inset-0 bg-[#071A2B]/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-[#0099FF]"
            >
              <Camera className="w-4 h-4" />
            </button>
          </>
        ) : (
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            title="Select Real Photo (48px Footer)"
            className="w-full h-full flex flex-col items-center justify-center bg-[#071A2B] text-[#0099FF] hover:bg-[#0B253D] transition-colors"
          >
            <Camera className="w-4 h-4 mb-0.5" />
            <span className="text-[8px] font-mono text-slate-300">48px</span>
          </button>
        )}
      </div>
    );
  }

  // 3. Contact 120px circular portrait
  if (variant === 'contact-120') {
    return (
      <div className={`relative group shrink-0 w-[120px] h-[120px] rounded-full overflow-hidden bg-[#071A2B] border-2 border-[#0099FF] shadow-[0_0_28px_rgba(0,153,255,0.45)] ${className}`}>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          multiple
          onChange={handleFileChange}
          className="hidden"
        />
        {profilePhoto ? (
          <>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(0,153,255,0.18),transparent_70%)] pointer-events-none z-10" />
            <img
              src={profilePhoto}
              alt="Syed Abdul Khair — Teamcenter / PLM Architect"
              referrerPolicy="no-referrer"
              style={studioFilterStyle}
              className="w-full h-full object-cover"
            />
            <button
              type="button"
              onClick={() => setIsPhotoModalOpen(true)}
              className="absolute inset-0 z-20 bg-[#071A2B]/80 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-1 text-white text-[10px] font-medium"
            >
              <Camera className="w-4 h-4 text-[#0099FF]" />
              <span>Photo Settings</span>
            </button>
          </>
        ) : (
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="w-full h-full flex flex-col items-center justify-center p-2 text-center bg-[#071A2B] hover:bg-[#0B253D] transition-colors"
          >
            <Upload className="w-5 h-5 text-[#0099FF] mb-1" />
            <span className="text-[10px] font-semibold text-white leading-tight">Select Real Photo</span>
            <span className="text-[9px] font-mono text-[#0099FF] mt-0.5">120px · Face-Lock</span>
          </button>
        )}
      </div>
    );
  }

  // 4. CV Modal 80px portrait
  if (variant === 'cv-80') {
    return (
      <div className={`relative shrink-0 w-20 h-20 rounded-full overflow-hidden bg-[#071A2B] border-2 border-[#0099FF] shadow-[0_0_20px_rgba(0,153,255,0.4)] ${className}`}>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          multiple
          onChange={handleFileChange}
          className="hidden"
        />
        {profilePhoto ? (
          <img
            src={profilePhoto}
            alt="Syed Abdul Khair"
            referrerPolicy="no-referrer"
            style={studioFilterStyle}
            className="w-full h-full object-cover"
          />
        ) : (
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="w-full h-full flex flex-col items-center justify-center bg-[#071A2B] text-[#0099FF] text-[10px] font-mono"
          >
            <Camera className="w-4 h-4 mb-0.5" />
            <span>Photo</span>
          </button>
        )}
      </div>
    );
  }

  // 5. Hero 280px circle with #0099FF glow right side
  if (variant === 'hero-280') {
    return (
      <div className={`relative flex flex-col items-center ${className}`}>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          multiple
          onChange={handleFileChange}
          className="hidden"
        />
        {/* Ambient #0099FF outer studio halo */}
        <div className="relative group w-[280px] h-[280px] rounded-full p-1 bg-gradient-to-b from-[#0099FF] via-[#0099FF]/70 to-[#071A2B] shadow-[0_0_55px_rgba(0,153,255,0.55)]">
          <div className="w-full h-full rounded-full overflow-hidden bg-[#071A2B] relative flex items-center justify-center">
            {/* Deep Navy #071A2B studio lighting backdrop radial */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_28%,rgba(0,153,255,0.22),rgba(7,26,43,0.95)_75%)] pointer-events-none" />

            {profilePhoto ? (
              <>
                <img
                  src={profilePhoto}
                  alt="Syed Abdul Khair — Teamcenter / PLM Architect & Administrator"
                  referrerPolicy="no-referrer"
                  style={studioFilterStyle}
                  className="w-full h-full object-cover relative z-10"
                />
                {/* Studio rim light overlay */}
                <div className="absolute inset-0 rounded-full ring-2 ring-inset ring-[#0099FF]/40 pointer-events-none z-20" />
                <button
                  type="button"
                  onClick={() => setIsPhotoModalOpen(true)}
                  className="absolute inset-0 z-30 bg-[#071A2B]/80 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2 text-white text-xs font-semibold"
                >
                  <Camera className="w-6 h-6 text-[#0099FF]" />
                  <span>Change / Adjust Real Photo</span>
                  <span className="text-[10px] font-mono text-[#0099FF]">100% Face-Lock Active</span>
                </button>
              </>
            ) : (
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="relative z-10 w-full h-full flex flex-col items-center justify-center p-6 text-center hover:bg-[#0B253D]/60 transition-colors cursor-pointer"
              >
                <div className="w-12 h-12 rounded-full bg-[#0099FF]/20 border border-[#0099FF] flex items-center justify-center text-[#0099FF] mb-3 shadow-[0_0_20px_rgba(0,153,255,0.4)]">
                  <Upload className="w-6 h-6" />
                </div>
                <span className="text-sm font-bold text-white font-display">
                  Click or Drop Real Photo
                </span>
                <span className="text-[11px] text-slate-300 mt-1 leading-snug">
                  Uses your attached photo directly (100% identical face lock 0.99 · #071A2B deep navy)
                </span>
                <span className="mt-2.5 px-3 py-1 rounded-md bg-[#0099FF] text-white text-[11px] font-semibold shadow">
                  Select Photo File
                </span>
              </button>
            )}
          </div>

          {/* Verified Identity & Studio Badge */}
          <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 z-30 whitespace-nowrap px-3.5 py-1 rounded-full bg-[#071A2B] border border-[#0099FF] shadow-[0_0_20px_rgba(0,153,255,0.45)] flex items-center gap-1.5 text-[11px] font-medium text-white">
            <ShieldCheck className="w-3.5 h-3.5 text-[#0099FF]" />
            <span>Syed Abdul Khair · PLM Architect</span>
          </div>
        </div>
      </div>
    );
  }

  // 6. About 400px left portrait card
  return (
    <div className={`relative w-full max-w-[400px] mx-auto lg:mx-0 ${className}`}>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        multiple
        onChange={handleFileChange}
        className="hidden"
      />
      <div className="relative group rounded-2xl overflow-hidden bg-[#071A2B] border-2 border-[#0099FF]/70 shadow-[0_0_40px_rgba(0,153,255,0.3)] aspect-[4/5]">
        {/* Deep Navy #071A2B studio ambient light */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,rgba(0,153,255,0.2),rgba(7,26,43,0.98)_80%)] pointer-events-none" />

        {profilePhoto ? (
          <>
            <img
              src={profilePhoto}
              alt="Syed Abdul Khair — Teamcenter / PLM Architect & Lead Design Engineer"
              referrerPolicy="no-referrer"
              style={studioFilterStyle}
              className="w-full h-full object-cover relative z-10"
            />
            {/* Bottom Measured Scrim for Executive Caption */}
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#071A2B] via-[#071A2B]/80 to-transparent z-20 pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 z-20 flex items-end justify-between gap-2">
              <div>
                <div className="text-base font-bold text-white font-display leading-tight">
                  Syed Abdul Khair
                </div>
                <div className="text-xs text-[#0099FF] font-mono mt-0.5">
                  Teamcenter / PLM Architect · 20+ Yrs
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsPhotoModalOpen(true)}
                className="px-2.5 py-1.5 rounded-lg bg-[#071A2B]/90 hover:bg-[#0099FF] text-slate-200 hover:text-white border border-[#0099FF]/50 text-[11px] font-medium flex items-center gap-1 transition-colors"
              >
                <Camera className="w-3.5 h-3.5" />
                <span>Photo</span>
              </button>
            </div>
          </>
        ) : (
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="relative z-10 w-full h-full flex flex-col items-center justify-center p-8 text-center hover:bg-[#0B253D]/50 transition-colors cursor-pointer"
          >
            <div className="w-14 h-14 rounded-2xl bg-[#0099FF]/20 border border-[#0099FF] flex items-center justify-center text-[#0099FF] mb-4 shadow-[0_0_25px_rgba(0,153,255,0.35)]">
              <Upload className="w-7 h-7" />
            </div>
            <div className="text-base font-bold text-white font-display">
              Upload Real Portrait (400px Left)
            </div>
            <p className="text-xs text-slate-300 mt-2 leading-relaxed">
              Select your attached WhatsApp portrait photo. Preserves your exact face 100% identically (no AI face generation) with #071A2B deep navy studio background.
            </p>
            <div className="mt-4 inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#0099FF] text-white text-xs font-semibold shadow-lg shadow-[#0099FF]/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Select Real Photo File</span>
            </div>
          </button>
        )}
      </div>
    </div>
  );
};
