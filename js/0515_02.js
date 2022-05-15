const pets = ["dog", "cat", "rabbit", "hamster", "pig"];
const alphabets = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
const dash = "------------------------------------------";
for (let i = 0; i < pets.length; i++) {
  console.log(pets[i]);
}

for (alphabet of alphabets) {
  document.write(alphabet + "<br>");
}

alphabets.forEach(function (alphabet) {
  console.log(alphabet);
});

console.log(dash);

pets.forEach(function (arr) {
  console.log(arr);
});

console.log(dash);

for (pet of pets) {
  console.log("hello" + pet);
}
console.log(dash);

for (i in pets) {
  console.log(i);
}
