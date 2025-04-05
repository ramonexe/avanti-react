export const theme = {
  colors: {
    primary: '#FFB218',
    primaryHover: '#D98E04',
    backgroundLight: '#FFFBED',
    backgroundDark: '#0D0D0D',
    text: '#333333',
    disabled: '#D3D3D3',
  },
} as const

export type Theme = typeof theme