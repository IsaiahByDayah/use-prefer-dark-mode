# use-prefer-dark-mode
Small react hook to determine if your user prefers dark mode on their system.

## install
```
npm install use-prefer-dark-mode
# or
yarn add use-prefer-dark-mode
```

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

### TypeScript Compatible

`use-prefer-dark-mode` is written in TypeScript so no need to install any addition types 👍🏽
