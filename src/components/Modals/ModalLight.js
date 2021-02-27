import React, { useState } from 'react';
import styled from '@emotion/styled';
import Modal from 'react-modal';

import { ModalHeader, Slider, Switch } from './Common';

import LightIconSvg from '../../resources/icons/light-bulb.svg';

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('html')

const ModalStyle = {
  overlay: {
    position: 'fixed',
    padding: 0,
    backgroundColor: '#404040CC'
  },
  content: {
    background: 'transparent',
    border: 'none',
    padding: 0,
    top: '50px',
    right: 'initial',
    bottom: 'initial',
    left: 'calc(50% - 150px)',
  }
};

const ModalContainer = styled.div`
  background-color: #FFFFFF;
  width: 300px;
  border-radius: 10px;
`;

const ModalContent = styled.div`
  padding: 10px;
  text-align: center;
  display: flex;
  padding: 60px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export function ModalLight(props) {
  const [color, setColor] = useState('#F8CC46');

  const state = props.capabilities.SUPPORT_BRIGHTNESS ?
    (props.brightness > 0 ? `${props.brightness}% Brightness` : props.state) :
    (props.state);

  function handleSliderChange(value) {
    props.setBrightness(value);
  }

  return (
    <Modal
      isOpen={props.show}
      onRequestClose={props.closeModal}
      contentLabel="Example Modal"
      style={ModalStyle}
    >
      <ModalContainer>
        <ModalHeader
          title={props.name}
          subtitle={state}
          close={props.closeModal}
          icon={LightIconSvg}
        />
        <ModalContent>
          {props.capabilities.SUPPORT_BRIGHTNESS ?
            <Slider
              value={props.brightness}
              onChange={handleSliderChange}
              color={color}
            /> :
            <Switch
              isActive={props.isActive}
              handlePress={props.handlePress}
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
