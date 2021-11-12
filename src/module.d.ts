import '@emotion/react';

declare module '@emotion/react' {
  interface Colors {
    [key: string]: string;
  }

  export interface Theme {
    colors: Colors,
    card: any,
    cameraCard: any,
    sceneCard: any,
    modal: any,
  }
}
