import { create } from 'zustand';

export interface AdventureLog {
  id: string;
  title: string;
  icon: string;
  timestamp: Date;
}

interface AdventureState {
  adventures: AdventureLog[];
  addAdventure: (title: string) => void;
}

export const useAdventures = create<AdventureState>((set) => ({
  adventures: [],
  addAdventure: (title: string) => {
    if (title.trim() === '') {
      return;
    }
    const newAdventure: AdventureLog = {
      id: Math.random().toString(),
      title,
      icon: 'sparkles', // Default icon
      timestamp: new Date(),
    };
    set((state) => ({ adventures: [newAdventure, ...state.adventures] }));
  },
}));
