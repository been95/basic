const pets = ["dog", "cat", "rabbit", "hamster", "pig"];
// object.pop(), object.shift(), object.unshift(), object.push();
pets.pop();
console.log(pets);
pets.shift();
console.log(pets);
pets.push("pig");
console.log(pets);
pets.unshift("dog");
console.log(pets);
pets.splice(2, 2, "parret", "elephant");
console.log(pets);
