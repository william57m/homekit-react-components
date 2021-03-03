# HomeKit React Components

List of React Component mimicating HomeKit components from the Home application (iOS, MacOS).


## Installation

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
  on={true}
  onToggle={() => setIsOn(...)}
/>
```


## Documentation

https://william57m.github.io/homekit-react-components/


## Roadmap

Here is a non exhaustive list of the next components to be developed:
- Sensor Card
- Switch Card
- Fan Card
- Camera Card
- Media Player Card
- State component
- Alarm card
- Title, section component and different HomeKit layout


## Contribution

🚧 TO BE COMPLETED 🚧
