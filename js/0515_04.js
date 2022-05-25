function sum(name) {
  console.log(`Hello ${name}.`);
}

sum("hansom");
sum("Ejey");

function sum(a, b) {
  let result = a + b;
  console.log(result);
}

sum(1, 3);
sum(3, 5);

function minus(a, b) {
  let result = a - b;
  console.log(result);
}
minus(5, 3);

runGugudan(5);

function runGugudan(dan) {
  for (let i = 1; i < 10; i++) {
    document.write(`${dan} * ${i} = ${dan * i} <br>`);
  }
}
