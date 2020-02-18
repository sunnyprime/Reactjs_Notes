# Router

```
import {BrowserRouter as Router,Switch, Route} from "react-router-dom";

<Router>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/about">
        <About />
      </Route>

      <Route path="/cart">
        <Cart />
      </Route>
      <Route path="*">
        <Error />
      </Route>
      </Switch>
    </Router>
    
```
#### Vintage router
```
<Fragment>
<ProductsProvider>

    <Router>
      <Navbar></Navbar>
      <Alert></Alert>
      <Switch>
      <Route exact path="/"><Home /></Route>
      <Route path="/about"><About /></Route>
      <PrivateRoute exact path="/cart" component={Cart}></PrivateRoute>
      <Route path="/checkout"><Checkout /></Route>
      <Route path="/login"><Login /></Route>
      <Route path="/register"><Register /></Route>
      <Route exact path="/products"><Products /></Route> 
      <Route path="/products/:id" children={<ProductDetails />}></Route>
      <Route path="*"><Error /></Route>
      </Switch>
    </Router>

    </ProductsProvider>    
</Fragment>
```

#### Link
```
import {Link,NavLink} from 'react-router-dom'

<Link to="/store" className="navbar-icon mx-2 navbar-cart-icon">
```

