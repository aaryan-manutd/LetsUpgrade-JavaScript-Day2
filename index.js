//printing the elements of array in reverse
let arr = ['Clark', 'Bruce', 'Diana', 'Bary', 'Hal'];
console.log(arr.reverse());

//printing the elements separately in reverse
for (i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

//printing all the numbers divisible by 5 between 1 and 50.
for (i = 1; i <= 50; i++) {
  if (i % 5 == 0) {
    console.log(i);
  }
}