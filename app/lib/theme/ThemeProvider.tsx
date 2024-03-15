'use client';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';
import { PropsWithChildren } from 'react';
import { themes } from '@/app/lib/theme/theme';
import { useThemeModeStore } from '@/app/lib/theme/store/useThemeModeStore';
import useStore from '@/app/lib/zustand/hooks/useStore';

export function ThemeProvider({ children }: PropsWithChildren) {
  const mode = useStore(useThemeModeStore, (state) => state.mode);

  if (!mode) {
    return null;
  }

  return (
    <StyledComponentsThemeProvider theme={themes[mode]}>
      {children}
    </StyledComponentsThemeProvider>
  );
}
