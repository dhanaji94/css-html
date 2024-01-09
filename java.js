// function gdd(){
//     alert("dhanaji")
// }

// var data={
//     name:"dhanaji",
//     age:26,
//     qualification:"Btech"
// }
// var out=JSON.stringify(data);
// console.log(out);


// var arr=[1,2,3,4,5,6]
// var out1=arr.indexOf(4);
// console.log(out1)

// var arr1=[5,4,3,2,1]
// console.log(arr1.indexOf(2))

// const user=(num1)=>{ return num1+5}
// const res=user(10);
// console.log(res)

// class User{
//     constructor(msg){
//         this.msg=msg;
//     }
//     admin(){
//         console.log(this.msg)
//     }
// }
// let obj=new User("hello")
// let obj2=new User("dhanaji")
// obj.admin()
// obj2.admin()

// const array=[1,2,3,4,5]
// for(const a of array){
//     console.log(a)
// }

// const person=(name,age=20)=>{
//     console.log(name+""+age)
// }
// person("dhanji");



// const persons={
//     fullName:function(msg){
//         console.log(msg +" " +this.firstName+ " "+this.secondName +" "+this.age)
//     }
// }
//  const persons1={
//        firstName:"dhanaji",
//        secondName:"gompa",
//        age:26,
// }
// const persons2={
//     firstName:"siva",
//     secondName:"tanneti",
//     age:28,
// }
// persons.fullName.call(persons1)
// persons.fullName.apply(persons1,["decent boy" ])
// const out=persons.fullName.bind(persons2)
// out("goodmorning")

// const out1=(...rest)=>{
//     console.log(rest)
// }
// out1(1,2,3)
// function out2(...rest){
//     console.log(rest)
// }
// out2(4,3,2)

// let arr1=[1,2,3,4]
// let arr2=[9,8,7,6]
// let arr3=[...arr1,...arr2]
// console.log(arr3)

// function cb(x,y,result){
//     return  result(x,y)
// }
// function add(a,b){
//     return a+b;
// }
// function div(a,b){
//     return a/b;
// }
// console.log(cb(30,30,add))
// console.log(cb(1000,10,div))


// let teacher=(()=>{
//     let count=0
//     return(name)=>{
//         let count =0;
//         return `${name},${count}`
//     }
// }) ();
// let out4 =teacher("hello",56) 
// console.log(out4);

// let student=(()=>{
//     let count=0;
//     return(name)=>{
//       let count =0;
//       return `${name},${count}`
//     }
// })();
// let out5=student("ABC")
// console.log(out5)

// const p= new Promise((resolve,reject)=>{
// let a=1;
// if(a==2){
//     resolve("success")
// }else{
//     reject("failed")
// }
// })
// p.then((massage)=>{
//     console.log(massage)
// })
// .catch((massage)=>{
//     console.log(massage)
// })


// const getUser=async()=>{
//   try{
//      const res=await fetch("")
//      const data=await res.json();
//       console.log(data);
//   }catch (err){
//       console.log(err);
//   }
// }
// getUser();

// const getd=async()=>{
//     try{
//         const res=await fetch("")
//         const data=await res.json();
//         console.log(data)
//     }catch(err){
//         console.log(err)
//     }
// }
// getd();


// let data="";
// fetch("")
// .then ((res)=>res.json())
// .then((data)=>console.log(data))
// .catch((err)=>console.log(err));



const products=[
    {
      name:"realme",
      cost:132000,
    },
    {
      name:"oneplus",
      cost:20000,
    },
    {
      name:"mi",
      cost:80000,
    },
    {
      name:"google",
      cost:10000,
    }];
    products.sort(comparision);
    function comparision(a,b){
      return a.cost-b.cost;
    }
    console.log(products);


    const text=['aaa','bbb','ccc','ddd','aaa','bbb','ccc','ddd']
    const output=[...new Set(text)]
    console.log(output)

    const nums=[1,2,3,4,5,6,74,5,6,7,2,3,]

    function duplicate(arr){
        return [...new Set(arr)]

    }
    console.log(duplicate(nums))

const winners=['chandu','chandu','siva','sathi','dhasnji']

function uwinners(arr){
    return [...new Set(arr)]
}
console.log(uwinners(winners))

const max=[1,11,111,1111,11111]
const maxi=Math.max(...max);
console.log(maxi)

const m=[1,2,3,4,5];
const m1=[5,6,7,8,9];
const u=[...m,...m1]
const u1=new Set(u)
console.log(u1)

const string='dhanaji gompa'
const rev=reverse(string)
console.log(rev)

function reverse(str){
    return str.split("").reverse().join("");
}
console.log()

let arr1=[1,5,8,3,5]
arr1.splice(2,0,10,13,14)
console.log(arr1)

let arr2=[1,2,3]
arr2.unshift(-2)
console.log(arr2);

class Person{
    constructor(n1,n2){
        this.n1=n1;
        this.n2=n2;
    }
    addition(msg){
        console.log(this.n1+this.n2)
    }
}

let obj=new Person(20,30)
obj.addition();

function arr(arr){
    return Array.isArray(arr)
}
console.log(arr({}));
console.log(arr([]))



const a=12;
if(a%1===0){
    console.log("integer")
}else{
    console.log("not!")
}

function makeDuplicate(arr){
    return arr.concat(arr)
}
console.log(makeDuplicate([1,2,3,4]));


function reverseNum(num){
    return Number(num.toString().split("").reverse().join(""))
}
console.log(reverseNum(9492987941))

function checkPalindrom(str){
    var reverse=str.split("").reverse().join("");
    if(reverse===str){
        console.log("true")
    }else{
        console.log("false")
    }
}
console.log(checkPalindrom("popw"))
console.log(checkPalindrom("goog"))

function alphabit(str){
    return str.split("").sort().join("")
}
console.log(alphabit("dhanaji"))

const total=[2,3,4,5,6,7,8]
const out5=total.reduce((n1,n2)=>{
    return n1+n2;
})
console.log(out5);

const join=['dhnaji','ram',12233,'siva',345];
 let sum=0;
 join.forEach((elm)=>{
    if(typeof elm==="number"){
        sum=sum+elm;
    }
 })
 console.log(sum)

 const arr3=[
    {name:"satya",gender:"female"},
    {name:"dhanji",gender:"male"},
    {name:"prani",gender:"female"},
    {name:"ramya",gender:"female"}
 ];
 var devide=arr3.filter((elm)=>{
    return elm.gender==="male";

    
 })
 console.log(devide); 
 
 const copy=[1,2,3,4,5,6]
 const res=copy.map((e)=>{
    return e;
 })
 console.log(res);