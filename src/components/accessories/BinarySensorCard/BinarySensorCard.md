Try changing the boolean `isActive` to `true` and notice the difference. You can also try to change the type.

```tsx
import { BinarySensorType } from './BinarySensorCard';

<BinarySensorCard
  name="Entry door"
  type={BinarySensorType.MOTION}
  isActive={true}
/>
```
