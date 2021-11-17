# Technologies in React js

## Context 
```
import React from 'react';
import axios from 'axios'
import {imagearray} from "./Utils"

export const Userdata = React.createContext();


export default function Context({ children }) {
    var [loading, setLoading] = React.useState(true)
    const [home,sethome] = React.useState()
    const [image,setimage] = React.useState()
    const [reacts,setreacts] = React.useState()
    const [javascript,setjavascript] = React.useState()
    const [css,setcss] = React.useState()
    React.useEffect(() => {    
        setLoading(true)
        axios
        .get(`http://localhost:1337/homes`)
        .then(response => 
            {
            const data = response.data                    
            sethome(data)
            
            setimage(imagearray(data))
            
            }
            );
        return () => {}
    } ,[])


    
    
    
  return (
         <Userdata.Provider value={{loading,home,image,reacts,javascript,css}}>
             {children}
         </Userdata.Provider>
      )
  }
 
```

## useHistory
##### It is used to go to given pages.
```
import {useHistory} from 'react-router-dom';


const history = useHistory()

<button className="btn btn-primary btn-block" onClick={()=>{addToCart(product); history.push('/cart')}}>add to cart</button>
```

## Prevent Default
##### The event.preventDefault() method stops the default action of an element from happening.
```
e.preventDefault();
```

### param
```
import {useParams} from 'react-router-dom';
const { id } = useParams()
const product = products.find(item => item.id === parseInt(id))
const {imageurl,title,price,Description} = product
```


---

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
## useEffect
```
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


## 7. ContextAPI
##### Sample API code

###### context/Product.js
```
import React, { Children, useContext } from 'react'
export const ProductContext = React.createContext()
// Provider, Consumer, useContext()
export default function ProductsProvider({children}) {
    const greeting = "hello"
    const product = {id:1,title:'product name'}
    return (
       <ProductContext.Provider value={{greeting,product}}>
        {children}
       </ProductContext.Provider>
    )
}
```

###### index.js

```
import ProductsProvider from "./context/Products"

ReactDOM.render(<ProductsProvider><App /></ProductsProvider>
, document.getElementById('root'));
```
###### using contextproducts using inside pages/products.js
```
import React,{useContext} from 'react'
import {ProductContext} from '../context/Products'

export default function Products() {
    console.log(React.useContext(ProductContext));
    const {greeting} = React.useContext(ProductContext)


    return (
        <div>
            Products {greeting}
        </div>
    )
}
```
# Focusable modal

```
import React, { createContext, useContext, useEffect, createRef } from "react";
import { createPortal } from "react-dom";

import { ReactComponent as Cross } from "./cross.svg";
import "./styles.css";

const modalContext = createContext();

export default function Modal({ children, onModalClose }) {
  useEffect(() => {
    function keyListener(e) {
      const listener = keyListenersMap.get(e.keyCode);
      return listener && listener(e);
    }
    document.addEventListener("keydown", keyListener);

    return () => document.removeEventListener("keydown", keyListener);
  });

  const modalRef = createRef();
  const handleTabKey = e => {
    const focusableModalElements = modalRef.current.querySelectorAll(
      'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
    );
    const firstElement = focusableModalElements[0];
    const lastElement =
      focusableModalElements[focusableModalElements.length - 1];

    if (!e.shiftKey && document.activeElement !== firstElement) {
      firstElement.focus();
      return e.preventDefault();
    }

    if (e.shiftKey && document.activeElement !== lastElement) {
      lastElement.focus();
      e.preventDefault();
    }
  };

  const keyListenersMap = new Map([[27, onModalClose], [9, handleTabKey]]);

  return createPortal(
    <div className="modal-container" role="dialog" aria-modal="true">
      <div className="modal-content" ref={modalRef}>
        <modalContext.Provider value={{ onModalClose }}>
          {children}
        </modalContext.Provider>
      </div>
    </div>,
    document.body
  );
}

Modal.Header = function ModalHeader(props) {
  const { onModalClose } = useContext(modalContext);

  return (
    <div className="modal-header">
      {props.children}
      <button className="cross-btn" title="close modal" onClick={onModalClose}>
        <Cross />
      </button>
    </div>
  );
};

Modal.Body = function ModalBody(props) {
  return <div className="modal-body">{props.children}</div>;
};

Modal.Footer = function ModalFooter(props) {
  return <div className="modal-footer">{props.children}</div>;
};

Modal.Footer.CloseBtn = function CloseBtn(props) {
  const { onModalClose } = useContext(modalContext);
  return (
    <button
      {...props}
      className="close-btn"
      title="close modal"
      onClick={onModalClose}
    />
  );
};
```
