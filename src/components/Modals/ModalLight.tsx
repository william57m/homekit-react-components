import React, { FC, useState } from 'react';
import Modal from 'react-modal';

import { ModalContainer, ModalContent, ModalHeader, ModalStyle, Slider, Switch } from './Common';
import LightIconSvg from '../../resources/icons/light-bulb.svg';

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('html');

interface ModalLightProps {
  /** Brightness value */
  readonly brightness?: number;
  /** Capabilities of the light */
  readonly capabilities: any;
  /** Method to close the modal */
  readonly close: () => void;
  /** Color of the light */
  readonly color?: string;
  /** Name of the light */
  readonly name: string;
  /** Action triggered on toggle switch */
  readonly onToggle?: () => void;
  /** State of the light */
  readonly on: boolean;
  /** Action triggered on brightness change */
  readonly onBrightnessChange?: (value: number) => void;
  /** Action triggered on color change */
  readonly onColorChange?: () => void;
  /** State of the modal */
  readonly show: boolean;
  /** State label of the light */
  readonly state: string;
}

export const ModalLight: FC<ModalLightProps> = (props) => {
  const [color] = useState('#F8CC46');

  const stateLabel = props.capabilities.SUPPORT_BRIGHTNESS ?
    (props.brightness && props.brightness > 0 ? `${props.brightness}% Brightness` : props.state) :
    (props.state);

  function handleSliderChange(value: number) {
    if (props.onBrightnessChange) {
      props.onBrightnessChange(value);
    }
  }

  return (
    <Modal
      isOpen={props.show}
      onRequestClose={props.close}
      contentLabel="Example Modal"
      // style={ModalStyle}
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
              value={props.brightness!}
              onChange={handleSliderChange}
              color={color}
            /> :
            <Switch
              on={props.on}
              onToggle={() => props.onToggle && props.onToggle()}
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
};
