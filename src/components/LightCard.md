```js
const [isActive, setIsActive] = React.useState(true);

<LightCard
  isActive={isActive}
  name="Light Kitchen"
  state={isActive ? 'On' : 'Off'}
  handlePress={() => setIsActive(!isActive)}
/>
```