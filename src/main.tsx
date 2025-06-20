import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { Toaster } from 'sonner'; // ✅ Import toast system
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <>
      <App />
      <Toaster richColors position="top-center" /> {/* ✅ Enables toast messages */}
    </>
  </StrictMode>
);
