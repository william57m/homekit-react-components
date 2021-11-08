```tsx
import { DefaultIcon } from './Common/DefaultIcon';
import { Card } from './Card';
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
