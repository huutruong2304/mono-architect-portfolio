'use client';

import { Toaster } from 'react-hot-toast';

export default function ToastProvider() {
  return (
    <Toaster
      position="bottom-right"
      toastOptions={{
        duration: 3000,
        style: {
          background: 'var(--color-ink)',
          color: '#ffffff',
          fontSize: '0.75rem',
        },
        success: {
          iconTheme: {
            primary: 'var(--color-primary)',
            secondary: '#ffffff',
          },
        },
      }}
    />
  );
}
