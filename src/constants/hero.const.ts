export const HERO: Record<'intro' | 'cta' | 'ctaHref', string> &
  Record<'words', string[]> &
  Record<'period', number> = {
  intro: 'Yo soy...',
  words: ['ingeniero de sistemas', 'desarrollador frontend y móvil'],
  period: 2000,
  cta: 'Contáctame',
  ctaHref: '#contactame',
};

export const HERO_VIDEO: Record<'mobile' | 'desktop', string> = {
  mobile: '/assets/video/background_video_mobile.mp4',
  desktop: '/assets/video/background_video_desktop.mp4',
};
