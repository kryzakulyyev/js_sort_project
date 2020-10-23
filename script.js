//1
let arr=["Ben", "Jenny", "Michael", "Chloe", "Timmy"];

//2
function whoIsWashing(arrNames){
  let arrLength=arrNames.length;
  let random=Math.floor(Math.random()*arrLength);
  return `${arrNames[random]} is going to wash dishes today!`
}
console.log(whoIsWashing(arr))

//5
arr.push('Max');
let arrNeighbours=["Patrick", "AnnMArie", "Alisol", "Walton"];

console.log(whoIsWashing(arrNeighbours))