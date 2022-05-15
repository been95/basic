const friends = ["jack", "jane", "mike", "scott"];
const alphabets = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];

/*
alphabets.forEach(function (alphabet) {
  console.log(alphabet);
});

*/
console.log(friends);

console.log(friends.indexOf("scott"));

for (let i = 0; i < friends.length; i++) {
  console.log(friends[i]);
}
friends.forEach(function (friend, index) {
  console.log(`${index}. ${friend}`);
});
