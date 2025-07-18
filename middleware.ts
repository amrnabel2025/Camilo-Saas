import createMiddleware from 'next-intl/middleware';
import { routing } from '@/libs/i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(ar|en)/:path*'],
};
