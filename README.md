# HomeKit React Components

List of React Component mimicating HomeKit components from the Home application (iOS, MacOS).


## Installation

Install the package

```
npm install --save homekit-react-components
```

Install peer-dependencies if you don't already have them.

```
npm install --save react react-dom
```





## Usage

1. Wrap your app with the theme provider. For now, no default theme are provided so you will need to inject the theme yourself.

```js
import { ThemeProvider } from 'homekit-react-components';

function App() {
  return (
    <ThemeProvider>
      <MyApp />
    </ThemeProvider>
  );
}
```

2. Use any components in your code 🤗

```js
const [ on, setOn ] = useState(true);

<LightCard
  name="My Light"
  on={on}
  onToggle={() => setOn(prevState => !prevState)}
/>
```


## Documentation

https://william57m.github.io/homekit-react-components/


## Roadmap

Here is a non exhaustive list of the next components to be developed:
- Fan Card
- Media Player Card
- State component
- Alarm card
- Title, section component and different HomeKit layout
- Support for light/dark mode

Look at the [wiki](https://github.com/william57m/homekit-react-components/wiki/Improvements) for coming improvements.

## Contribution

🚧 TO BE COMPLETED 🚧

### homeassistant-dashboard

> The below guide assumes you are developing for use with https://github.com/william57m/homeassistant-dashboard

- Run `npm i --save homekit-react-components` to your [homeassistant-dashboard](https://github.com/william57m/homeassistant-dashboard) project
- In this cloned repo, run `npm link`

In your `homeassistant-dashboard` project, do the following:

- Add the below into the module.exports of your `webpack.config.js` file:

```
    resolve: {
        alias: {
            react: path.resolve('./node_modules/react'),
            '@emotion/react': path.resolve('./node_modules/@emotion/react'),
        },
    },
```

- Run `npm link homekit-react-components`
- Run `npm run start` to start the dev server

Any changes you make to `homekit-react-components` will be hot loaded via your `homeassistant-dashboard` project
