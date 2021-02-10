# HomeKit React Components (WIP)

List of React Component mimicating HomeKit components from the Home application (iOS, MacOS).


## Installation

🚧 THE PACKAGE IS NOT DEPLOYED YET 🚧

```
npm install homekit-react-components
```


## Usage

1. You first need to wrap your application with emotion ThemeProvider and pass the theme from the library.

🚧 THIS IS HIGHLY SUBJECT TO CHANGE IN ORDER TO FACILITATE USERS 🚧

```js
import { ThemeProvider } from '@emotion/react';
import { theme } from 'homekit-react-components';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MyApp />
    </ThemeProvider>
  );
}
```

2. Use any components in your code 🤗

```js
<LightCard
  name="My Light"
  state="Off"
  isActive={true}
  handlePress={() => {}}
/>
```


## Documentation

🚧 TO BE DEPLOYED 🚧


## Contribution

🚧 TO BE COMPLETED 🚧
