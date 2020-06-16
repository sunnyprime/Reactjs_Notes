# REACT-NATIVE
## [NATIVE](https://reactnative.dev/docs/tutorial)
### 1. Touchable
```
        <TouchableOpacity
         style={styles.button}
         onPress={this.onPress}
        >
         <Text>Click me</Text>
        </TouchableOpacity>
 ```
### 2. Hello World

```
import React from 'react';
import { Text, View } from 'react-native';

function HelloWorldApp() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}>
      <Text>Hello, world!</Text>
    </View>
  )
}
export default HelloWorldApp;
```
