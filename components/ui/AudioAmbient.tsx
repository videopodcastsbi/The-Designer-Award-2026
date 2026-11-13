"use client";

import React, { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

export const AudioAmbient: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const playerRef = useRef<any>(null);

  useEffect(() => {
    // 1. Load YouTube IFrame API if not already present
    if (!window.YT) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag?.parentNode?.insertBefore(tag, firstScriptTag);
    }

    const initPlayer = () => {
      if (playerRef.current) return;

      playerRef.current = new window.YT.Player("youtube-bg-audio", {
        height: "1",
        width: "1",
        videoId: "RJHOmmg5kqY",
        playerVars: {
          autoplay: 1,
          loop: 1,
          playlist: "RJHOmmg5kqY",
          controls: 0,
          disablekb: 1,
          enablejsapi: 1,
          fs: 0,
          iv_load_policy: 3,
          modestbranding: 1,
          rel: 0,
        },
        events: {
          onReady: (event: any) => {
            try {
              event.target.setVolume(70);
              event.target.playVideo();
              setIsPlaying(true);
              setIsMuted(false);
            } catch (err) {
              console.log("Autoplay waiting for user gesture", err);
            }
          },
          onStateChange: (event: any) => {
            if (event.data === 1) {
              setIsPlaying(true);
              setIsMuted(false);
            } else if (event.data === 2) {
              setIsPlaying(false);
            }
          },
        },
      });
    };

    if (window.YT && window.YT.Player) {
      initPlayer();
    } else {
      window.onYouTubeIframeAPIReady = initPlayer;
    }

    // 2. Play on first interaction if autoplay was blocked by browser
    const handleFirstInteraction = () => {
      if (playerRef.current && typeof playerRef.current.playVideo === "function") {
        try {
          playerRef.current.unMute();
          playerRef.current.playVideo();
          setIsPlaying(true);
          setIsMuted(false);
        } catch {}
      }
    };

    window.addEventListener("pointerdown", handleFirstInteraction, { once: true });
    window.addEventListener("keydown", handleFirstInteraction, { once: true });
    window.addEventListener("scroll", handleFirstInteraction, { once: true });

    return () => {
      window.removeEventListener("pointerdown", handleFirstInteraction);
      window.removeEventListener("keydown", handleFirstInteraction);
      window.removeEventListener("scroll", handleFirstInteraction);
    };
  }, []);

  const toggleSound = () => {
    if (!playerRef.current) return;

    if (isPlaying && !isMuted) {
      try {
        playerRef.current.mute();
        playerRef.current.pauseVideo();
      } catch {}
      setIsMuted(true);
      setIsPlaying(false);
    } else {
      try {
        playerRef.current.unMute();
        playerRef.current.playVideo();
      } catch {}
      setIsMuted(false);
      setIsPlaying(true);
    }
  };

  return (
    <>
      {/* Hidden YouTube Audio IFrame */}
      <div
        aria-hidden="true"
        className="fixed top-0 left-0 w-px h-px opacity-0 pointer-events-none -z-50 overflow-hidden"
      >
        <div id="youtube-bg-audio" />
      </div>

      {/* Single Navbar Sound Button */}
      <button
        onClick={toggleSound}
        title={isPlaying && !isMuted ? "Mute Background Music" : "Play Background Music"}
        aria-label="Toggle background music"
        className={`group relative flex items-center gap-2 px-3.5 py-1.5 rounded-full border transition-all duration-300 text-xs font-mono backdrop-blur-md ${
          isPlaying && !isMuted
            ? "border-electric/60 bg-surface-elevated text-white shadow-[0_0_15px_rgba(7,91,255,0.3)]"
            : "border-surface-border hover:border-white/40 bg-surface/70 text-metallic-muted hover:text-white"
        }`}
      >
        <div className="relative flex items-center justify-center">
          {isPlaying && !isMuted ? (
            <>
              <span className="absolute -inset-1 rounded-full bg-electric/30 animate-ping opacity-60" />
              <Volume2 className="w-3.5 h-3.5 text-electric-cyan animate-pulse" />
            </>
          ) : (
            <VolumeX className="w-3.5 h-3.5 text-metallic-muted group-hover:text-white transition-colors" />
          )}
        </div>

        <span className="text-[11px] uppercase tracking-wider font-semibold select-none">
          SOUND
        </span>

        {isPlaying && !isMuted && (
          <span className="flex items-end gap-0.5 ml-0.5 h-3">
            <span className="w-0.5 h-2 bg-electric-cyan rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
            <span className="w-0.5 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
            <span className="w-0.5 h-1.5 bg-electric-cyan rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
          </span>
        )}
      </button>
    </>
  );
};
