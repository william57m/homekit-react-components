import { BinarySensorType, SwitchType } from '../types';


/**
 * Sensors
 */
const labelContactClosed = 'Closed';
const labelContactOpen = 'Open';

const labelDoorClosed = 'Closed';
const labelDoorOpen = 'Open';

const labelLockSecured = 'Locked';
const labelLockUnsecured = 'Unlocked';

const labelMotionOff = 'No motion';
const labelMotionOn = 'Triggered';

const labelWindowClosed = 'Closed';
const labelWindowOpen = 'Open';

/**
 * Switch
 */
const labelSwitchOn = 'On';
const labelSwitchOff = 'Off';

const labelOutletOn = 'On';
const labelOutletOff = 'Off';


export function getBinarySensorLabel(type: BinarySensorType) {
  let labelActive = '';
  let labelInactive = '';

  switch(type) {
    case BinarySensorType.CONTACT:
      labelActive = labelContactOpen;
      labelInactive = labelContactClosed;
      break;
    case BinarySensorType.DOOR:
      labelActive = labelDoorOpen;
      labelInactive = labelDoorClosed;
      break;
    case BinarySensorType.LOCK:
      labelActive = labelLockUnsecured;
      labelInactive = labelLockSecured;
      break;
    case BinarySensorType.WINDOW:
      labelActive = labelWindowOpen;
      labelInactive = labelWindowClosed;
      break;
    default:
    case BinarySensorType.MOTION:
      labelActive = labelMotionOn;
      labelInactive = labelMotionOff;
      break;
  }

  return {
    labelActive,
    labelInactive,
  };
}

export function getSwitchLabel(type: SwitchType) {
  let labelActive = '';
  let labelInactive = '';

  switch(type) {
    case SwitchType.OUTLET:
      labelActive = labelOutletOn;
      labelInactive = labelOutletOff;
      break;
    default:
    case SwitchType.SWITCH:
      labelActive = labelSwitchOn;
      labelInactive = labelSwitchOff;
      break;
  }

  return {
    labelActive,
    labelInactive,
  };
}
