import localFont from 'next/font/local';

export const spoqa = localFont({
  src: [
    {
      path: '../../public/fonts/SpoqaHanSansNeo-Thin.ttf',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../../public/fonts/SpoqaHanSansNeo-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/SpoqaHanSansNeo-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/SpoqaHanSansNeo-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/SpoqaHanSansNeo-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-spoqa',
  display: 'swap',
});
