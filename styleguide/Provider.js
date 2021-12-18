import React from 'react';

import { ThemeProvider } from '../src/style/ThemeProvider';

export default function Provider({ children }) {
  return (
    <div style={{background: '#E0E0E0', padding: '10px'}}>
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </div>
  );
}
