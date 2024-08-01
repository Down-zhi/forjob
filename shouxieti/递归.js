function DIgui(n){
if(n===0||n===1){
    return 1
} else{
    return n * DIgui(n-1)
}
}
console.log(DIgui(5)); 
//题目描述：编写一个函数 fibonacci(n)，返回斐波那契数列的第n项。斐波那契数列定义为：F(0) = 0, F(1) = 1, F(n) = F(n-1) + F(n-2)。
function fibonacci(n){
if(n<=1){
    return n
}else{
    return fibonacci(n-1)+fibonacci(n-2)
}
}
console.log(fibonacci(3));
//编写一个函数 deepSum(arr)，计算嵌套数组中所有数字的和，数组可以是多层嵌套的。
function deepSum(arr){
    let sum=0;
    arr.forEach(element => {
        if(Array.isArray(element)){
            sum+=deepSum(element)
        }else{
            sum+=element
        }
    });
    return sum
}

function add(arr){
    if(arr.length===1) return arr[0]
    return add[0]+add(arr.slice(1))
}
console.log(deepSum([1, [2, [3, 4], 5], 6]));

// a) 生成一个长度为5的空数组arr。
// b) 生成一个（2－32）之间的随机整数rand。
// c) 把随机数rand插入到数组arr内，如果数组arr内已存在与rand相同的数字，则重新生成随机数rand并插入到arr内[需要使用递归实现，不能使用for/while等循环]
// d) 最终输出一个长度为5，且内容不重复的数组arr。
    var arr = new Array(5);
    var num = randomNumber();
    var i = 0;
    randomArr(arr,num);
    function randomArr(arr,num) {
        if (arr.indexOf(num)< 0){
            arr[i] = num;
            i++;
        } else {
            num = randomNumber();
        }
        if (i>=arr.length){
            console.log(arr);
            return;
        }else{
            randomArr(arr,num)
        }
    }
    function randomNumber() {
        return Math.floor(Math.random()*31 + 2)
    }
//数组扁平 
function flatten(arr){
    let arr1=[];
    arr.forEach(item=>{
        if(Array.isArray(item)){
            // flatten(item)
         arr1=  arr1.concat(flatten(item))
        }else{
            arr1.push(item)
        }
    })
    return arr1
}
console.log(flatten([1, [2, [3, 4], 5], 6]));

//实现字符串的repeat方法  输入字符串和重复次数 输出
function repeat(str,n){
if(n<=0){
    return ''
}else{
    return str.concat(repeat(str, n-1))
}
}
console.log(repeat("nb", 5));

//递归深拷贝

function deepClone(obj){
    //obj是我们要拷贝的数据
    //递归要先判断否定
    if(typeof obj !== 'object' || obj==null){
    //判断要拷贝的值是不是复杂数据类型，普通数据类型直接return
        return obj
    }
    let res
    if(obj instanceof Array){
        res=[]
    }else{
        res={}
    }
    for(key in obj){
    //判断值是否为obj本身的数值
        if(obj.hasOwnProperty(key)){
        res[key] = deepClone(obj[key]) //判断值是否是一个对象或者数组
    }
    }
    return res
}
let  x=deepClone([1,2,3,[4,5],{1:'1'}])
console.log( x==[1,2,3,[4,5],{1:'1'}]);


// function dc(obj){
//     if(typeof obj!=='object'){
//         return obj
//     }
//     let res
//     if(obj instanceof Array){
//         res=[]
//     }else{
//         res={}
//     }

//     for (key in obj){
//         if(obj.hasOwnProperty(key)){
//             res[key]=dc(obj[key])
//         }
//     }
// }