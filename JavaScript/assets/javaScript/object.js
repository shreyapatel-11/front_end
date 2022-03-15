const o1 = {a:1, b:2};
const o2 = {c:3, d:4};

const o3 = console.log("assign: ",Object.assign(o1, o2)) ;

const me = console.log(Object.create(null));

// freeze()
Object.freeze(o1);
o1.a = 6;
console.log("freeze: ", o1.a);

// spread operator
const cloneObj = console.log("...Spread ope. : ",{...o1, ...o2}) 

// fromEntries()
const entries = new Map([
['foo', 'bar'],
['baz', 42]
]);

const obj = Object.fromEntries(entries);
console.log("fromEntries(): ",obj);

// is() like ===
console.log("is(25, 25): ", Object.is( 25, 25));  

// values()
const object1 = {
a: 'Hello',
b: 11,
c: false
};

console.log("values(): ",Object.values(object1));

// seal()
Object.seal(object1);
object1.d = 99;
console.log("seal(): ",object1.d);