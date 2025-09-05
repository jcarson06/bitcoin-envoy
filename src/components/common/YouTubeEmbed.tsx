import React, { useState } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

interface YouTubeEmbedProps {
  videoId: string;
  title?: string;
  className?: string;
}

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({ 
  videoId, 
  title = "YouTube video", 
  className = "" 
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // Basic validation for YouTube video ID
  const isValidVideoId = /^[a-zA-Z0-9_-]{11}$/.test(videoId);

  if (!isValidVideoId) {
    return (
      <div className={`relative w-full ${className}`}>
        <div className="aspect-video flex items-center justify-center bg-gray-100 rounded-xl">
          <p className="text-gray-500">Invalid video ID</p>
        </div>
      </div>
    );
  }

  if (hasError) {
    return (
      <div className={`relative w-full ${className}`}>
        <div className="aspect-video flex items-center justify-center bg-gray-100 rounded-xl">
          <p className="text-gray-500">Failed to load video</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative w-full ${className}`}>
      <div className="aspect-video">
        {isLoading && (
          <Skeleton className="absolute inset-0 w-full h-full rounded-xl" />
        )}
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
          className="absolute inset-0 w-full h-full rounded-xl shadow-elegant"
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setIsLoading(false);
            setHasError(true);
          }}
        />
      </div>
    </div>
  );
};

export default YouTubeEmbed;