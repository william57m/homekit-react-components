#### Regular light

Click and hold to display more options

```tsx
const [ on, setOn ] = React.useState(true);

<LightCard
  on={on}
  name="Regular Light"
  onToggle={() => setOn(prevState => !prevState)}
/>
```

#### Dimmable light

Click and hold to set the brightness

```tsx
const [ on, setOn ] = React.useState(true);
const [ brightness, setBrightness ] = React.useState(100);

<LightCard
  name="Dimmable Light"
  on={on}
  onToggle={() => setOn(prevState => !prevState)}
  brightness={on ? brightness : 0}
  onBrightnessChange={(value) => { setBrightness(value); setOn(value != 0); }}
  capabilities={{
    SUPPORT_BRIGHTNESS: true
  }}
/>
```
