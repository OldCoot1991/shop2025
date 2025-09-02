import type { Preview } from '@storybook/nextjs-vite'

// Сначала объявляем кастомные viewports
const tableViewports = {
  // Desktop / Laptop
  desktop_1920x1080: {
    name: 'Desktop 1920x1080 (Full HD)',
    styles: { width: '1920px', height: '1080px' },
  },
  desktop_1680x1050: {
    name: 'Laptop 1680x1050',
    styles: { width: '1680px', height: '1050px' },
  },
  desktop_1600x900: {
    name: 'Desktop 1600x900',
    styles: { width: '1600px', height: '900px' },
  },
  desktop_1536x864: {
    name: 'Laptop 1536x864 (Retina-ish)',
    styles: { width: '1536px', height: '864px' },
  },
  desktop_1440x900: {
    name: 'Laptop 1440x900',
    styles: { width: '1440px', height: '900px' },
  },
  desktop_1366x768: {
    name: 'Laptop 1366x768',
    styles: { width: '1366px', height: '768px' },
  },
  desktop_1280x800: {
    name: 'Desktop 1280x800',
    styles: { width: '1280px', height: '800px' },
  },
  desktop_1280x720: {
    name: 'Laptop 1280x720',
    styles: { width: '1280px', height: '720px' },
  },

  // High-resolution desktop / large displays (added)
  desktop_2k_2048x1152: {
    name: 'Desktop 2K (2048x1152)',
    styles: { width: '2048px', height: '1152px' },
  },
  desktop_2k_2560x1440: {
    name: 'Desktop 2.5K (2560x1440)',
    styles: { width: '2560px', height: '1440px' },
  },
  desktop_4k_3840x2160: {
    name: 'Desktop 4K (3840x2160)',
    styles: { width: '3840px', height: '2160px' },
  },
  desktop_5k_5120x2880: {
    name: 'Desktop 5K (5120x2880)',
    styles: { width: '5120px', height: '2880px' },
  },
  desktop_8k_7680x4320: {
    name: 'Desktop 8K (7680x4320)',
    styles: { width: '7680px', height: '4320px' },
  },

  // Android
  galaxy_note9: {
    name: 'Samsung Galaxy Note 9 (360x740 vp)',
    styles: { width: '360px', height: '740px' },
  },
  galaxy_note5: {
    name: 'Samsung Galaxy Note 5 (480x853 vp)',
    styles: { width: '480px', height: '853px' },
  },
  galaxy_s8: {
    name: 'Samsung Galaxy S8 (360x740 vp)',
    styles: { width: '360px', height: '740px' },
  },
  galaxy_s9p: {
    name: 'Samsung Galaxy S9+ (320x658 vp)',
    styles: { width: '320px', height: '658px' },
  },
  galaxy_s3: {
    name: 'Samsung Galaxy S III (360x640 vp)',
    styles: { width: '360px', height: '640px' },
  },
  galaxy_a51_71: {
    name: 'Samsung Galaxy A51/A71 (412x914 vp)',
    styles: { width: '412px', height: '914px' },
  },
  pixel_2_xl: {
    name: 'Google Pixel 2 XL (411x823 vp)',
    styles: { width: '411px', height: '823px' },
  },
  pixel_2: {
    name: 'Google Pixel 2 (411x731 vp)',
    styles: { width: '411px', height: '731px' },
  },

  // iOS
  iphone_6_7_8: {
    name: 'iPhone 6/7/8 (375x667 vp)',
    styles: { width: '375px', height: '667px' },
  },
  iphone_6_7_8_plus: {
    name: 'iPhone 6/7/8 Plus (414x736 vp)',
    styles: { width: '414px', height: '736px' },
  },
  iphone_se: {
    name: 'iPhone SE (375x667 vp)',
    styles: { width: '375px', height: '667px' },
  },
  iphone_x: {
    name: 'iPhone X (375x812 vp)',
    styles: { width: '375px', height: '812px' },
  },
  iphone_xr: {
    name: 'iPhone XR (414x896 vp)',
    styles: { width: '414px', height: '896px' },
  },
  iphone_12_pro: {
    name: 'iPhone 12 Pro (390x844 vp)',
    styles: { width: '390px', height: '844px' },
  },

  // Дополнительные "минимальные" точки
  mobile_min_320: {
    name: 'Mobile min portrait 320px',
    styles: { width: '320px', height: '800px' },
  },
  mobile_min_375: {
    name: 'Mobile min portrait 375px',
    styles: { width: '375px', height: '800px' },
  },
  mobile_common_335: {
    name: 'Common mobile 335px',
    styles: { width: '335px', height: '800px' },
  },

  // Рекомендованный viewport
  recommended_1200x720: {
    name: 'Recommended 1200x720 vp',
    styles: { width: '1200px', height: '720px' },
  },
}

// Затем используем его в preview
const preview: Preview = {
  parameters: {
    viewport: {
      options: {
        ...tableViewports,
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo',
    },
  },
}

export default preview