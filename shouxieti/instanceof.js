const _instance=(obj,type)=>{
if(typeof obj!=='object'||obj==null) return false

//先找对象原型
let proto =Object.getPrototypeOf(obj)
while (proto){
    
    if (proto==type.prototype) return true 
    //如果还没判断到就继续找
    proto=Object.getPrototypeOf(proto )
}

}

console.log( _instance  ({},Object));
console.log([],Array);
console.log(1,Object);