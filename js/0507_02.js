const fruits = ["banana", "melon", "apple", "lemon", "tomato", "grape"];
console.log(fruits);

fruits.splice(4); // 4번째원소부터 모두 삭제
fruits.splice(2, 1); //2번째 원소부터 1개만 삭제
fruits.splice(0, 2, "Grape"); //0번째 자리부터 2개의 원소를 삭제하고 그 자리에 새로운 포도가 들어간다
console.log(fruits);
