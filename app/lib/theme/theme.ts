import { DefaultTheme } from 'styled-components';

export type ThemeMode = 'light' | 'dark';
export const themes: Record<ThemeMode, DefaultTheme> = {
  light: {
    color: {
      primary: '#FFFFFF',
      warning: '#FFFFFF',
      secondary: '#FFFFFF',
    },
    bgColor: {
      primary: '#3B63B8',
      warning: '#FC6E6E',
      secondary: '#ECF7FF',
    },
    spacing: {
      sp4: '4px',
      sp8: '8px',
      sp12: '12px',
    },
    radius: {
      r12: '12px',
    },
  },
  dark: {
    color: {
      primary: '#FFFFFF',
      warning: '#FFFFFF',
      secondary: '#FFFFFF',
    },
    bgColor: {
      primary: 'black',
      warning: 'black',
      secondary: 'black',
    },
    spacing: {
      sp4: '4px',
      sp8: '8px',
      sp12: '12px',
    },
    radius: {
      r12: '12px',
    },
  },
};
