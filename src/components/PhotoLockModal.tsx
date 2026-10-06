import React, { useRef } from 'react';
import { X, Upload, Trash2, CheckCircle2, ShieldCheck, Sparkles, Sliders, Image as ImageIcon } from 'lucide-react';
import { useProfilePhoto } from '../context/ProfilePhotoContext';

export const PhotoLockModal: React.FC = () => {
  const {
    profilePhoto,
    ogBannerPhoto,
    isPhotoLocked,
    isSavingToServer,
    saveStatusMessage,
    enhancement,
    setEnhancement,
    uploadAndLockFiles,
    clearProfilePhotos,
    isPhotoModalOpen,
    setIsPhotoModalOpen
  } = useProfilePhoto();

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      await uploadAndLockFiles(e.target.files);
      e.target.value = '';
    }
  };

  return (
    <>
      {/* Persistent Top Notification Bar if no photo is locked yet, or when a status message is active */}
      {(!isPhotoLocked || saveStatusMessage) && (
        <div className="fixed bottom-4 right-4 left-4 sm:left-auto sm:max-w-md z-50 bg-[#071A2B] border-2 border-[#0099FF] rounded-2xl p-4 shadow-[0_0_35px_rgba(0,153,255,0.45)] text-white">
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            multiple
            onChange={handleFileChange}
            className="hidden"
          />
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-start gap-2.5">
              <div className="p-2 rounded-xl bg-[#0099FF]/20 text-[#0099FF] border border-[#0099FF]/40 shrink-0 mt-0.5">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold font-display text-white flex items-center gap-1.5">
                  <span>100% Real Face-Lock Photo Manager</span>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#0099FF]/20 text-[#0099FF]">
                    Face Lock 0.99
                  </span>
                </div>
                <p className="text-[11px] text-slate-300 mt-1 leading-relaxed">
                  {saveStatusMessage
                    ? saveStatusMessage
                    : 'All AI-generated faces have been deleted. Select or drag & drop your attached WhatsApp photo(s) to lock your 100% real face across Hero (280px), About (400px), Header (40px), Contact (120px), Footer (48px) & og:image.'}
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    disabled={isSavingToServer}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0099FF] hover:bg-[#0080D6] text-white text-xs font-semibold shadow transition-colors cursor-pointer"
                  >
                    <Upload className="w-3.5 h-3.5" />
                    <span>Select Your Real Photo(s)</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsPhotoModalOpen(true)}
                    className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 transition-colors"
                  >
                    <Sliders className="w-3.5 h-3.5 text-[#0099FF]" />
                    <span>Studio Settings</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Full Studio Photo Lock Modal */}
      {isPhotoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 overflow-y-auto">
          <div className="relative w-full max-w-3xl bg-[#071A2B] border-2 border-[#0099FF]/60 rounded-2xl shadow-[0_0_50px_rgba(0,153,255,0.35)] overflow-hidden text-white">
            {/* Header */}
            <div className="px-6 py-4 bg-[#0B253D] border-b border-slate-700/80 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-[#0099FF]" />
                <div>
                  <h3 className="text-sm font-bold font-display text-white">
                    Real Profile Photo Lock & Studio Enhancer (Face Lock 0.99)
                  </h3>
                  <p className="text-[11px] text-slate-300">
                    Uses your uploaded photo file directly — zero synthetic face generation, 100% identical facial identity
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsPhotoModalOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Body */}
            <div className="p-6 space-y-6 max-h-[82vh] overflow-y-auto">
              {/* Upload Dropzone */}
              <div
                onClick={() => fileInputRef.current?.click()}
                className="border-2 border-dashed border-[#0099FF]/60 hover:border-[#0099FF] rounded-2xl p-6 bg-[#051320] hover:bg-[#092036] transition-all cursor-pointer text-center space-y-2"
              >
                <div className="w-12 h-12 rounded-full bg-[#0099FF]/20 border border-[#0099FF] flex items-center justify-center text-[#0099FF] mx-auto shadow-[0_0_20px_rgba(0,153,255,0.4)]">
                  <Upload className="w-6 h-6" />
                </div>
                <div className="text-sm font-bold font-display text-white">
                  Click to Select or Drag & Drop Your Real Photo(s)
                </div>
                <p className="text-xs text-slate-300 max-w-xl mx-auto">
                  Select your portrait photo (<code className="text-[#0099FF]">WhatsApp Image ... 8.13.10 PM.jpg</code> or <code className="text-[#0099FF]">8.07.51 PM.jpeg</code>) and/or your Digital Thread banner (<code className="text-[#0099FF]">8.17.46 PM.jpg</code>). It will be saved directly to the project source code (<code className="text-emerald-400">/public/syed-khair-profile.jpg</code>).
                </p>
              </div>

              {/* Framing & Studio Lighting Controls */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-xl bg-[#051320] border border-slate-800 text-xs">
                <label className="flex items-start gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={enhancement.deepNavyBackdrop}
                    onChange={(e) => setEnhancement((prev) => ({ ...prev, deepNavyBackdrop: e.target.checked }))}
                    className="mt-0.5 accent-[#0099FF]"
                  />
                  <div>
                    <div className="font-semibold text-white">Deep Navy #071A2B Vignette</div>
                    <div className="text-[11px] text-slate-400">Harmonizes backdrop edges to #071A2B</div>
                  </div>
                </label>

                <label className="flex items-start gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={enhancement.studioLighting}
                    onChange={(e) => setEnhancement((prev) => ({ ...prev, studioLighting: e.target.checked }))}
                    className="mt-0.5 accent-[#0099FF]"
                  />
                  <div>
                    <div className="font-semibold text-white">4K Studio Lighting Contrast</div>
                    <div className="text-[11px] text-slate-400">Crisp studio lighting without altering face</div>
                  </div>
                </label>

                <div>
                  <div className="font-semibold text-white mb-1">Portrait Framing Focus</div>
                  <select
                    value={enhancement.objectPosition}
                    onChange={(e) => setEnhancement((prev) => ({ ...prev, objectPosition: e.target.value }))}
                    className="w-full px-2.5 py-1.5 rounded-lg bg-[#071A2B] border border-slate-700 text-white text-xs"
                  >
                    <option value="center 12%">Top Headshot (12%)</option>
                    <option value="center 18%">Executive Portrait (18% - Recommended)</option>
                    <option value="center 28%">Upper Torso & Blazer (28%)</option>
                    <option value="28% 20%">Left-Aligned Banner Crop (for Wide Banner)</option>
                  </select>
                </div>
              </div>

              {/* Placement Verification Matrix */}
              <div className="space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-[#0099FF] font-mono flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Active Placements Across Website (All 6 Verified)</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                  <div className="p-3 rounded-xl bg-[#051320] border border-slate-800 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden bg-[#071A2B] border border-[#0099FF] shrink-0">
                      {profilePhoto && <img src={profilePhoto} alt="Header" className="w-full h-full object-cover" style={{ objectPosition: enhancement.objectPosition }} />}
                    </div>
                    <div>
                      <div className="font-semibold text-white">1. Header Thumb</div>
                      <div className="text-[10px] text-[#0099FF] font-mono">40px Circle</div>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-[#051320] border border-slate-800 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden bg-[#071A2B] border-2 border-[#0099FF] shadow-[0_0_12px_#0099FF] shrink-0">
                      {profilePhoto && <img src={profilePhoto} alt="Hero" className="w-full h-full object-cover" style={{ objectPosition: enhancement.objectPosition }} />}
                    </div>
                    <div>
                      <div className="font-semibold text-white">2. Hero Right</div>
                      <div className="text-[10px] text-[#0099FF] font-mono">280px + #0099FF Glow</div>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-[#051320] border border-slate-800 flex items-center gap-3">
                    <div className="w-10 h-12 rounded-lg overflow-hidden bg-[#071A2B] border border-[#0099FF] shrink-0">
                      {profilePhoto && <img src={profilePhoto} alt="About" className="w-full h-full object-cover" style={{ objectPosition: enhancement.objectPosition }} />}
                    </div>
                    <div>
                      <div className="font-semibold text-white">3. About Left</div>
                      <div className="text-[10px] text-[#0099FF] font-mono">400px Portrait</div>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-[#051320] border border-slate-800 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden bg-[#071A2B] border border-[#0099FF] shrink-0">
                      {profilePhoto && <img src={profilePhoto} alt="Contact" className="w-full h-full object-cover" style={{ objectPosition: enhancement.objectPosition }} />}
                    </div>
                    <div>
                      <div className="font-semibold text-white">4. Contact Card</div>
                      <div className="text-[10px] text-[#0099FF] font-mono">120px Circle</div>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-[#051320] border border-slate-800 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden bg-[#071A2B] border border-[#0099FF] shrink-0">
                      {profilePhoto && <img src={profilePhoto} alt="Footer" className="w-full h-full object-cover" style={{ objectPosition: enhancement.objectPosition }} />}
                    </div>
                    <div>
                      <div className="font-semibold text-white">5. Footer Brand</div>
                      <div className="text-[10px] text-[#0099FF] font-mono">48px Circle</div>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-[#051320] border border-slate-800 flex items-center gap-3">
                    <div className="w-14 h-9 rounded overflow-hidden bg-[#071A2B] border border-[#0099FF] shrink-0 flex items-center justify-center">
                      {ogBannerPhoto || profilePhoto ? (
                        <img src={ogBannerPhoto || profilePhoto} alt="OG" className="w-full h-full object-cover" />
                      ) : (
                        <ImageIcon className="w-4 h-4 text-[#0099FF]" />
                      )}
                    </div>
                    <div>
                      <div className="font-semibold text-white">6. og:image</div>
                      <div className="text-[10px] text-[#0099FF] font-mono">Social Meta Tag</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Status & Actions */}
              <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={clearProfilePhotos}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-rose-950/60 hover:bg-rose-900/80 text-rose-300 border border-rose-500/40 text-xs font-semibold transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                  <span>Delete Current Profile Photos</span>
                </button>

                <div className="flex items-center gap-2">
                  {isPhotoLocked && (
                    <span className="inline-flex items-center gap-1 text-xs text-emerald-400 font-medium mr-2">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Real Photo Locked</span>
                    </span>
                  )}
                  <button
                    type="button"
                    onClick={() => setIsPhotoModalOpen(false)}
                    className="px-5 py-2 rounded-xl bg-[#0099FF] hover:bg-[#0080D6] text-white text-xs font-semibold transition-colors"
                  >
                    Done
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
