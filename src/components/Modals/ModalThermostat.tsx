import React, { FC } from 'react';
import Modal from 'react-modal';
import styled from '@emotion/styled';
// import CircularSlider from '@fseehawer/react-circular-slider';
// import Picker from 'react-mobile-picker';

import { ModalContainer, ModalContent, ModalHeader, ModalStyle } from './Common';
import { TemperatureIcon } from '../Common/TemperatureIcon';

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('html');


const CircularSliderContainer = styled.div`
  position: relative;
  margin-bottom: 40px;
`;

const LabelContainer = styled.div`
  position: absolute;
  top: 85px;
  left: 70px;
`;
const LabelTitle = styled.div`
  color: #F29F41;
  font-size: 14px;
  font-weight: 600;
`;
const LabelTemperature = styled.div`
  font-size: 48px;
  font-weight: bold;
`;


interface ModalThermostatProps {
  /** Method to close the modal */
  readonly close: () => void;
  /** Current mode */
  readonly currentMode?: string;
  /** Current temperature */
  readonly currentTemperature?: number;
  /** List of modes available */
  readonly modes?: string[];
  /** Name of the thermostat */
  readonly name: string;
  /** Target temperature */
  readonly targetTemperature?: number;
  /** Action triggered on temperature change */
  readonly onTemperatureChange?: (value: number) => void;
  /** Action triggered on mode change */
  readonly onModeChange?: (value: string) => void;
  /** State of the modal */
  readonly show: boolean;
  /** State label of the thermostat */
  readonly state: string;
  /** Temperature max */
  readonly tempMax?: number;
  /** Temperature min */
  readonly tempMin?: number;
};

export const ModalThermostat: FC<ModalThermostatProps> = (props) => {
  const on = props.currentMode !== 'Off';
  const stateLabel = on ? `Heat to ${props.targetTemperature!.toFixed(1)}°` : 'Off';

  function handleSliderChange(value: number) {
    if (props.onTemperatureChange) {
      props.onTemperatureChange(value);
    }
  }

  function handleModeChange(key: string, value: string) {
    if (props.onModeChange) {
      props.onModeChange(value);
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
            <TemperatureIcon temperature={props.currentTemperature!} />
          }
        />
        <ModalContent>
          <CircularSliderContainer>
            {/* <CircularSlider
              label="Temperature"
              hideLabelValue={true}
              appendToValue="°"
              min={props.tempMin}
              max={props.tempMax}
              width={250}
              knobPosition="bottom"
              knobColor="#005a58"
              progressColorFrom="#75D5E2"
              progressColorTo="#ED6C35"
              progressSize={24}
              trackColor="#eeeeee"
              trackSize={24}
              dataIndex={props.targetTemperature - props.tempMin}
              onChange={handleSliderChange}
              hideKnob={!on}
            /> */}
            <LabelContainer>
              <LabelTitle>{on ? "HEATING TO" : "NOW"}</LabelTitle>
              <LabelTemperature>{on ? props.targetTemperature!.toFixed(1) : props.currentTemperature!.toFixed(1)}°</LabelTemperature>
            </LabelContainer>
          </CircularSliderContainer>
          {/* <Picker
            height={100}
            optionGroups={{
              mode: props.modes,
            }}
            valueGroups={{
              mode: props.currentMode,
            }}
            onChange={handleModeChange} /> */}
        </ModalContent>
      </ModalContainer>
    </Modal>
  );
};
