import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import React, { FC, ReactNode } from 'react';

import { theme } from './theme';
import './font.css';

export const ThemeProvider: FC<{children: ReactNode}> = ({ children }) => {
  return (
    <EmotionThemeProvider theme={theme}>
      {children}
    </EmotionThemeProvider>
  );
};
