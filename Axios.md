# Axios Samples

### Get Request Sample
```     state = {
        articles:[]
    }

    componentDidMount(){
        axios.get('http://127.0.0.1:8000/api/')
            .then(res => {
                this.setState({
                    articles: res.data
                })
                //  console.log(res.data);                 
            })
    }
 ```
 
 ### Post Request sample
 
 ```
         axios.post('http://127.0.0.1:8000/rest-auth/login/',{
            username:"",            
            password:""})
            .then(function(response){
                console.log(response);
                console.log(response.data);
                console.log(response.status);
                console.log(response.statusText);
                console.log(response.headers);
                console.log(response.config);                
            })
            .catch(function (error) {
                console.log("erre"+error);
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
              });
    
    
    }
 ```
 #### POST with asyn await and try catch and redux
 ```
 const body ={
        username,
        email,
        password
    }
    

    try {          
        
        const res= await axios.post("http://localhost:1337/auth/local/register",body)      
        
        // console.log(res.data);
        
        dispatch({
            type:REGISTER_SUCCESS,
            payload:res.data
        })
        // dispatch(loadUser())
    }
    catch(err){
               
        var errors = err.response.data.errors
        if (errors===undefined)
        {
            errors = err.response.data.error
        }
        // console.log(errors);               
        
        if (errors) {       
            dispatch(setAlert(errors,"danger"))
        }
        dispatch({
            type:REGISTER_FAIL
        })

    }
```
    
### Put Request Sample
```
 return axios.put(`http://127.0.0.1:8000/api/${articleID}/`,{
                    title:title,
                    content:content
            })
            .then(res => console.log(res))
            .catch(err => console.error(err))
```
### Delete Request Sample
```
axios.delete(`http://127.0.0.1:8000/api/${articleID}`)
        this.props.history.push('/')
        this.forceUpdate()
 ```
