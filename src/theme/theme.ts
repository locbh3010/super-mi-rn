import { MD3DarkTheme } from 'react-native-paper';
import { darkColors } from './colors';

/**
 * Shared radius scale. `pill` is used for large CTAs (full rounded);
 * `input`/`card` give consistent MD3-expressive corners across the app.
 * Centralized so corner radii never get hardcoded per component.
 */
export const radii = {
  sm: 8,
  input: 16,
  card: 28,
  pill: 999,
} as const;

/** 4pt spacing scale — centralized so gaps/padding stay consistent. */
export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
} as const;

/** Component sizing tokens. */
export const sizes = {
  inputHeight: 60,
  buttonPaddingV: 6,
} as const;

/**
 * App theme = MD3 dark structural base (fonts, animation, isV3) with our own
 * violet palette and larger roundness for a soft, modern MD3 feel.
 * Raw MD3DarkTheme is referenced ONLY here — never consumed elsewhere.
 */
export const appTheme = {
  ...MD3DarkTheme,
  dark: true,
  roundness: 4,
  radii,
  spacing,
  sizes,
  colors: {
    ...MD3DarkTheme.colors,
    ...darkColors,
  },
} as const;

export type AppTheme = typeof appTheme;
