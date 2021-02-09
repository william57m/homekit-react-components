```js
const [isActive, setIsActive] = React.useState(true);

<LightCard
  isActive={isActive}
  name="Light Kitchen"
  state="Off"
  handlePress={() => setIsActive(!isActive)}
/>
```