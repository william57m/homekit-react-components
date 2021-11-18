```tsx
import { SwitchType } from './SwitchCard'

const [ on, setOn ] = React.useState(true);

<SwitchCard
  on={on}
  type={SwitchType.OUTLET}
  name="Outlet Kitchen"
  onToggle={() => setOn(prevState => !prevState)}
/>
```
