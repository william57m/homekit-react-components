import { getSwitchLabel } from '../../../strings';
import { SwitchType } from '../../../types';


type UseSwitchLabelProps = (type: SwitchType, labelActive: string, labelInactive: string)
  => { labelActive: string, labelInactive: string };

export const useSwitchLabel: UseSwitchLabelProps = (type, labelActive, labelInactive) => {
  if (type === SwitchType.CUSTOM) {
    return { labelActive, labelInactive };
  }
  return getSwitchLabel(type);
};
