export const revalidateTime = Number(process.env.CAREERS_REVALIDATE_SECONDS) || 15 * 60;
export const ogDefaultUrl = `${process.env.SERVER_URL}/careers/og-default.jpg`;

export const locales = ['en', 'fr'];
export const defaultLocale = 'en';
