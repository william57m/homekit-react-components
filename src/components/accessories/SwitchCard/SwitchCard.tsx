import React, { FC, ReactNode } from 'react';

import { SwitchType } from '../../../types';
import { AccessoryCard } from '../../common/cards/AccessoryCard';
import { useSwitchIcon, useSwitchLabel } from '../../common/hooks';

export { SwitchType };


interface SwitchCardProps {
  /** State of the switch */
  readonly on: boolean;
  /** Type of the switch */
  readonly type: SwitchType;
  /** Name of the switch */
  readonly name: string;
  /** Action triggered on press */
  readonly onToggle?: () => void;
  /** Custom icon for active state */
  readonly iconActive?: ReactNode;
  /** Custom icon for inactive state */
  readonly iconInactive?: ReactNode;
  /** Custom label for active state */
  readonly labelActive?: string;
  /** Custom label for inactive state */
  readonly labelInactive?: string;
}

export const SwitchCard: FC<SwitchCardProps> = ({
  on,
  type,
  name,
  onToggle,
  iconActive,
  iconInactive,
  labelActive = 'On',
  labelInactive = 'Off',
}) => {
  const {
    labelActive: switchLabelActive,
    labelInactive: switchLabelInactive,
  } = useSwitchLabel(type, labelActive, labelInactive);

  const {
    iconActive: switchIconActive,
    iconInactive: switchIconInactive,
  } = useSwitchIcon(type, iconActive, iconInactive);

  const stateLabel = on ? switchLabelActive : switchLabelInactive;

  return (
    <AccessoryCard
      iconActive={switchIconActive}
      iconInactive={switchIconInactive}
      name={name}
      state={stateLabel}
      isActive={on}
      handlePress={onToggle}
    />
  );
};
