let name = "tarun"
const value = 18

// console.log(name + value);     // this is not a good method 

const info = (`my name is ${name} and number is ${value}`);

// console.log(info)

const str = new String("cricket")

// console.log(str[0]);
// console.log(str.__proto__);

console.log(str.length);
console.log(str.charAt(2));
console.log(str.indexOf('t'));
console.log(str.includes("cri"));
console.log(str.replace("cricket","football"));
console.log(str.substring(1,4));
console.log(str.slice(0,5));

const str2 = new String("   hello-world  ")
console.log(str2.trim());
console.log(str2.split('-'));

















