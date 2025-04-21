import type { Metadata } from 'next';
import '@/styles/global.scss';
import StoreProvider from '@/components/provider/StoreProvider';
import { spoqa } from '@/styles/fonts';
import { ReactNode } from 'react';
import MswProvider from '@/components/provider/MswProvider';
import ReactQueryProvider from '@/components/provider/QueryClientProvider';

export const metadata: Metadata = {
  title: '조여진 과제',
  description: '조여진 과제 사이트입니다.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={spoqa.variable}>
        <ReactQueryProvider>
          <MswProvider>
            <StoreProvider> {children}</StoreProvider>
          </MswProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
