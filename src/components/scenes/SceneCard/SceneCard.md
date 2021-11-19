```tsx
import { ReactComponent as HeartIconSvg } from '../../../../styleguide/images/heart.svg';

const [isActive, setIsActive] = React.useState(true);

<SceneCard
  isActive={isActive}
  name="Romantic scene"
  icon={
    <HeartIconSvg />
  }
  onPress={() => setIsActive(!isActive)}
/>
```
