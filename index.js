// var a = require('./demo');
// console.log(a);

// for(let i=0;i<3;i++){
//     console.log(i);
// }

// let [a,b,c] = [8910];
// console.log(a,b,c);

// let res ={
//     a:2,
//     b:4,
//     c:6
// }
//
// let {a,b} = res;
// console.log(a,b);

// let a = (x) => x+5;
// console.log(a(5));

// var a = (name,age) =>({name:name,age:age});
// console.log(a('tian',18)); //返回一个对象 用括号包裹起来 区别于多条语句
//
// var b = () => {  //执行多条语句，如果有返回值，必须手写return
//     console.log('aaaa');
//     alert('bbbb');
//     return 3
// }
// console.log(b());

// function a(name,age){
//     return {
//         name:name;
//         age:age;
//     }
// }

//对对象写法的一个优化

let a = 3;
let b = 5;
let obj ={
    a,
    say(){
        console.log('我是ES6的写法')
    }
}
console.log(obj);

// function add(x=5,y=10){
//     return x+y;
// }
// console.log(add(5,5,3));
//
// let add1=(x=5,y=10) =>x+y;
// console.log(add(10,10));

//纯字符串用反引号包裹，其中有变量用${}包裹起来
// let age = 11;
// let name ='tian';
// console.log('姓名是'+name+'的年龄是'+age+'岁');
// console.log(`姓名是${name}的年龄是${age}岁`);

//数组
// function restFunc(a,...rest){
//     console.log(a);
//     console.log(rest);
// }
// restFunc(2,3,4);

// let restFunc=(a,...rest)=>console.log(rest);
// restFunc(5,6,7,8)

//reduce 工作原理 为数组为数组中的每一个元素依次执行回调函数
// function add(...x){
//     return x.reduce((m,n)=>m+n);
// }
// console.log(add(1,2,3));
//
// let addd=(...rest)=>rest.reduce((m,n)=>m+n);
// console.log(addd(3,4,5));

//回调函数
// function a(cb){
//     cb("aaa");
// }
// a(
//     function(str){
//         alert(str)
//     }
// )

//spread 扩展操作
// var people =['tian','dong','xue'];
// function sayHello(people1,people2,people3){
//     console.log(`hello ${people1},${people2},${people3}`);
// }
// sayHello(...people);

//map方法 map 方法会给原数组中的每个元素都按顺序调用一次 callback 函数。 有返回值
// let arr = [5,6,7];
// let newArr = arr.map(function(m,n,q){
//     return m+1;
// })
// console.log(newArr);
// console.log(arr);

// let [arr,newArr] = [[7,7,8]];
// newArr = arr.map( (m) =>m+1);
// console.log(newArr);

//forEach方法 没有返回值
// let arr = [7,8,9];
// arr.forEach(function(m){
//      console.log(m+1);
//  });

//filter方法
// let arr = [5,6,7,8];
// let results = arr.filter(function(m,n,q){
//     return m>6;
// });
// console.log('results======'+results);

let [arr,results] = [[9,10,13,45]];
results = arr.filter((m) =>m>10 )
console.log('results======'+results)
