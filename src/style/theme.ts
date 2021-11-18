export interface Colors {
  [key: string]: string;
}

export interface Theme {
  colors: Colors,
  card: any,
  cameraCard: any,
  sceneCard: any,
  sensorCard: any,
  modal: any,
  layout: any,
}

const colors: Colors = {
  light1: '#FFFFFF',
  light2: '#F0F0F0',
  lightGray: '#808080',
  gray: '#404040',
  dark: '#000000',

  green: '#3DCC2A',

  backgroundActive: '#FFFFFFFF',
  backgroundInactive: '#FFFFFF60',

  lightActive: '#F8CC46',
  lightInactive: '#404040',
};

export const theme: Theme = {
  colors: colors,
  card: {
    size: '100px',
    borderRadius: '12px',
    background: {
      colorActive: colors.backgroundActive,
      colorInactive: colors.backgroundInactive,
    },
    name: {
      size: '12px',
      weight: 'bold',
      colorActive: colors.dark + 'FF',
      colorInactive: colors.dark + 'A0',
    },
    state: {
      size: '12px',
      weight: 'bold',
      colorActive: colors.lightGray + 'FF',
      colorInactive: colors.gray + 'A0',
    },
    light: {
      colorActive: colors.lightActive,
      colorInactive: colors.lightInactive,
    },
  },
  cameraCard: {
    width: '396px',
    height: '240px',
  },
  sensorCard: {
    state: {
      colorActive: '#DB5242',
      colorInactive: colors.gray + 'A0',
    },
  },
  sceneCard: {
    width: '206px',
    height: '48px',
    name: {
      size: '14px',
      weight: 600,
    },
  },
  modal: {
    background: colors.backgroundActive,
    header: {
      title: {
        size: '12px',
        weight: 'bold',
        color: colors.dark,
      },
      subtitle: {
        size: '12px',
        weight: 'bold',
        color: colors.lightGray,
      },
    },
  },
  layout: {
    title: {
      size: '20px',
      weight: '200',
      color: colors.light1,
    },
  },
};
