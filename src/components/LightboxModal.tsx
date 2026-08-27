import React from 'react';

interface LightboxProps {
  isOpen: boolean;
  imageSrc: string;
  imageTitle: string;
  onClose: () => void;
}

export default function LightboxModal({ isOpen, imageSrc, imageTitle, onClose }: LightboxProps) {
  if (!isOpen) return null;

  return (
    <div
      id="lightbox"
      className="lightbox active fixed inset-0 bg-black/94 z-[5000] flex items-center justify-center p-[30px]"
      onClick={onClose}
    >
      <button
        className="lightbox-close absolute top-5 right-[25px] w-[45px] h-[45px] rounded-full border border-white bg-black/50 text-white text-[25px] cursor-pointer flex items-center justify-center hover:border-[#00d9ff] hover:text-[#00d9ff]"
        onClick={onClose}
      >
        ×
      </button>
      <img
        id="lightboxImage"
        src={imageSrc}
        alt={imageTitle}
        className="max-w-[90vw] max-h-[85vh] object-contain rounded-[10px] shadow-[0_20px_70px_rgba(0,0,0,.7)]"
      />
      <div id="lightboxNumber" className="lightbox-number absolute bottom-[25px] left-1/2 -translate-x-1/2 bg-black/65 px-[15px] py-[7px] rounded-[20px] text-[#00d9ff] font-bold text-sm">
        {imageTitle}
      </div>
    </div>
  );
}
