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
marks = [80,66,78,56,79,90];
// findindex
console.log("findIndex",marks.findIndex(x => x==90));

// map
console.log("map",marks.map((x) => x/2));

const isFrom1Rivet = (person) => person.company === "1Rivet";
const isNotFrom1Rivet = (person) => person.company != "1Rivet";

console.log("people from 1Rivet:- ",array1.filter(isFrom1Rivet));


// every return boolean
console.log("people from 1Rivet:- ", array1.every(isFrom1Rivet));
// console.log("people not from 1Rivet:- ", array1.filter(isNotFrom1Rivet));
// console.log(array1);

const num = [1, 2, 3, 4, 5, 1];
const number = [2, 3, 4]
console.log("fill: ",num.fill(8, 2));

// chech array or not return boolean value
console.log("isArray",Array.isArray(num))

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
const array3 = console.log(array1.concat(array2));

// key and value pair
for( x of array1.entries()){
    console.log(x)
}
