Card example:

```js

import { LightIcon } from './LightIcon';
const [isActive, setIsActive] = React.useState(true);

<Card
  isActive={isActive}
  name="Light Kitchen"
  state="Off"
  handlePress={() => setIsActive(!isActive)}
  logo={
    <LightIcon />
  }
/>
```