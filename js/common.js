// $(function () {

// });
function main(input) {
  var a = input.split(" "); // 入力

  if (i % 5 == 0) {
    console.log("割り切れます");
  } else if (i % 3 == 0) {
    console.log("割り切れます");
  } else {
    console.log("割り切れません");
  }
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
