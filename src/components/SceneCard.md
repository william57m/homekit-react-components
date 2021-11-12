```tsx
import HeartIconSvg from '../resources/icons/heart.svg';

const [isActive, setIsActive] = React.useState(true);

<SceneCard
  isActive={isActive}
  name="Romantic scene"
  icon={
    <img src={HeartIconSvg} alt="Light Icon" width="30px" />
  }
  handlePress={() => setIsActive(!isActive)}
/>
```
