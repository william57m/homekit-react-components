import React, { FC } from 'react';

import { AccessoryCard } from '../../common/cards/AccessoryCard';
import { useModalHelper } from '../../common/hooks';
import { TemperatureIcon } from '../../common/TemperatureIcon';
import { ThermostatCardModal } from './ThermostatCardModal';


interface ThermostatCardProps {
  /** Current mode */
  readonly currentMode: string;
  /** Current temperature */
  readonly currentTemperature: number;
  /** Modes available */
  readonly modes?: string[];
  /** Name of the thermostat */
  readonly name: string;
  /** Action triggered when mode change */
  readonly onModeChange?: (value: string) => void;
  /** Action triggered when temperature change */
  readonly onTemperatureChange?: (value: number) => void;
  /** Target temperature */
  readonly targetTemperature: number;
  /** Temperature max */
  readonly tempMax?: number;
  /** Temperature min */
  readonly tempMin?: number;
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
  const { showModal, openModal, closeModal } = useModalHelper();

  const stateLabel = currentMode !== 'Off' ?
    `Heat to ${targetTemperature.toFixed(1)}°` :
    'Off';

  return (
    <React.Fragment>
      <AccessoryCard
        iconActive={
          <TemperatureIcon temperature={currentTemperature} />
        }
        iconInactive={
          <TemperatureIcon temperature={currentTemperature} />
        }
        name={name}
        state={stateLabel}
        isActive={currentMode !== 'Off'}
        handlePress={openModal}
        handleLongPress={openModal}
      />
      <ThermostatCardModal
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
        close={closeModal} />
    </React.Fragment>
  );
};
