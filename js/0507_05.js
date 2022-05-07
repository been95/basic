const numbers = [1, 2, 3, 4, 5, 7];

if (numbers.includes(6)) {
  console.long("6있다");
} else {
  console.log("6이없습니다");
  //numbers.push(7);
  // console.log(`${7}이 추가되었습니다`);
  numbers.splice(5, 0, 6);
}
console.log(numbers);
