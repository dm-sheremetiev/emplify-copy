const BOARDS_BY_LOCALE = {
  en: process.env.GREENHOUSE_JOB_BOARD_TOKEN.split(','),
  fr: process.env.GREENHOUSE_JOB_BOARD_TOKEN_FR.split(',')
};

export function getBoardForLocale(locale: string): string[] {
  if (!BOARDS_BY_LOCALE[locale]) {
    throw new Error(`No Greenhouse board for the locale: ${locale}`);
  }
  return BOARDS_BY_LOCALE[locale];
}

export function getAlternateLocale(currentLocale: string): string {
  switch (currentLocale) {
    case 'en':
      return 'fr';
    case 'fr':
      return 'en';
    default:
      throw new Error(`Unsupported locale: ${currentLocale}`);
  }
}
