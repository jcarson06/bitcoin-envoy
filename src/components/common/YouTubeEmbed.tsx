import React, { useState } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { logger } from '@/utils/logger';

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

  // Extract video ID from YouTube URL or validate direct ID
  const extractVideoId = (input: string): string | null => {
    if (!input) return null;
    
    // If it's already a video ID format, return it
    if (/^[a-zA-Z0-9_-]{10,12}$/.test(input)) {
      return input;
    }
    
    // Extract from various YouTube URL formats
    const patterns = [
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{10,12})/,
      /youtube\.com\/v\/([a-zA-Z0-9_-]{10,12})/,
      /youtube\.com\/shorts\/([a-zA-Z0-9_-]{10,12})/
    ];
    
    for (const pattern of patterns) {
      const match = input.match(pattern);
      if (match) {
        return match[1];
      }
    }
    
    return null;
  };

  const validVideoId = extractVideoId(videoId);

  if (!validVideoId) {
    const message = videoId.includes('youtube.com') || videoId.includes('youtu.be') 
      ? 'Unable to extract video ID from YouTube URL' 
      : 'Invalid YouTube video ID format';
    
    logger.warn('YouTube embed validation failed', { 
      originalInput: videoId, 
      reason: message 
    });

    return (
      <div className={`relative w-full ${className}`}>
        <div className="aspect-video flex items-center justify-center bg-muted rounded-xl">
          <div className="text-center p-4">
            <p className="text-muted-foreground text-sm">{message}</p>
            <p className="text-muted-foreground text-xs mt-1">
              Expected: YouTube video ID or valid YouTube URL
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (hasError) {
    logger.warn('YouTube iframe failed to load', { 
      videoId: validVideoId, 
      originalInput: videoId 
    });
    
    return (
      <div className={`relative w-full ${className}`}>
        <div className="aspect-video flex items-center justify-center bg-muted rounded-xl">
          <div className="text-center p-4">
            <p className="text-muted-foreground text-sm">Failed to load video</p>
            <p className="text-muted-foreground text-xs mt-1">
              The video may be unavailable or restricted
            </p>
          </div>
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
          src={`https://www.youtube.com/embed/${validVideoId}`}
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