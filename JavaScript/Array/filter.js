var arr = [
  {id:1,name:"lenovo",price:250,amount:5},
  {id:2,name:"hp",price:850,amount:5},
  {id:3,name:"asus",price:670,amount:10},
  {id:4,name:"acer",price:850,amount:7},
  {id:5,name:"huwai",price:850,amount:6},
]

// input array[]
const filtered = arr.filter(item=>item.price<850)
// output array[] as multipled objects{}

console.log(filtered);
