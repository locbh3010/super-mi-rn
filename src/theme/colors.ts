/**
 * Charcoal-neutral dark palette with amber primary + pink accent.
 * The ONLY file allowed to hold literal color values — everything else
 * reads these through theme tokens. Tuned to a warm, modern dark UI:
 * low-contrast borders, neutral surfaces (no color tint), amber CTAs.
 */
export const darkColors = {
  // Amber / yellow brand
  primary: '#FFCA28',
  onPrimary: '#1A1A1D',
  primaryContainer: '#5A4A12',
  onPrimaryContainer: '#FFE9A8',

  // Warm grey secondary (neutral chips / tonal)
  secondary: '#D8C9A8',
  onSecondary: '#2A2519',
  secondaryContainer: '#3A3526',
  onSecondaryContainer: '#F1E4C4',

  // Pink / coral accent
  tertiary: '#F06292',
  onTertiary: '#3A0E1E',
  tertiaryContainer: '#5C2238',
  onTertiaryContainer: '#FFD9E2',

  error: '#FF8A80',
  onError: '#3A0906',
  errorContainer: '#5C150F',
  onErrorContainer: '#FFDAD5',

  // Neutral charcoal surfaces (no color tint)
  background: '#0F0F10',
  onBackground: '#ECEAE6',

  surface: '#0F0F10',
  onSurface: '#ECEAE6',
  surfaceVariant: '#26262A',
  onSurfaceVariant: '#A8A6A1',
  surfaceDisabled: 'rgba(236, 234, 230, 0.12)',
  onSurfaceDisabled: 'rgba(236, 234, 230, 0.38)',

  // Subtle, low-contrast borders (the fix for "thô / quá sáng")
  outline: '#3A3A40',
  outlineVariant: '#2A2A2E',

  inverseSurface: '#ECEAE6',
  inverseOnSurface: '#2C2C2F',
  inversePrimary: '#7A6300',

  shadow: '#000000',
  scrim: '#000000',
  backdrop: 'rgba(0, 0, 0, 0.5)',

  elevation: {
    level0: 'transparent',
    level1: '#17171A',
    level2: '#1C1C20',
    level3: '#212126',
    level4: '#24242A',
    level5: '#28282F',
  },
} as const;
