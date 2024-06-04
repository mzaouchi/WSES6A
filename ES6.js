function Hello(){
    {
      var youssef = 5
      console.log(youssef)
    }
    console.log(youssef)
   return "Hello ES6"
  }
  
  console.log(Hello())

  function Hello(){
    {
      const achref = 7
      console.log(achref)
    }
    console.log(achref)
    
   return "Hello ES6"
  }
  
  console.log(Hello())


  // const t = [3,7,1,9]

// console.log(t[1])

// t.push(10)
// t[5] = 9
// t[0] = 2
// console.log(t)

// t =12

// // const b = true

// // b = false

const obj = {name : "Mariem",age : 20}

obj.name = "Mahmoud"

console.log(obj)

obj = {}

function Hello(){
    return "Hello Mahmoud"
  }
  
  console.log(Hello())
  
  var hel   =       ()=> "Hello Mahmoud"
  
  console.log(hel())
  
  var somme=(a,b)=> a+b
  
  console.log(somme(2,4))
  
  var sum =(a,b)=>{
    var c = a+b
    return c
  }
  
  console.log(sum(3,5))

  var Hello =x=> "Hello"+" "+x

console.log(Hello("Moez"))

var sum=(a,b)=> a+b

console.log(sum(2,7))

var name = "Youssef"
var age = 88
console.log("Hello"+" "+ name)

console.log("Hello my name is " + name+ ", my age is "+ age)

console.log(`Hello my name is ${name},
my age is ${age}`)

var num = -6

// if(num>=0){
//   console.log("Positif")
// }else{
//   console.log("Negatif")
// }

num >= 0 ? console.log("Positif") : console.log("Negatif")

console.log(num>=0? "Positif" : "Negatif")



var age = 90


if(age<18){
  console.log("Enfant")
}else if(age<60){
  console.log("Adulte")
}else{
  console.log("Vieux")
}

console.log(age<18 ? "Enfant" : age<60 ? "Adulte" :  "Vieux")

var num = -4


if(num < 0){
  console.log("Negatif")
}

num < 0 && console.log("Negatif") 

var user = {name : "Mahmoud",age :20, adress : {ville : "Mhamdia", cp : 1145}}

// let Hello=djeja=> `Hello my name is ${djeja.name}, my age is ${djeja.age}, and i am from ${djeja.adress.ville}`

// console.log(Hello(user))


// let Hello=djeja=>{
//   var {name,age,adress} = djeja
//   var {ville} = adress
//   return `Hello my name is ${name}, my age is ${age}, and i am from ${ville}`
// }

// console.log(Hello(user))

let Hello = ({name,age,adress}) => `Hello my name is ${name}, my age is ${age}, and i am from ${adress.ville}`

console.log(Hello(user))

var t = [2,3,4]
var d = [6,9,7,9]
console.log([100000,...t,...d,...t,"word"])
// console.log(t+d)

// var f = []

// for(var i = 0;i<t.length;i++){
//   f.push(t[i])
// }
// for (var i = 0; i < d.length; i++) {
//   f.push(d[i])
// }
// console.log(f)

const array1 = [1, 2, 3, 4];


// console.log(array1.map((el,i,t)=>el))

console.log(array1.forEach((el,i,t)=> t[i] = el + 1))


var table = [2,4,7,8]

// console.log(t.map((achref,mahmoud,youssef)=>achref+1))

console.log(table.map((el,i,t)=> t[i] = el+2))

console.log(table)

var table = [2,4,7,8]
var sum = 0
table.forEach((el,i,t)=> sum+= el)


console.log(sum)


var table = [2,"Youssef",4,7,8,"Achref"]



console.log(table.filter((el,i,t)=> typeof(el) == "string"))



var table = [2,2,4,7,8,4]
console.log(table.find((el, i, t) => el == 84))
console.log(table.findIndex((el,i,t)=> el ==4))

var table = [2,2,4,7,8,4]


console.log(table.sort((a,b)=>a-b))


var table = ["b","a","z",1,99,2]


console.log(table.sort())


var table = [1,3,5,4,9,7,6]
var b = table.splice(2)
var a = table.splice(1, 3)

console.log([...a,...b])

var str = "bonjour la vie"

console.log(str.split(" "))

var t = ["Achref","Youssef","Mariem"]

console.log(t.join(" "))



