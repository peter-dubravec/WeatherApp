let a = 10;
let ahoj = (() => {
  a = 5;
  return { a };
})();

console.log(a);
