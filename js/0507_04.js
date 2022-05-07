const pets = ["dog", "cat", "rabbit", "parret"];
// console.log(pets.includes("cats"));

if (pets.includes("wale")) {
  console.log("wale is already here");
} else {
  console.log("there is not wale");
  pets.push("wale");
  console.log(`${pets} added wale righ now`);
}

if (!pets.includes("shark")) {
  console.log("there is not shark");
  pets.push("shark");
  console.log(`${pets} added shark righ now`);
} else {
  console.log("shark is already here");
}
