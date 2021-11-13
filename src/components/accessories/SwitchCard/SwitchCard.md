```tsx
const [isActive, setIsActive] = React.useState(true);

<SwitchCard
  on={isActive}
  name="Outlet Kitchen"
  onToggle={() => setIsActive(!isActive)}
/>
```