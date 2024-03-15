import { create } from 'zustand';
import { ThemeMode } from '@/app/lib/theme/theme';
import { createJSONStorage, persist } from 'zustand/middleware';

export const useThemeModeStore = create<Record<'mode', ThemeMode>>()(
  persist((_) => ({ mode: 'light' }), {
    name: 'theme-mode',
    storage: createJSONStorage(() => localStorage),
  }),
);
