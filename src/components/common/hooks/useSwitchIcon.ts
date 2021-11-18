import { ReactNode } from 'react';
import { getSwitchIcon } from '../../icons';
import { SwitchType } from '../../../types';


type UseSwitchIconProps = (type: SwitchType, iconActive: ReactNode, iconInactive: ReactNode)
  => { iconActive: ReactNode, iconInactive: ReactNode };

export const useSwitchIcon: UseSwitchIconProps = (type, iconActive, iconInactive) => {
  if (type === SwitchType.CUSTOM) {
    return { iconActive, iconInactive };
  }
  return getSwitchIcon(type);
};
