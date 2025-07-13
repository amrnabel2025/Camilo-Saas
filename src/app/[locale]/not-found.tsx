import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function NotFound() {
  const t = useTranslations('NotFound'); // Load translations for this page

  return (
    <div className='flex min-h-screen flex-col items-center justify-center bg-gray-100 text-center'>
      <h1 className='text-6xl font-bold text-gray-800'>404</h1>
      <p className='mt-4 text-xl text-gray-600'>{t('message')}</p>
      <Link
        href='/'
        className='mt-6 rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700'
      >
        {t('homeButton')}
      </Link>
    </div>
  );
}
