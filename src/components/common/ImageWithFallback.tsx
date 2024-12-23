import React, { useState } from 'react';
import { validateImageUrl, getFallbackImage } from '../../utils/image';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  type?: 'destination' | 'hotel' | 'restaurant' | 'profile';
  className?: string;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  type = 'destination',
  className = ''
}) => {
  const [imgSrc, setImgSrc] = useState(validateImageUrl(src) ? src : getFallbackImage(type));
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError) {
      setImgSrc(getFallbackImage(type));
      setHasError(true);
    }
  };

  return (
    <img
      src={imgSrc}
      alt={alt}
      onError={handleError}
      className={`object-cover ${className}`}
    />
  );
};