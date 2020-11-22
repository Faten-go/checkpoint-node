//console.log(process.argv)
// for (statement1; statement2; statement3) {
//     doSomething;
//   }
// for (var i = 2; i < process.argv.length; i++) {
//     result += Number(process.argv[i]);
//   }

var sum = 0;
for (var i = 2; i < process.argv.length; i++) {
  //console.log('Adding ' + process.argv[i]);
  sum += Number(process.argv[i]);
}

console.log(sum)