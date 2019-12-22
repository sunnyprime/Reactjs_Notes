# Reactjs_Notes

## 1. For new Projects
##### create-react-app projectname

## 2. [Router](https://reacttraining.com/react-router/web/guides/quick-start)
##### npm i react-router-dom --save
##### npm install react-router-dom
[sample](https://github.com/sunnyprime/Reactjs_Notes/blob/master/Router.md)


## 3. [Axios](https://www.npmjs.com/package/axios)
##### npm install axios
##### npm i axios --save
[sample](https://github.com/sunnyprime/Reactjs_Notes/blob/master/Axios.md)



 ## 4. [React icon](https://react-icons.netlify.com/#/)
 ##### npm install react-icons --save

 ## 5. [React Context](https://github.com/sunnyprime/Reactjs_Notes/blob/master/Technologies.md)

 ## 6. [React Functions]((https://github.com/sunnyprime/Reactjs_Notes/blob/master/Functions.md)

## 7. Hidden API_Key Integration with Github [underprocess]
1. create file .env.development parallel to -gitignore
```
REACT_APP_API_KEY =---[your key]---
```
2.Add command to gitignore
```
.env.development
```
3. Use your key as
```
 const url = `https://www.food2fork.com/api/get?key=${process.env.REACT_APP_API_KEY}&rId=${this.state.id}`;
```
## Hero Components
```
import React from 'react'

export default function Hero({children}) {
    return (
        <div className="hero">
            <div className="banner">
                <h1>think, code, deploy</h1>
                <p>embrace your choices - we do</p>
                {children}
            </div>
        </div>
    )
}

```
###### Passing it from other component
```
<Hero>
        <Link to="/products" className="btn btn-primary btn-hero">
            our products
        </Link>
        </Hero>
```


---

## [Github commands](https://github.com/sunnyprime/Reactjs_Notes/blob/master/github.md)

## [JavScript Array](https://github.com/sunnyprime/Reactjs_Notes/blob/master/javascript_array.md)

## [JSON](https://github.com/sunnyprime/Reactjs_Notes/blob/master/Json.md)
