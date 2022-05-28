let i = 10;
while (i > 0) {
  console.log(i);
  i--;
}

let j = 10;
do {
  console.log(j);
  j--;
} while (j > 8);

console.log(j);

let day = new Date().getDay();
let toDay = "";
switch (day) {
  case 0:
    toDay = "일요일";
    break;
  case 6:
    toDay = "토요일";
    break;
  default:
    toDay = "평일입니다";
}
console.log(toDay);
