import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { theme } from './style/theme';
import './font.css';

export default function Provider({ children }) {
  return (
    <div style={{background: '#404040', padding: '20px'}}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </div>
  );
}
