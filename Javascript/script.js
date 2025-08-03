console.log("hi to everyone");

let name;
console.log("name",name);

function print(hero, abc='13'){
   console.log("HI, I am normal function");
   console.log(abc);
   console.log("hero");
}
print('hello', "lasya");

let b = function () {
 console.log("anonymous function");
};

b();


let c =()=> {
    console.log("this is arrow function")
 };

c();


console.log(document.title);
console.log(document.body);
console.log(document.URL);
console.log(document.head);
console.log(document.forms);
console.log(document.all);
console.log(document.getElementsByTagName("h1"));
console.log(document.getElementsByTagName("uniqueId"));
