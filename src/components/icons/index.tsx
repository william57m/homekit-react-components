import React, { ReactNode } from 'react';
import { BinarySensorType, SwitchType} from '../../types';


/**
 * Sensors
 */
import ContactClosedSrc from '../../resources/icons/accessories/contact-closed-large@2x.png';
import ContactOpenSrc from '../../resources/icons/accessories/contact-open-large@2x.png';

import DoorClosedSrc from '../../resources/icons/accessories/door-closed-large@2x.png';
import DoorOpenSrc from '../../resources/icons/accessories/door-open-large@2x.png';

import LockSecuredSrc from '../../resources/icons/accessories/lock-secured-large@2x.png';
import LockUnsecuredSrc from '../../resources/icons/accessories/lock-unsecured-large@2x.png';

import MotionOffSrc from '../../resources/icons/accessories/motion-off-large@2x.png';
import MotionOnSrc from '../../resources/icons/accessories/motion-on-large@2x.png';

import WindowClosedSrc from '../../resources/icons/accessories/window-closed-large@2x.png';
import WindowOpenSrc from '../../resources/icons/accessories/window-open-large@2x.png';

/**
 * Switch
 */
import OutletOffSrc from '../../resources/icons/accessories/outlet-off-large@2x.png';
import OutletOnSrc from '../../resources/icons/accessories/outlet-on-large@2x.png';

import SwitchOffSrc from '../../resources/icons/accessories/switch-off-large@2x.png';
import SwitchOnSrc from '../../resources/icons/accessories/switch-on-large@2x.png';

/**
 * Light
 */
export { ReactComponent as LightIconSvg } from '../../resources/icons/accessories/light-bulb.svg';


type GetIconProps = (src: string) => ReactNode
const getIcon: GetIconProps = (src: string) => <img src={src} />;

type GetBinarySensorIconProps = (type: BinarySensorType) => { iconActive: ReactNode, iconInactive: ReactNode }
export const getBinarySensorIcon: GetBinarySensorIconProps = (type) => {
  let iconActiveSrc = '';
  let iconInactiveSrc = '';

  switch(type) {
    case BinarySensorType.CONTACT:
      iconInactiveSrc = ContactClosedSrc;
      iconActiveSrc = ContactOpenSrc;
      break;
    case BinarySensorType.DOOR:
      iconInactiveSrc = DoorClosedSrc;
      iconActiveSrc = DoorOpenSrc;
      break;
    case BinarySensorType.LOCK:
      iconInactiveSrc = LockSecuredSrc;
      iconActiveSrc = LockUnsecuredSrc;
      break;
    case BinarySensorType.WINDOW:
      iconInactiveSrc = WindowClosedSrc;
      iconActiveSrc = WindowOpenSrc;
      break;
    default:
    case BinarySensorType.MOTION:
      iconInactiveSrc = MotionOffSrc;
      iconActiveSrc = MotionOnSrc;
      break;
  }

  return {
    iconActive: getIcon(iconActiveSrc),
    iconInactive: getIcon(iconInactiveSrc),
  };
};

type GetSwitchIconProps = (type: SwitchType) => { iconActive: ReactNode, iconInactive: ReactNode }
export const getSwitchIcon: GetSwitchIconProps = (type: SwitchType) => {
  let iconActiveSrc = '';
  let iconInactiveSrc = '';

  switch(type) {
    case SwitchType.OUTLET:
      iconInactiveSrc = OutletOffSrc;
      iconActiveSrc = OutletOnSrc;
      break;
    default:
    case SwitchType.SWITCH:
      iconInactiveSrc = SwitchOffSrc;
      iconActiveSrc = SwitchOnSrc;
      break;
  }

  return {
    iconActive: getIcon(iconActiveSrc),
    iconInactive: getIcon(iconInactiveSrc),
  };
};
