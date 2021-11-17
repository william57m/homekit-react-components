```tsx
import { ReactComponent as HeartIconSvg} from '../../../resources/icons/heart.svg';

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
