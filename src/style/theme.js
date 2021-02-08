const colors = {
  textLight: '#FFFFFFE0',
  textMedium: '#FFFFFF60',
  textGray: '#909090',
  textDark: '#000000D0',

  backgroundActive: '#FFFFFFFF',
  backgroundInactive: '#70707040',

  red: '#BD0909',
  green: '#38B700',
  blue: '#0094FF',

  lightActive: '#ECC344',
  fanActive: 'blue'
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
      colorActive: colors.textDark,
      colorInactive: colors.textMedium,
    },
    state: {
      size: '12px',
      weight: 'bold',
      colorActive: colors.textGray,
      colorInactive: colors.textGray,
    },
    light: {
      colorActive: colors.lightActive,
      colorInactive: colors.textMedium
    },
    fan: {
      colorActive: colors.fanActive,
      colorActive: colors.textMedium,
    }
  },
  badgeCount: {
    color: colors.red
  },
  title: {
    size: '20px',
    weight: '200',
    color: colors.textLight,
  },
};
