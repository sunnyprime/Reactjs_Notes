var arr = [
  {id:1,name:"lenovo",price:250,amount:5,company:"prime"},
  {id:2,name:"hp",price:850,amount:5,company:"prime"},
  {id:3,name:"asus",price:670,amount:10,company:"prime"},
  {id:4,name:"acer",price:850,amount:7,company:"prime"},
  {id:5,name:"huwai",price:850,amount:6,company:"prime"},
]
// input arr[] check every should one
const total = arr.every((item)=>{
  return item.price > 500
})
// output boolean

console.log(total);
