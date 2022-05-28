// while

let i = 0;
while (i > 10) {
  console.log(i);
  i++;
}

let j = 0;
do {
  console.log(`${j}`);
  j++;
} while (j > 10);

// switch... case
let coffee = prompt("Select coffee - Latte, Americano, Capuchino");

switch (coffee) {
  case "Latte":
    document.write("Latte $3.5");
    break;

  case "Americano":
    document.write("Latte $4.5");
    break;

  case "Capuchino":
    document.write("Latte $5.5");
    break;

  default:
    document.write("We dont have that menu");
}
