import React, { FC, useState } from 'react';

import { ModalThermostat } from './Modals';
import { TemperatureIcon } from './Common/TemperatureIcon';
import {GridCard} from "./GridCard";

interface ThermostatCardProps {
  /** Current mode */
  currentMode: string;
  /** Current temperature */
  currentTemperature: number;
  /** Modes available */
  modes?: string[];
  /** Name of the thermostat */
  name: string;
  /** Action triggered when mode change */
  onModeChange?: (value: string) => void;
  /** Action triggered when temperature change */
  onTemperatureChange?: (value: number) => void;
  /** Target temperature */
  targetTemperature: number;
  /** Temperature max */
  tempMax?: number,
  /** Temperature min */
  tempMin?: number,
}

export const ThermostatCard: FC<ThermostatCardProps> = ({
  currentMode,
  currentTemperature,
  modes = ['Off', 'Heat', 'Auto'],
  name,
  onModeChange,
  onTemperatureChange,
  targetTemperature,
  tempMax = 30,
  tempMin = 6,
}) => {
  const [showModal, setShowModal] = useState(false);

  function handleLongPress() {
    setShowModal(true);
  }
  function handleCloseModal() {
    setShowModal(false);
  }

  const stateLabel = currentMode !== 'Off' ?
    `Heat to ${targetTemperature.toFixed(1)}°` :
    'Off';

  return (
    <React.Fragment>
      <GridCard
        icon={
          <TemperatureIcon temperature={currentTemperature} />
        }
        name={name}
        state={stateLabel}
        isActive={currentMode !== 'Off'}
        handlePress={handleLongPress}
        handleLongPress={handleLongPress}
      />
      <ModalThermostat
        name={name}
        state={stateLabel}
        currentMode={currentMode}
        modes={modes}
        onModeChange={onModeChange}
        tempMax={tempMax}
        tempMin={tempMin}
        currentTemperature={currentTemperature}
        targetTemperature={targetTemperature}
        onTemperatureChange={onTemperatureChange}
        show={showModal}
        close={handleCloseModal} />
    </React.Fragment>
  );
};
