Click or hold to display more options

🚧 I'm currently working on react-circular-slider to be able to stylize it like the temperature slider of Apple. I'm also working on a react-picker to looks the same as the Apple one.

```tsx
const [temperature, setTemperature] = React.useState(22.0);
const [mode, setMode] = React.useState('Heat');

<ThermostatCard
  name="Thermostat living room"
  currentMode={mode}
  onModeChange={(value) => setMode(value)}
  onToggle={() => setIsActive(!isActive)}
  currentTemperature={20}
  targetTemperature={temperature}
  onTemperatureChange={(value) => setTemperature(value)}
/>
```

