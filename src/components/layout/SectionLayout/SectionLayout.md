```tsx
import { BinarySensorCard, BinarySensorType } from '../../accessories/BinarySensorCard';
import { LightCard } from '../../accessories/LightCard';
import { SwitchCard } from '../../accessories/SwitchCard';
import { SectionLayout } from './SectionLayout';

<SectionLayout title="Kitchen">
  <LightCard
    on={true}
    name="Counter light"
  />
  <SwitchCard
    on={true}
    name="Crusher"
  />
  <BinarySensorCard
    isActive={false}
    name="Fridge"
    type={BinarySensorType.CONTACT}
  />
</SectionLayout>
```
