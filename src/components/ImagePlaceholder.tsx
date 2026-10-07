import React, { useState } from "react";
import { Image as ImageIcon, UploadCloud } from "lucide-react";

interface ImagePlaceholderProps {
  src: string;
  fallbackSrc?: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  label?: string;
  targetUploadPath?: string;
}

export function ImagePlaceholder({
  src,
  fallbackSrc,
  alt,
  className = "",
  containerClassName = "",
  label,
  targetUploadPath,
}: ImagePlaceholderProps) {
  const [currentSrc, setCurrentSrc] = useState<string>(src);
  const [hasError, setHasError] = useState<boolean>(false);

  const handleError = () => {
    if (fallbackSrc && currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc);
    } else {
      setHasError(true);
    }
  };

  if (hasError) {
    return (
      <div
        className={`relative flex flex-col items-center justify-center p-6 text-center border-2 border-dashed border-amber-300 bg-amber-50/70 rounded-2xl text-slate-700 ${containerClassName}`}
      >
        <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center text-amber-700 mb-2">
          <ImageIcon className="w-6 h-6" />
        </div>
        <p className="text-xs font-bold text-slate-900">{label || alt}</p>
        {targetUploadPath && (
          <div className="mt-1 flex items-center gap-1 text-[11px] font-mono text-emerald-800 bg-emerald-100/80 px-2 py-0.5 rounded-md">
            <UploadCloud className="w-3 h-3 text-emerald-700" />
            <span>Upload to: {targetUploadPath}</span>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${containerClassName}`}>
      <img
        src={currentSrc}
        alt={alt}
        onError={handleError}
        className={`w-full h-full object-cover transition-opacity duration-300 ${className}`}
      />
    </div>
  );
}
