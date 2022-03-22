let text1= "shreya patel ,hii Hello!!, Welcome to js, Hello";
let text2= "angular"
let s1 = "hii";
let s2 = "hii";
// length
console.log("length of string:",text.length);

// endsWith return boolean
console.log("endsWith", text.endsWith("patel"))

// converts Unicode values to characters
let txt = console.log("unicode to character", String.fromCharCode(77,67,85,34,56))

// Check if a string includes specific word return boolean ("word", index)
console.log("includes word or not :",text.includes("Welcome",10))

// returns the position of the first occurrence value
// same as search
console.log("index of 1st occurance value", text.indexOf("patel",0))
console.log("index of 1st occurance value", text.indexOf("patel",8))
console.log("index of 1st occurance value using search", text.search("patel"))

// last occurance index of value 
// searches the string from the end to the beginning.
console.log("last index : ",text.lastIndexOf("Hello"))

//  compares two strings in the current locale.
// return 1, 0, -1
console.log(text.localeCompare(text2))
console.log(s2.localeCompare(s2))

// match return an array with matches
console.log("match", text.match("Hello"));
// for global search
console.log("match", text.match(/Hello/g)); 

// prototype
// to add new properties and methods to strings.
//  object.prototype.name = value
function employee(name, age){
    this.name = name;
    this.age = age;
}
const result = new employee("bob", 25)
employee.prototype.salary = 50000;

console.log(result ,result.salary);
console.log(result.salary)

// repeat() retuen copy of a string
console.log(s1.repeat(3))

// replace()
console.log(text.replace("Hello", "Hii"))
// change globally 
console.log(text.replace(/Hello/g, "Hii"))
// case sensitive
console.log(text.replace(/Hello/gi, "Hii"))

