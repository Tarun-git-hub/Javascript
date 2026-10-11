// for of

const myArr = [1,2,3,4,5]
for (const num of myArr) {
   // console.log(num);
    
}

const string = "hello world"
for (const str of string) {
   // console.log(str);
    
}


//Map
const map = new Map()
map.set('In',"India")
map.set('Fr',"France")
map.set('Uk',"United Kindom")

for (const [key,Value] of map) {
    console.log(key,Value);
    
}

const myObject={
    name:"tarun",
    id:"1716"
}
for (const [key,Value] of myObject) {
    console.log(key,Value);
    
}