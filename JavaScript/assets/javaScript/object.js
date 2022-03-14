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