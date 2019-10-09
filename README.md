# use-prefer-dark-mode
Small react hook to determine if your user prefers dark mode on their system.

## install
```
npm install use-prefer-dark-mode
# or
yarn add use-prefer-dark-mode
```
### TypeScript Compatible

`use-prefer-dark-mode` is written in TypeScript so no need to install any addition types 👍🏽


## usage
```javascript
import React from "react"
import useDM from "use-prefer-dark-mode"

const HelloWorld = () => {
  const darkMode = useDM() // Boolean of if the user prefers dark mode according to their OS system
  
  const darkStyles = {
    backgroundColor: "black",
    color: "white"
  }
  
  const lightStyles = {
    backgroundColor: "white",
    color: "black"
  }
  
  const styles = darkMode ? darkStyles : lightStyles
  
  return <div style={styles} >Hello, World!</div>
}
```

## Testing
### Jest Mock
`use-prefer-dark-mode` uses `window.mediaMatch` to see if the user prefers dark mode or not. If you use the [Jest](https://jestjs.io) testing library you might need to [mock this function](https://jestjs.io/docs/en/manual-mocks#mocking-methods-which-are-not-implemented-in-jsdom).

### Help write tests
If you are interested in helping out with tests for this package, simply open a PR and let's work together!
