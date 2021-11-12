import React, { FC, ReactNode, useState } from 'react';
import styled from '@emotion/styled';

import { default as LightIconSvg} from '../resources/icons/light-bulb.svg';
import { GridCard } from './GridCard';
import { ModalLight } from './Modals';

interface LightIconContainerProps {
  readonly on: boolean;
}

const LightIconContainer = styled.div<LightIconContainerProps>`
  color: ${props => props.on ? props.theme.card.light.colorActive : props.theme.card.light.colorInactive};
  font-size: 24px;
`;

interface LightCardProps {
  /** Custom icon for light */
  readonly icon?: ReactNode;
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
  readonly capabilities?: any;
}

export const LightCard: FC<LightCardProps> = ({
  capabilities = {
    SUPPORT_BRIGHTNESS: false,
    SUPPORT_COLOR: false,
  },
  brightness,
  icon,
  name,
  on,
  onToggle,
  onBrightnessChange,
}) => {
  // Modal
  const [showModal, setShowModal] = useState(false);
  function handleLongPress() {
    setShowModal(true);
  }
  function handleCloseModal() {
    setShowModal(false);
  }

  const stateLabel = on ?
    brightness ? `${brightness}%` : 'On' :
    'Off';

  return (
    <React.Fragment>
      <GridCard
        icon={
          icon ?
            icon :
            <LightIconContainer on={on}>
              <img src={LightIconSvg} />
            </LightIconContainer>
        }
        name={name}
        state={stateLabel}
        isActive={on}
        handlePress={onToggle}
        handleLongPress={handleLongPress}
      />
      <ModalLight
        name={name}
        state={stateLabel}
        capabilities={capabilities}
        on={on}
        onToggle={onToggle}
        brightness={brightness}
        onBrightnessChange={onBrightnessChange}
        show={showModal}
        close={handleCloseModal} />
    </React.Fragment>
  );
};
