//let 和 const
//01
{
  let a = 10;
  var b = 1;
}
console.log(b);
// console.log(a);
// 02
{
  for(var i = 0 ; i < 10; i++ ){}
  console.log(i);

  for(let j = 0 ; j < 10; j++ ){}
  // console.log(j);
}
//03
var a = [];
for(var i = 0; i < 10; i++ ){
  a[i] = function () {
    console.log(i);
  }
}
a[6]();
