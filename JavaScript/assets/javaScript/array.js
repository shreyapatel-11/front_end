let array1 = [
    {
        id: 1,
        name: "Shreya",
        email: "shreya@gmail.com",
        company: "1Rivet"
    },
    {
        id: 2,
        name: "Nirali",
        email: "nirali@gmail.com",
        company: "1Rivet"
    },
    {
        id: 3,
        name: "Aayushi",
        email: "aayushi@gmail.com",
        company: "1Rivet"
    },
    {
        id: 4,
        name: "Maitry",
        email: "maitry@gmail.com",
        company: "ECFY"
    },
    {
        id: 5,
        name: "Ishika",
        email: "ishika@gmail.com",
        company: "ECFY"
    },
    {
        id: 6,
        name: "Viral",
        email: "viral@gmail.com",
        company: "1Rivet"
    },
    {
        id: 7,
        name: "Sushil",
        email: "sushil@gmail.com",
        company: "1Rivet"
    },
    {
        id: 8,
        name: "Tanmay",
        email: "tanmay@gmail.com",
        company: "1Rivet"
    },
    {
        id: 9,
        name: "Hrishi",
        email: "Hrishi@gmail.com",
        company: "1Rivet"
    },
    {
        id: 10,
        name: "Sneha",
        email: "sneha@gmail.com",
        company: "1Rivet"
    },
];


// console.log("replace 1rivet to google: ",array1.replace("1Rivet","Google"))
// -------------------------------------------------------------------------------------------
marks = [80,66,78,56,79];
// key and value pair
for( x of marks.entries()){
    console.log("entries",x)
}
// keys
console.log("keys: ", Object.keys(marks))
// findindex
console.log("findIndex: ",marks.findIndex(x => x==90));

// map
console.log("map: ",marks.map((x) => x/2));

const isFrom1Rivet = (person) => person.company === "1Rivet";
const isNotFrom1Rivet = (person) => person.company != "1Rivet";

console.log("incluses",marks.includes(78,3))
// forEach
let result= "";
function empName(index, name){
    result += index + ": " + name + "<br>" 
}

// sort()
console.log("sort() array: ",marks.sort());
console.log("foreach: ",marks.forEach(empName));
console.log("filter : people from 1Rivet:- ",array1.filter(isFrom1Rivet));
console.log("find : ",array1.find(isFrom1Rivet));
console.log("findIndex : ",array1.findIndex(isNotFrom1Rivet));

// every return boolean
console.log("every: people from 1Rivet:- ", array1.every(isFrom1Rivet));
console.log("some(): people from 1Rivet:- ", array1.some(isFrom1Rivet));
// console.log("people not from 1Rivet:- ", array1.filter(isNotFrom1Rivet));
// console.log(array1);

// --------------------------------------------------------------------------
const num = [1, 2, 3, 1, 4, 5, 2];
const number = [];

// reduce()
function getSum(sum, no){
    return sum + no;
}
console.log("reduce", num.reduce(getSum))

// toString()
console.log("toString(): ", num.toString());

// valueOf() returns the array itself:
const copyNum = console.log("valueOf(): ", num.valueOf());

// reverse()
console.log("reverse array: ",num.reverse());

// slice()
console.log("slice(): ", num.slice(3,6))

// let sum = 0;
// function sumNum(){
//     for(let i=0; i<=num.length; i++){
//         sum = sum + i;
//     }
//     return sum;
// }
// console.log("reduce: ", num.reduce(sumNum))
console.log("join",num.join(" & "))
console.log("indexOf: ", num.indexOf(1,2))
console.log("lastIndexOf: ", num.lastIndexOf(2))

console.log("copyWithin",num.copyWithin(number));
console.log("copyWithin",num.copyWithin(2,0))

// entries
// console.log(num.entries());

console.log("fill: ",num.fill(8, 2));

// chech array or not return boolean value
console.log("isArray",Array.isArray(num))

// ----------------------------------------------------------------------------------------------
// splice
const list = ["January","March","April","May"];
console.log("list",list);
console.log("splice",list.splice(1, 0, "February")); 


// push
console.log("push",list.push('June'));

// shift remove 1st ele and return
console.log("shift",list.shift());
console.log("unshift",list.unshift("Jan"));

// slice() method returns selected elements in an array, as a new array.
console.log("slice",list.splice(1, 3)); 

// ----------------------------------------------------------------------------------------------------
let text = "HiiHello"
console.log("Create array from string: ",Array.from(text))

let array2 = [
    {
        id: 1,
        name: "Abhishek",
        email: "Abhishek@gmail.com",
        company: "1Rivet"
    },
    {
        id: 2,
        name: "Chirag",
        email: "Chirag@gmail.com",
        company: "1Rivet"
    },
    {
        id: 3,
        name: "Jigar",
        email: "Jigar@gmail.com",
        company: "1Rivet"
    },
    {
        id: 4,
        name: "Mrunal",
        email: "Mrunal@gmail.com",
        company: "1Rivet"
    },
    // {
    //     id: 5,
    //     name: "Mehul",
    //     email: "Mehul@gmail.com",
    //     company: "1Rivet"
    // },
    // {
    //     id: 6,
    //     name: "Dharmit",
    //     email: "Dharmit@gmail.com",
    //     company: "1Rivet"
    // },
    // {
    //     id: 7,
    //     name: "Parth",
    //     email: "Parth@gmail.com",
    //     company: "LogixBuilt"
    // },
    // {
    //     id: 8,
    //     name: "Ashish",
    //     email: "Ashish@gmail.com",
    //     company: "Crest"
    // },
    // {
    //     id: 9,
    //     name: "Ankit",
    //     email: "Ankit@gmail.com",
    //     company: "LogixBuilt"
    // },
    // {
    //     id: 10,
    //     name: "Kirti",
    //     email: "Kirti@gmail.com",
    //     company: "LogixBuilt"
    // },
]


// concat 2 array
const array3 = console.log("concat 2 array",array1.concat(array2));


