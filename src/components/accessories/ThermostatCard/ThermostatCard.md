Click or hold to display more options

🚧 WIP

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

