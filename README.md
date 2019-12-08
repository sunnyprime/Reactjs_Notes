# Reactjs_Notes

## 1. For new Projects
##### create-react-app projectname

## 2. Router
##### npm i react-router-dom --save


## 3. [Axios](https://www.npmjs.com/package/axios)
##### npm install axios

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
 
