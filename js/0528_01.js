function print(greetings) {
  console.log(`hellow ${greetings}.`);
}

print("world");
print("Good morning");

// step 2

sum(1, 3);
sum(5, 10);

function sum(a, b) {
  let result = a + b;
  console.log(result);
}

// step3

evenCheck(5);
evenCheck(6);
evenCheck("hello");
function evenCheck(num) {
  let answer = "";
  if (num % 2 === 0) {
    answer = "even";
  } else {
    answer = "odd";
  }
  console.log(`${num}은 ${answer}`);
}

console.log(isNaN(3));
console.log(isNaN("hello"));

// step4

numCheck(7);
numCheck("hello");
numCheck("");

function numCheck(num) {
  let answer = "";
  if (num == "") {
    console.log(`empty`);
  } else if (!isNaN(num)) {
    if (num % 2 === 0) {
      answer = "even";
    } else {
      answer = "odd";
    }
    console.log(`${num}은 ${answer}`);
  } else {
    console.log(`${num}은 숫자가아니다`);
  }
}

// step 5
gugudan(3);
gugudan(5);
gugudan("3dan");

function gugudan(dan) {
  if (!isNaN(dan)) {
    //dan 숫자라면, !를 제거하면 dan이 숫자가 아니라면
    for (let i = 1; i < 10; i++) {
      document.write(`${dan} * ${i} = ${dan * i}<br>`);
    }
  }

  return false;
}
