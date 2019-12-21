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
