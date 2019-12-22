# Functions

if isEmpty the display that
```
{isEmpty && (
           <p className="form-empty">please fill out all form fields</p>
       )}
```
## Ecommerce Functions


## Cart
##### useEffect

```
React.useEffect(()=> {
       //local storage
       localStorage.setItem("cart",JSON.stringify(cart))
       //cart items
       let newCartItems = cart.reduce((total,cartItems)=>{   

           return (total += cartItems.amount)
       },0)
       setCartItems(newCartItems)
       // cart total
       let newTotal = cart.reduce((total, cartItems)=>{
           return (total += cartItems.amount * cartItems.price)
       }, 0)
       newTotal = parseFloat(newTotal.toFixed(2))
       setTotal(newTotal)
   },[cart])
```

##### remove items
```
const removeItem = id => {
    setCart([...cart].filter(item => item.id !== id))
}
```
```
onClick={()=>removeItem(id)}

button type="button" className="cart-btn remove-btn" onClick={()=>removeItem(id)}>Remove</button>
```

##### increase amount
```
    const increaseAmount = id => {
        const newCart = [...cart].map(item => {
            return item.id === id
            ? { ...item, amount: item.amount +1}
            : {...item}
        })
        setCart(newCart)
    }
```
```
<button type="button" className="cart-btn amount-btn"
      onClick={()=>{increaseAmount(id)}}>
      ```

##### decrease amount
```
    const decreaseAmount = (id, amount) => {
        if (amount === 1) {
            removeItem(id)
            return
        }
        else{

        const newCart = [...cart].map(item => {
            return item.id === id
            ? { ...item, amount: item.amount - 1}
            : {...item}
        })

        setCart(newCart)
    }
    }
```
<button type="button" className="cart-btn amount-btn" onClick={()=>{decreaseAmount(id,amount)}}>
```
<button type="button" className="cart-btn amount-btn" onClick={()=>{decreaseAmount(id,amount)}}>
```
##### add to cart
```
    const addToCart = product => {
        const {id,imageurl,title,price} = product
        const item = [...cart].find(item => item.id === id)
        if (item){
            increaseAmount(id)
            return;
        } else {
            const newItem = { id, imageurl, title, price, amount: 1 }
            const newCart = [...cart, newItem]
            setCart(newCart)
        }
    }

```
<button className="btn btn-primary btn-block" onClick={()=>{addToCart(product); history.push('/cart')}}>add to cart</button>
```
##### clear cart
```
    const clearCart = () => {
        setCart([])
    }
```

## USER

##### get USER
```
function getUserFromLocalStorage() {
    return localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : { username:null, token:null }
}

const [user,setUser] = React.useState(getUserFromLocalStorage())

```
##### user Login
```
const userLogin = user => {
        console.log("context");
        console.log(user);
        setUser(user)
        localStorage.setItem("user", JSON.stringify(user))
    }

```
```
```
##### User logout
```
const userLogout = () => {
        setUser({ username: null, token: null })
        localStorage.removeItem("user")
    }
```
##### Alert
```
const [alert, setAlert] = React.useState({
    show:false,
    msg: "",
    type: "success"
})
const showAlert = ({msg,type="success"}) => {
    setAlert({show:true, msg, type})
}
const hideAlert = () => {
    setAlert({...alert,show: false})
}
```
##### handleSubmit
```
const toggleMember = () => {
        setIsMember(prevMember => {
            let isMember = !prevMember
            isMember ? setUsername("default") : setUsername("")
            return isMember
        })
    }

    const handleSubmit = async e => {
        showAlert({
            msg:"accessing user data. please wait....."
        })
        // alert
        e.preventDefault();
        // console.log("submit");

        let response
        if(isMember){
            response = await loginUser({email,password})
        }
        else{
            response = await registerUser({email, password, username})
        }
        if(response){
            // console.log("success");
            // console.log(response);
            const {jwt: token, user: { username }} = response.data
            const newUser = {token,username}
            // console.log(newUser);            
            userLogin(newUser)
            showAlert({
                msg: `you are logged in: ${username}. shop away my friend`})
                history.push("/products")
            }
            else {
                showAlert({msg:"there was an error. please try again",
            type:"danger"});
            }

                    // show alert        
    }
  ```
  
