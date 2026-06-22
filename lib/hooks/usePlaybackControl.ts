// usePlaybackControl Hook

'use client';

import { useEffect, useState, useCallback } from 'react';
import { playbackController } from '@/lib/playback/PlaybackController';
import { PlatformType } from '@/types/playlist';
import { PlayerState } from '@/types/player';

export function usePlaybackControl(
  id: string,
  platform: PlatformType,
  canControl: boolean = false
) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [allStates, setAllStates] = useState<Map<string, PlayerState>>(new Map());

  useEffect(() => {
    // Register this player
    playbackController.register(id, platform, canControl);

    // Subscribe to state changes
    const unsubscribe = playbackController.subscribe((states) => {
      setAllStates(new Map(states));
      const state = states.get(id);
      if (state) {
        setIsPlaying(state.isPlaying);
      }
    });

    // Cleanup
    return () => {
      unsubscribe();
      playbackController.unregister(id);
    };
  }, [id, platform, canControl]);

  const handlePlay = useCallback(() => {
    playbackController.play(id);
  }, [id]);

  const handlePause = useCallback(() => {
    playbackController.pause(id);
  }, [id]);

  const handleToggle = useCallback(() => {
    if (isPlaying) {
      handlePause();
    } else {
      handlePlay();
    }
  }, [isPlaying, handlePlay, handlePause]);

  return {
    isPlaying,
    handlePlay,
    handlePause,
    handleToggle,
    allStates,
  };
}
