const fruits = ["banana", "melon", "apple"];

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

fruits.push("lemon");
fruits.unshift("mango");

fruits.push("tomato");
fruits.unshift("grape");
console.log(fruits);

fruits.pop();
fruits.pop(); // last delete
fruits.shift(); // first delete
console.log(fruits);
