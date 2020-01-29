# useParams

```
<Route path="/products/:id" children={<ProductDetails />}></Route>
```

```
import {useParams} from 'react-router-dom';

const { id } = useParams()

const product = products.find(item => item.id === parseInt(id))

````

# usehistory
```
import {useHistory} from 'react-router-dom';

const history = useHistory()

<button className="btn btn-primary btn-block" onClick={()=>{addtocart(product);history.push('/cart')}}>add to cart</button>
```

# Redirect
```
import {Link,Redirect} from "react-router-dom"
```
```
if(auth){
   return <Redirect to="/products" />
 }
```
