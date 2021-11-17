import React, { FC, ReactNode } from 'react';

import OutletIconSrc from '../../../resources/icons/outlet-on.png';
import { AccessoryCard } from '../../common/cards/AccessoryCard';


const OutletIcon = () => <img src={OutletIconSrc} />;

interface SwitchCardProps {
  /** Custom icon for the switch */
  readonly icon?: ReactNode;
  /** Name of the switch */
  readonly name: string;
  /** Action triggered on press */
  readonly onToggle?: () => void;
  /** State of the switch */
  readonly on: boolean;
}

export const SwitchCard: FC<SwitchCardProps> = ({
  icon,
  name,
  on,
  onToggle,
}) => {

  const stateLabel = on ? 'On' : 'Off';

  return (
    <AccessoryCard
      icon={
        icon ?
          icon : <OutletIcon />
      }
      name={name}
      state={stateLabel}
      isActive={on}
      handlePress={onToggle}
    />
  );
};
