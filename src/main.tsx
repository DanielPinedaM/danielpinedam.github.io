import { ThemeProvider } from 'next-themes';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from '@/App';
import '@/css/global.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/*
    tema oscuro y claro
    https://www.npmjs.com/package/next-themes */}
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
      enableColorScheme={true}
      disableTransitionOnChange
    >
      <App />
    </ThemeProvider>
  </StrictMode>
);
