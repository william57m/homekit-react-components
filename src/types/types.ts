export type Capabilities = {
  [key: string]: boolean;
}

export enum BinarySensorType {
  CONTACT,
  CUSTOM,
  DOOR,
  LOCK,
  MOTION,
  WINDOW,
}

export enum SwitchType {
  CUSTOM,
  OUTLET,
  SWITCH,
}
