import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { theme } from '../src/style/theme';
import '../src/font.css';

export default function Provider({ children }) {
  return (
    <div style={{background: '#404040', padding: '10px'}}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </div>
  );
}
