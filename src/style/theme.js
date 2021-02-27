const colors = {
  textLight: '#FFFFFF',
  textMedium: '#808080',
  textGray: '#404040',
  textDark: '#000000',

  backgroundActive: '#FFFFFFFF',
  backgroundInactive: '#FFFFFF60',

  lightActive: '#ECC344',
  lightInactive: '#404040',

  defaultLight: '#F8CC46',
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
      colorActive: colors.textDark + 'FF',
      colorInactive: colors.textDark + 'A0',
    },
    state: {
      size: '12px',
      weight: 'bold',
      colorActive: colors.textMedium + 'FF',
      colorInactive: colors.textGray + 'A0',
    },
    light: {
      colorActive: colors.lightActive,
      colorInactive: colors.lightInactive,
    },
  },
  modal: {
    background: colors.backgroundActive,
    header: {
      title: {
        size: '12px',
        weight: 'bold',
        color: colors.textDark,
      },
      subtitle: {
        size: '12px',
        weight: 'bold',
        color: colors.textMedium,
      },
    },
  },
};
