import { definePreset } from '@primeuix/themes'
import Aura from '@primeuix/themes/aura'

const colors = {
  purple: '#6F73EE',
  black: '#282739',
  gray600: '#5D6C7B',
  background: '#F4F7FB',
  coral: '#EE685F',
  green: '#75D14A',
  orange: '#F3A712'
}

const MyPreset = definePreset(Aura, {
  semantic: {
    colorScheme: {
      light: {
        primary: {
          color: colors.purple,
          contrastColor: '#ffffff',
          hoverColor: '#5F63E0',
          activeColor: '#5B5FE8'
        },
        surface: {
          ground: colors.background,
          section: '#ffffff',
          card: '#ffffff',
          overlay: '#ffffff'
        },
        text: {
          color: colors.black,
          secondaryColor: colors.gray600
        },
        accent: {
          color: colors.coral
        },
        success: {
          color: colors.green
        },
        warning: {
          color: colors.orange
        },
        danger: {
          color: colors.coral
        },
        info: {
          color: colors.purple
        }
      },
      dark: {
        primary: {
          color: '#7B80FF',       // slightly lighter purple for dark
          contrastColor: '#ffffff',
          hoverColor: '#8C90FF',
          activeColor: '#A2A6FF'
        },
        surface: {
          ground: '#1C1C28',
          section: '#232336',
          card: '#2C2C40',
          overlay: '#2A2A3D'
        },
        text: {
          color: '#F4F7FB',
          secondaryColor: '#A0A3B0'
        },
        accent: {
          color: '#EE685F'
        },
        success: {
          color: '#75D14A'
        },
        warning: {
          color: '#F3A712'
        },
        danger: {
          color: '#EE685F'
        },
        info: {
          color: '#7B80FF'
        }
      }
    }
  }
})

export const prime_options = {
  theme: {
    preset: MyPreset,
    options: {
      prefix: 'p',
      darkModeSelector: 'system',
      cssLayer: false
    },
    ripple: true
  }
}