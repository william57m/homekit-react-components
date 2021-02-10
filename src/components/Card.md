```js

import { DefaultIcon } from './common/DefaultIcon';
const [isActive, setIsActive] = React.useState(true);

<Card
  isActive={isActive}
  name="Name label"
  state="State label"
  handlePress={() => setIsActive(!isActive)}
  icon={
    <DefaultIcon />
  }
/>
```