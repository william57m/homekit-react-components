```js

import { DefaultIcon } from './Common/DefaultIcon';
const [isActive, setIsActive] = React.useState(true);

<GridCard
  isActive={isActive}
  name="Name label"
  state="State label"
  handlePress={() => setIsActive(!isActive)}
  icon={
    <DefaultIcon />
  }
/>
```
