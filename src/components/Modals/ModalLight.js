import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

import { ModalContainer, ModalContent, ModalHeader, ModalStyle, Slider, Switch } from './Common';
import LightIconSvg from '../../resources/icons/light-bulb.svg';

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('html');


export function ModalLight(props) {
  const [color] = useState('#F8CC46');

  const stateLabel = props.capabilities.SUPPORT_BRIGHTNESS ?
    (props.brightness > 0 ? `${props.brightness}% Brightness` : props.state) :
    (props.state);

  function handleSliderChange(value) {
    props.onBrightnessChange(value);
  }

  return (
    <Modal
      isOpen={props.show}
      onRequestClose={props.close}
      contentLabel="Example Modal"
      style={ModalStyle}
    >
      <ModalContainer>
        <ModalHeader
          title={props.name}
          subtitle={stateLabel}
          close={props.close}
          icon={
            <img src={LightIconSvg} />
          }
        />
        <ModalContent>
          {props.capabilities.SUPPORT_BRIGHTNESS ?
            <Slider
              value={props.brightness}
              onChange={handleSliderChange}
              color={color}
            /> :
            <Switch
              on={props.on}
              onToggle={props.onToggle}
            />
          }
          {props.capabilities.SUPPORT_COLOR ?
            <div>
              TODO: Implement color picker
            </div> : null
          }
        </ModalContent>
      </ModalContainer>
    </Modal>
  );
}

ModalLight.propTypes = {
  /** Brightness value */
  brightness: PropTypes.number,
  /** Capabilities of the light */
  capabilities: PropTypes.object.isRequired,
  /** Method to close the modal */
  close: PropTypes.func.isRequired,
  /** Color of the light */
  color: PropTypes.string,
  /** Name of the light */
  name: PropTypes.string.isRequired,
  /** Action triggered on toggle switch */
  onToggle: PropTypes.func,
  /** State of the light */
  on: PropTypes.bool,
  /** Action triggered on brightness change */
  onBrightnessChange: PropTypes.func,
  /** Action triggered on color change */
  onColorChange: PropTypes.func,
  /** State of the modal */
  show: PropTypes.bool.isRequired,
  /** State label of the light */
  state: PropTypes.string.isRequired,
};
