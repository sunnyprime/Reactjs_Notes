# Reactjs_Notes

## 1. For new Projects
##### create-react-app projectname

## 2. [Router](https://reacttraining.com/react-router/web/guides/quick-start)
##### npm i react-router-dom --save
##### npm install react-router-dom
[sample](https://github.com/sunnyprime/Reactjs_Notes/blob/master/Router.md)


## 3. [Axios](https://www.npmjs.com/package/axios)
##### npm install axios
[sample](https://github.com/sunnyprime/Reactjs_Notes/blob/master/Axios.md)


 
 ## 4. [React icon](https://react-icons.netlify.com/#/)
 ##### npm install react-icons --save
 
 
 
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

## git code sample
##### echo "# budget_calculator" >> README.md
##### git init
##### git add README.md
##### git add .
##### git commit -m "first commit"
##### git remote add origin https://github.com/sunnyprime/budget_calculator.git
##### git push -u origin master
