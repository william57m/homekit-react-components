import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { theme } from '../src/style/theme';
import '../src/style/font.css';

export default function Provider({ children }) {
  return (
    <div style={{background: '#E0E0E0', padding: '10px'}}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </div>
  );
}
