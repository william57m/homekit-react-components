import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import LightIconSvg from '../resources/icons/light-bulb.svg';
import { Card } from './Card';
import { ModalLight } from './Modals';

const LightIconContainer = styled.div`
  color: ${props => props.on ? props.theme.card.light.colorActive : props.theme.card.light.colorInactive};
  font-size: 24px;
`;

export function LightCard(props) {
  // Modal
  const [showModal, setShowModal] = useState(false);
  function handleLongPress() {
    setShowModal(true);
  }
  function handleCloseModal() {
    setShowModal(false);
  }

  const stateLabel = props.on ?
    props.brightness ? `${props.brightness}%` : 'On' :
    'Off';

  return (
    <React.Fragment>
      <Card
        icon={
          props.icon ?
            props.icon :
            <LightIconContainer on={props.on}>
              <img src={LightIconSvg} />
            </LightIconContainer>
        }
        name={props.name}
        state={stateLabel}
        isActive={props.on}
        handlePress={props.onToggle}
        handleLongPress={handleLongPress}
      />
      <ModalLight
        name={props.name}
        state={stateLabel}
        capabilities={props.capabilities}
        on={props.on}
        onToggle={props.onToggle}
        brightness={props.brightness}
        onBrightnessChange={props.onBrightnessChange}
        show={showModal}
        close={handleCloseModal} />
    </React.Fragment>
  );
}

LightCard.propTypes = {
  /** Custom icon for light */
  icon: PropTypes.element,
  /** Action triggered on press */
  onToggle: PropTypes.func,
  /** Action triggered when brightness change */
  onBrightnessChange: PropTypes.func,
  /** State of the light */
  on: PropTypes.bool.isRequired,
  /** Name label of the card */
  name: PropTypes.string.isRequired,
  /** State label of the card */
  brightness: PropTypes.number,
  /** Capability of the light (dimmable, color) */
  capabilities: PropTypes.object,
};

LightCard.defaultProps = {
  capabilities: {
    SUPPORT_BRIGHTNESS: false,
    SUPPORT_COLOR: false,
  },
};
