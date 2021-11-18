import React, { FC, ReactNode } from 'react';
import styled from '@emotion/styled';

import { BinarySensorType } from '../../../types';
import { useBinarySensorIcon, useBinarySensorLabel } from '../../common/hooks';
import { AccessoryCard, AccessoryCardStatus } from '../../common/cards/AccessoryCard';

export { BinarySensorType };


const SensorCard = styled(AccessoryCard)`
  ${AccessoryCardStatus} {
    color: ${
      props => props.isActive ?
        props.theme.sensorCard.state.colorActive :
        props.theme.sensorCard.state.colorInactive
    };
  }
`;

interface BinarySensorCardProps {
  /** State of the binary sensor */
  readonly isActive: boolean;
  /** Name of the binary sensor */
  readonly name: string;
  /** Type of the sensor */
  readonly type: BinarySensorType;
  /** Custom icon for active state */
  readonly iconActive?: ReactNode;
  /** Custom icon for inactive state */
  readonly iconInactive?: ReactNode;
  /** Custom label for active state */
  readonly labelActive?: string;
  /** Custom label for inactive state */
  readonly labelInactive?: string;
}

export const BinarySensorCard: FC<BinarySensorCardProps> = ({
  isActive,
  name,
  type,
  iconActive,
  iconInactive,
  labelActive = 'Triggered',
  labelInactive = 'No motion',
}) => {
  const {
    labelActive: binarySensorLabelActive,
    labelInactive: binarySensorLabelInactive,
  } = useBinarySensorLabel(type, labelActive, labelInactive);

  const {
    iconActive: binarySensorIconActive,
    iconInactive: binarySensorIconInactive,
  } = useBinarySensorIcon(type, iconActive, iconInactive);

  const stateLabel = isActive ? binarySensorLabelActive : binarySensorLabelInactive;

  return (
    <SensorCard
      iconActive={binarySensorIconActive}
      iconInactive={binarySensorIconInactive}
      name={name}
      state={stateLabel}
      isActive={isActive}
    />
  );
};
