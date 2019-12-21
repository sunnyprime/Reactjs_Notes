# Technologies in React js

## Hook

###### Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.

```
const [loading, setLoading] = React.useState(false)
const [products, setProducts] = React.useState([])

// replacing the data
const products = flattenProducts(response.data)
setProducts(products)
setLoading(false)

```

## Context
##### Context provides a way to pass data through the component tree without having to pass props down manually at every level.

###### Step to pass data
1 Contextfile
```
import React from 'react'
const UserContext = React.createContext();
function UserProvider({ children }) {
  return (
         <UserContext.Provider value="contextdata">
             {children}
         </UserContext.Provider>
      )
  }
 }
```
2 Pass from indexjs
```
<CartProvider>
            <App />
</CartProvider>
```
3. Acessing the data
```
import {ProductContext} from '../context/Products'

const {products} = React.useContext(ProductContext)

const {imageurl,title,price,Description} = product
```
