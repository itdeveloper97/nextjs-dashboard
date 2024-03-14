'use client';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';
import { theme } from '@/app/lib/theme/theme';
import { PropsWithChildren } from 'react';

export function ThemeProvider({ children }: PropsWithChildren) {
  return (
    <StyledComponentsThemeProvider theme={theme}>
      {children}
    </StyledComponentsThemeProvider>
  );
}
