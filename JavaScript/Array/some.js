var arr = [
  {id:1,name:"lenovo",price:250,amount:5,company:"prime"},
  {id:2,name:"hp",price:850,amount:5,company:"prime"},
  {id:3,name:"asus",price:670,amount:10,company:"prime"},
  {id:4,name:"acer",price:850,amount:7,company:"prime"},
  {id:5,name:"huwai",price:850,amount:6,company:"prime"},
]
// input arr[] check at least one
const total = arr.some((item)=>{
  return item.price == 850
})
// output boolean

console.log(total);
