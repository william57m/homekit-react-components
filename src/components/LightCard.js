import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import LightIconSvg from '../resources/icons/light-bulb.svg';
import { Card } from './Card';
import { ModalLight } from './Modals';

const LightIconContainer = styled.div`
  color: ${props => props.isActive ? props.theme.card.light.colorActive : props.theme.card.light.colorInactive};
  font-size: 24px;
`;

export function LightCard(props) {
  // Modal
  const [show, setShow] = useState(true);
  function handleLongPress() {
    setShow(true);
  }
  function handleCloseModal() {
    setShow(false);
  }

  const state = props.isActive ? 'On' : 'Off';

  return (
    <React.Fragment>
      <Card
        icon={
          props.icon ?
            props.icon :
            <LightIconContainer isActive={props.isActive ? 1 : 0}>
              <img src={LightIconSvg} alt="Light Icon" />
            </LightIconContainer>
        }
        name={props.name}
        state={state}
        isActive={props.isActive}
        handlePress={props.handlePress}
        handleLongPress={handleLongPress}
      />
      <ModalLight
        name={props.name}
        state={state}
        isActive={props.isActive}
        capabilities={props.capabilities}
        brightness={props.brightness}
        setBrightness={props.setBrightness}
        handlePress={props.handlePress}
        show={show}
        closeModal={handleCloseModal} />
    </React.Fragment>
  );
}

LightCard.propTypes = {
  /** Action triggered on press */
  toggleState: PropTypes.func,
  /** Action triggered when brightness change */
  onBrightnessChange: PropTypes.func,
  /** State of the button */
  isActive: PropTypes.bool.isRequired,
  /** Custom icon for light */
  icon: PropTypes.element,
  /** Name label of the card */
  name: PropTypes.string.isRequired,
  /** State label of the card */
  brightness: PropTypes.number,
  /** Capability of the light (dimmable, color) */
  capabilities: PropTypes.array,
};

LightCard.defaultProps = {
  capabilities: {
    SUPPORT_BRIGHTNESS: false,
    SUPPORT_COLOR: false,
  }
}
