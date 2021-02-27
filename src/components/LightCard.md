Regular light

```js
const [isActive, setIsActive] = React.useState(true);

<LightCard
  isActive={isActive}
  name="Regular Light"
  handlePress={() => setIsActive(!isActive)}
/>
```

Dimmable light
Click and hold to set the brightness

```js
const [isActive, setIsActive] = React.useState(true);
const [brightness, setBrightness] = React.useState(100);

<LightCard
  name="Dimmable Light"
  isActive={isActive}
  brightness={isActive ? brightness : 0}
  setBrightness={(value) => { setBrightness(value); value == 0 ? setIsActive(false) : setIsActive(true)}}
  capabilities={{
    SUPPORT_BRIGHTNESS: true
  }}
  handlePress={() => setIsActive(!isActive)}
/>
```
