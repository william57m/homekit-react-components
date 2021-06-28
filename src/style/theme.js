const colors = {
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

export const theme = {
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
};
