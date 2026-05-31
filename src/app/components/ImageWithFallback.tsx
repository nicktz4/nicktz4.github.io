import { useState } from 'react';

export function ImageWithFallback({
  src,
  alt,
  className = '',
  fallback = 'https://via.placeholder.com/400x300?text=Image+Not+Available'
}: {
  src: string;
  alt: string;
  className?: string;
  fallback?: string;
}) {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      onError={() => setImgSrc(fallback)}
    />
  );
}
