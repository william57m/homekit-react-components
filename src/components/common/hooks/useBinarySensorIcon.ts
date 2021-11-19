import { ReactNode } from 'react';
import { getBinarySensorIcon } from '../../icons';
import { BinarySensorType } from '../../../types';


type UseBinarySensorIconProps = (type: BinarySensorType, iconActive: ReactNode, iconInactive: ReactNode)
  => { iconActive: ReactNode, iconInactive: ReactNode };

export const useBinarySensorIcon: UseBinarySensorIconProps = (type, iconActive, iconInactive) => {
  if (type === BinarySensorType.CUSTOM) {
    return { iconActive, iconInactive };
  }
  return getBinarySensorIcon(type);
};
