'use client';

import { ReactNode, useEffect, useState } from 'react';
import { initMSW } from '@/mocks';

export default function MswProvider({ children }: { children: ReactNode }) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const init = async () => {
      await initMSW();
      setIsReady(true);
    };

    init();
  }, []);

  if (!isReady) return null;

  return <>{children}</>;
}
