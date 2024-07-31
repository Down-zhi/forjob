const person = {
    firstName: 'John',
   
    fullName: function(arg) {
        return this.firstName + ' ' + arg
    }
};

const anotherPerson = {
    firstName: 'Jane',
    lastName: 'Smith'
};

console.log(person.fullName('lalla')); // "John Doe"s

// 使用 `call` 改变 `this` 值
console.log(person.fullName.call(anotherPerson,anotherPerson.lastName)); 

//实现一个call

判断指向的对象是否是null 
   // 原理就是将函数作为传入的上下文参数（context）的属性执行，
const selfCall = function (context, ...agrs) {
  
    context || (context = window)
    let caller = Symbol('caller')
    context[caller] = this           //绑定到内容上
    const res = context[caller](...agrs) //调用该方法，并传递参数
    delete context[caller]
    return res
}