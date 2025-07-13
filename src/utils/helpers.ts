type RouterWithPush = {
  push: (pathname: string, options: { locale: string }) => void;
};

// Language switcher function
export const handleLanguageSwitch = (
  locale: string,
  pathname: string,
  router: RouterWithPush
) => {
  const newLocale = locale === "en" ? "ar" : "en";
  router.push(pathname, { locale: newLocale });
};

export const formatPathname = (pathname: string) => {
  if (pathname === '/') return 'Home'; // Handle root path
  return pathname
    .replace(/-/g, ' ') // Replace hyphens with spaces
    .replace(/\//g, '') // Remove slashes
    .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize first letter of each word
};
