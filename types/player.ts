// Player Types

import { PlatformType } from './playlist';

export interface PlayerState {
  id: string;
  platform: PlatformType;
  isPlaying: boolean;
  canControl: boolean;
}

export interface PlayerController {
  register: (id: string, platform: PlatformType, canControl: boolean) => void;
  unregister: (id: string) => void;
  play: (id: string) => void;
  pause: (id: string) => void;
  pauseAll: () => void;
  pauseAllExcept: (exceptId: string) => void;
  getState: (id: string) => PlayerState | undefined;
  getAllStates: () => Map<string, PlayerState>;
}

export interface PlayerProps {
  id: string;
  embedUrl: string;
  platform: PlatformType;
  title: string;
  onPlayStateChange?: (isPlaying: boolean) => void;
}

export interface EmbedPlayerProps extends PlayerProps {
  className?: string;
}
