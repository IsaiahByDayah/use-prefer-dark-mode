# use-prefer-dark-mode
Small react hook to determine if your user prefers dark mode on their system.

A lot of packages that deal with determining if you should use dark mode come with unneeded components, Contexts Providers & Consumers, configs objects you have to pass in, etc. 

This one is simple. It only tells you if your user __*prefers*__ dark mode based on their os settings. We let __*you*__ determine where and how you deal with that preference. 🤙🏽

## install
```
npm install --save use-prefer-dark-mode
# or
yarn add use-prefer-dark-mode
```
### TypeScript Compatible

`use-prefer-dark-mode` is written in TypeScript so no need to install any addition types 👍🏽


## usage
```javascript
import React from "react"
import usePDM from "use-prefer-dark-mode"

const HelloWorld = () => {
  const prefersDarkMode = usePDM() // Boolean of if the user prefers dark mode according to their OS system
  
  const darkStyles = {
    backgroundColor: "black",
    color: "white"
  }
  
  const lightStyles = {
    backgroundColor: "white",
    color: "black"
  }
  
  const styles = prefersDarkMode ? darkStyles : lightStyles
  
  return <div style={styles} >Hello, World!</div>
}
```

## Testing
### Jest Mock
`use-prefer-dark-mode` uses `window.mediaMatch` to see if the user prefers dark mode or not. If you use the [Jest](https://jestjs.io) testing library you might need to [mock this function](https://jestjs.io/docs/en/manual-mocks#mocking-methods-which-are-not-implemented-in-jsdom).

### Help write tests
If you are interested in helping out with tests for this package, simply open a PR and let's work together!
