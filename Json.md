# JSON

## Stringify

#### This convert data from object to string json

```
data=JSON.stringify(data)
```

## Parse

#### This convert stringjson to json object

```
local_data=JSON.parse(local_data)
```
---

# Local Storage

### Saving

```
localStorage.setItem("cart",data)
```

### Getting

```
var cart = localStorage.getItem("cart")
```

### Removing

```
localStroage.removeItem("Key")
```
---

# Cookies

#### It contains "NAME","VALUE","PATH","EXPIRES/MAX-AGE","SITES","HTTP ONLY","SECURE","SAMESITES"

### Adding
```
document.cookie = "username=John Doe";
document.cookie = "username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC"
document.cookie = "username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";
```

### Getting
```
var x = document.cookie;
```
### Changing
```
document.cookie = "username=John Smith; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";
```
### Deleting
```
document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
```
---
# Session

```
var x = document.cookie
```
