var arr = [
  {id:1,name:"lenovo",price:250,amount:5},
  {id:2,name:"hp",price:850,amount:5},
  {id:3,name:"asus",price:470,amount:10},
  {id:4,name:"acer",price:850,amount:7},
  {id:5,name:"huwai",price:850,amount:6},
]
// input array[]
var mapped1 = arr.map((item,index,array)=>item.price>500)
// output array with boolean if use like
console.log(mapped1);
//input array[]
var mapped2 = arr.map((item,index,array)=>item)
//ouptur array with their requirement of multipled objects
console.log(mapped2);
var mapped3 = arr.map((item,index,array)=>{
  if (item.id!==2)
  {
    return item
  }
})
console.log(mapped3);
