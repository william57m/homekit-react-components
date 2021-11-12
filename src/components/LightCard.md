### Regular light

Click and hold to display more options

```tsx
const [isActive, setIsActive] = React.useState(true);

<LightCard
  on={isActive}
  name="Regular Light"
  onToggle={() => setIsActive(!isActive)}
/>
```

### Dimmable light

Click and hold to set the brightness

```tsx
const [isActive, setIsActive] = React.useState(true);
const [brightness, setBrightness] = React.useState(100);

<LightCard
  name="Dimmable Light"
  on={isActive}
  onToggle={() => setIsActive(!isActive)}
  brightness={isActive ? brightness : 0}
  onBrightnessChange={(value) => { setBrightness(value); setIsActive(value != 0); }}
  capabilities={{
    SUPPORT_BRIGHTNESS: true
  }}
/>
```
