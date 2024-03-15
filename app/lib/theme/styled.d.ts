import 'styled-components';

export type BGColorKeys = 'primary' | 'warning' | 'secondary';
export type ColorKeys = 'primary' | 'warning' | 'secondary';
export type SpacingKeys = 'sp4' | 'sp8' | 'sp12';
export type RadiusKeys = 'r12';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: Record<ColorKeys, string>;
    spacing: Record<SpacingKeys, string>;
    radius: Record<RadiusKeys, string>;
    bgColor: Record<BGColorKeys, string>;
  }
}
