const _instance=(obj,type)=>{
if(typeof obj!=='object'||obj==null) return false

//先找对象原型
//原型对象可以通过 __proto__ 属性访问，也可以通过 Object.getPrototypeOf() 方法获取
let proto =Object.getPrototypeOf(obj)  //就是Object.prototype
while (proto){
    
    if (proto==type.prototype) return true 
    //如果还没判断到就继续找
    proto=Object.getPrototypeOf(proto )
}

}

console.log( _instance  ({},Object));
console.log([],Array);
console.log(1,Object);

//大概的判断引用类型
const Type=(obj)=>{
let res=Object.getPrototypeOf(obj)
return res
}
let x=[1,3,2,2],y=5,z=()=>{
    console.log('11');
}

console.log(Type(z));
