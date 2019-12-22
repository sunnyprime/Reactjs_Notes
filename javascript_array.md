# JS_ARRAY

### Array_Sample
```
const items = [
  {name:"Bike", price:100},
  {name:"TV", price:200},
  {name:"Album", price:10},
  {name:"Book", price:5},
  {name:"Phone", price:500},
  {name:"Computer", price:1000},
  {name:"Keyboard", price:25},
]
---
```
### filter
```
const filteredItem = items.filter((item)=>{
  return item.price <= 100
})
console.log("filteredItem:");
console.log(filteredItem);
```
##### Output:
ilteredItem:
[
  { name: 'Bike', price: 100 },
  { name: 'Album', price: 10 },
  { name: 'Book', price: 5 },
  { name: 'Keyboard', price: 25 }
]
---
## map
```
const itemsName = items.map((item,index,array)=>{
  return item.price
})
console.log("\n \n map");
console.log(itemsName);
```
##### Output:
map
[
 100, 200,   10,
   5, 500, 1000,
  25
]
---
## find
```
const foundItem = items.find((item) => {
  return item.name === "Album"
})

console.log("\n \n find");
console.log(foundItem);
```
##### Output:
find
{ name: 'Album', price: 10 }
---
## forEach
```
items.forEach((item) => {
  console.log(item.price);
})
```
##### Output:
100
200
10
5
500
1000
25
---
## some
```
const hasInexpensiveItem = items.some((item) => {
  return item.price <= 100
})
console.log("\n \n some");
console.log(hasInexpensiveItem);
```
##### Output:
some
true
---
## every
```
const total = items.every((item) => {
  return item.price <= 100
})

console.log("\n \n every");
console.log(total);
```
##### Output:
every
false
---
### reduce
```
const totals = items.reduce((currentTotal, item) =>{
  return item.price + currentTotal
}, 0)

console.log("\n \n reduce");
console.log(totals);
```
##### Output:
reduce
1840

---
##  include
```
const itemss = [1,2,3,4,5]

const includeTwo = itemss.includes(4)

console.log("\n \n include");
console.log(includeTwo);
```
##### Output:
include
true
