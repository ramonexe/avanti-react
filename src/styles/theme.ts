export const theme = {
  colors: {
    primary: '#007bff',
    primaryHover: '#D98E04',
    backgroundLight: '#FFFBED',
    backgroundDark: '#0D0D0D',
    text: '#fefefe',
  },
} as const

export type Theme = typeof theme