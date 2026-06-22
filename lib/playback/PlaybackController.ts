// Playback Controller - Global Player State Management

import { PlatformType } from '@/types/playlist';
import { PlayerController, PlayerState } from '@/types/player';

class PlaybackControllerImpl implements PlayerController {
  private players: Map<string, PlayerState> = new Map();
  private listeners: Set<(states: Map<string, PlayerState>) => void> = new Set();

  register(id: string, platform: PlatformType, canControl: boolean = false): void {
    this.players.set(id, {
      id,
      platform,
      isPlaying: false,
      canControl,
    });
    this.notifyListeners();
  }

  unregister(id: string): void {
    this.players.delete(id);
    this.notifyListeners();
  }

  play(id: string): void {
    const player = this.players.get(id);
    if (!player) return;

    // Pause all other players first
    this.pauseAllExcept(id);

    // Set this player as playing
    this.players.set(id, { ...player, isPlaying: true });
    this.notifyListeners();
  }

  pause(id: string): void {
    const player = this.players.get(id);
    if (!player) return;

    this.players.set(id, { ...player, isPlaying: false });
    this.notifyListeners();
  }

  pauseAll(): void {
    this.players.forEach((player) => {
      if (player.isPlaying) {
        this.players.set(player.id, { ...player, isPlaying: false });
      }
    });
    this.notifyListeners();
  }

  pauseAllExcept(exceptId: string): void {
    this.players.forEach((player) => {
      if (player.id !== exceptId && player.isPlaying) {
        this.players.set(player.id, { ...player, isPlaying: false });
      }
    });
    this.notifyListeners();
  }

  getState(id: string): PlayerState | undefined {
    return this.players.get(id);
  }

  getAllStates(): Map<string, PlayerState> {
    return new Map(this.players);
  }

  subscribe(listener: (states: Map<string, PlayerState>) => void): () => void {
    this.listeners.add(listener);
    // Return unsubscribe function
    return () => {
      this.listeners.delete(listener);
    };
  }

  private notifyListeners(): void {
    this.listeners.forEach((listener) => {
      listener(this.getAllStates());
    });
  }
}

// Singleton instance
export const playbackController = new PlaybackControllerImpl();
