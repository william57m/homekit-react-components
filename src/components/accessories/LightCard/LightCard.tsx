import React, { FC, ReactNode } from 'react';

import { LightIconSvg } from '../../icons';
import { AccessoryCard } from '../../common/cards/AccessoryCard';
import { useModalHelper } from '../../common/hooks';
import { Capabilities } from '../../../types';
import { LightCardModal } from './LightCardModal';


interface LightCardProps {
  /** Custom icon for active light */
  readonly iconActive?: ReactNode;
  /** Custom icon for inactive light */
  readonly iconInactive?: ReactNode;
  /** Action triggered on press */
  readonly onToggle?: () => void;
  /** Action triggered when brightness change */
  readonly onBrightnessChange?: (value: number) => void;
  /** State of the light */
  readonly on: boolean;
  /** Name of the light */
  readonly name: string;
  /** Brightness of the light */
  readonly brightness?: number;
  /** Capabilities of the light (dimmable, color, ...) */
  readonly capabilities?: Capabilities;
}

export const LightCard: FC<LightCardProps> = ({
  capabilities = {
    SUPPORT_BRIGHTNESS: false,
    SUPPORT_COLOR: false,
  },
  brightness,
  iconActive,
  iconInactive,
  name,
  on,
  onToggle,
  onBrightnessChange,
}) => {
  const { showModal, openModal, closeModal } = useModalHelper();

  const stateLabel = on ?
    brightness ? `${brightness}%` : 'On' :
    'Off';

  return (
    <React.Fragment>
      <AccessoryCard
        iconActive={iconActive ? iconActive : <LightIconSvg />}
        iconInactive={iconInactive ? iconInactive : <LightIconSvg />}
        name={name}
        state={stateLabel}
        isActive={on}
        handlePress={onToggle}
        handleLongPress={openModal}
      />
      <LightCardModal
        name={name}
        state={stateLabel}
        capabilities={capabilities}
        on={on}
        onToggle={onToggle}
        brightness={brightness}
        onBrightnessChange={onBrightnessChange}
        show={showModal}
        close={closeModal} />
    </React.Fragment>
  );
};
