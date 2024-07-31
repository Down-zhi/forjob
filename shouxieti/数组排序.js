const sort=(arr)=>{
let res=[]
for(let i=0;i<arr.length-1;i++){
    for(let j=0; j<arr.length-1;j++)
    if(arr[i]>arr[j]){
   res.unshift(arr[j])
    }else{
        res.unshift(arr[i])
    }
    return res
}
}
//应该不输出新的，直接内部排序
console.log(sort([3,6,8,56,43,23,70,43]));