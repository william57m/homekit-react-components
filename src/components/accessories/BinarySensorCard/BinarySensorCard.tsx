import React, { FC, ReactNode } from 'react';

import DoorCloseIconSrc from '../../../resources/icons/door-closed.png';
import DoorOpenIconSrc from '../../../resources/icons/door-open.png';
import { AccessoryCard, AccessoryCardStatus } from '../../common/cards/AccessoryCard';
import styled from '@emotion/styled';


const DoorOpenIcon = () => <img src={DoorOpenIconSrc} />;
const DoorCloseIcon = () => <img src={DoorCloseIconSrc} />;

const SensorCard = styled(AccessoryCard)`
  ${AccessoryCardStatus} {
    color: ${props => props.isActive ? props.theme.sensorCard.state.colorActive : props.theme.sensorCard.state.colorInactive};
  }
`;

interface BinarySensorCardProps {
  /** Name of the switch */
  readonly name: string;
  /** State of the switch */
  readonly isActive: boolean;
  /** Custom icon for active state */
  readonly iconActive?: ReactNode;
  /** Custom icon for inactive state */
  readonly iconInactive?: ReactNode;
  /** Label active */
  readonly labelActive?: string;
  /** Label inactive */
  readonly labelInactive?: string;
}

export const BinarySensorCard: FC<BinarySensorCardProps> = ({
  name,
  isActive,
  iconActive,
  iconInactive,
  labelActive = 'Open',
  labelInactive = 'Closed',
}) => {
  const stateLabel = isActive ? labelActive : labelInactive;
  const icon = isActive ? iconActive || <DoorOpenIcon /> : iconInactive || <DoorCloseIcon />;

  return (
    <SensorCard
      icon={icon}
      name={name}
      state={stateLabel}
      isActive={isActive}
    />
  );
};
