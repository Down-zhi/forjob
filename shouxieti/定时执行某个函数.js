const Log=()=>{
    console.log(` 执行`);
}
const Timer=(delay)=>{
    setInterval(Log,delay)
}
console.log(Timer(1000));
// 用hook实现了