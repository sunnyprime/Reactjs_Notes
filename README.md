# Reactjs_Notes
## [React Realtime](https://restdb.io/blog/react-in-realtime)
## 0. [TypeScript](https://github.com/sunnyprime/Reactjs_Notes/blob/master/TypeScript.md)

## .5 [JuniorToSnior](https://github.com/sunnyprime/Reactjs_Notes/blob/master/JuniorToSenior.md)
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
 ```
 import {FaAngleUp,FaAngleDown} from 'react-icons/fa'
 <FaAngleUp />
 ```
 ## 5. [React Context](https://github.com/sunnyprime/Reactjs_Notes/blob/master/Technologies.md)

 ## 6. [React Functions](https://github.com/sunnyprime/Reactjs_Notes/blob/master/Function.md)

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

## REDUX
```
npm install redux react-redux
```
```
npm install redux-thunk
```
## [Form Validation](https://www.w3resource.com/javascript/form/password-validation.php)
```
import React,{useState} from 'react'

export default function Register() {
    const [formData,setFormData] = useState({
        username:"",
        email:"",
        password:""
    })
    const [validate,setValidate] = useState({
        usernameError:"",
        emailError:"",
        passwordError:""
    })
    const {username,email,password} = formData
    const onChange = e =>{
setFormData({ ...formData,[e.target.name]: e.target.value})}
const onSubmit = async e =>{
    e.preventDefault();
    setValidate({usernameError:"",emailError:"",passwordError:""})
    
    if(!username){
        setValidate({usernameError:"Please enter the username"})
        }
        // email.includes("@")
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(!email.match(mailformat)){
        setValidate({emailError:"Please enter the email address"})}

    if(email===""){
           setValidate({emailError:"Please enter the email"})
    }

    if(!password){
        setValidate({passwordError:"Please enter the Password"})
    }
    var paswd=  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
    if(!password.match(paswd)){
        setValidate({passwordError:"Please enter the correct Password"})
    }
    
    
    
    // console.log(formData);
}
const {usernameError,emailError,passwordError} = validate

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={e=>onSubmit(e)}>
                <label>Usename:</label><br/>
                <input type="username" placeholder="Username" 
                value={username} name="username" onChange={e => onChange(e)}></input>
                <br/>
                {usernameError ? (
                <p style={{fontSize:12,color:"red"}}>{usernameError} </p>
               ) : null}
                <label>Email:</label><br/>
                <input type="username" placeholder="Email" 
                value={email} name="email" onChange={e => onChange(e)}></input>
                <br/>
                {emailError ? (
                <p style={{fontSize:12,color:"red"}}>{emailError} </p>):null}
                <br></br>
                <label>Password:</label><br/>
                <input type="password" placeholder="Password" 
                value={password} name="password" onChange={e => onChange(e)}></input>
                <br></br>
                {passwordError ? (
                <p style={{fontSize:12,color:"red"}}>{passwordError} </p>) :null}
                <input type="submit" />
            </form>
        </div>
    )
}

```

## Pagination
```
function pagination(arr){
var itemPerPage= 5
var newarray=[]
var flagarray = []
const newarr = arr.map((item,index)=>{
flagarray =[...flagarray,item]
if(flagarray.length===itemPerPage){
  newarray = [...newarray,flagarray]
  flagarray=[]
}
if(index===arr.length-1){
  if(flagarray==[]){
    console.log("indi");
  }
  console.log(flagarray);
  newarray = [...newarray,flagarray]
}})
return newarray
}
```
###### Show error list
```
npm install build-tools  -g
```
