
declare module '@emotion/react' {
  import '@emotion/react';
  import React from 'react';
  interface Colors {
    [key: string]: string;
  }
  export interface Theme {
    colors: Colors,
    card: any,
    cameraCard: any,
    sceneCard: any,
    sensorCard: any,
    modal: any,
    layout: any,
  }

  interface ThemeProviderProps {
    theme: Theme;
  }
  const ThemeProvider: React.SFC<ThemeProviderProps>;
}


declare module 'react-mobile-picker' {
  import React from 'react';

  export interface PickerProps {
    height: number;
    optionGroups: any;
    valueGroups: any;
    onChange: any;
  }

  const Picker: React.SFC<PickerProps>;

  export default Picker;
}

declare module '@fseehawer/react-circular-slider' {
  import React from 'react';

  export interface CircularSliderProps {
    label: any;
    hideLabelValue: any;
    appendToValue: any;
    min: any;
    max: any;
    width: any;
    knobPosition: any;
    knobColor: any;
    progressColorFrom: any;
    progressColorTo: any;
    progressSize: any;
    trackColor: any;
    trackSize: any;
    dataIndex: any;
    onChange: any;
    hideKnob: any;
  }

  const CircularSlider: React.SFC<CircularSliderProps>;

  export default CircularSlider;
}
