function displayCaracter(n) {
    for (let i = 1; i <= n; i++) {
      if (i % 2 === 1) {
        console.log("A");
      } else {
        if (i % 4 === 0) {
          console.log("C");
        } else {
          console.log("B");
        }
      }
    }
  }
  displayCaracter(4,);
  displayCaracter(4);
  displayCaracter(2);

  module.exports = displayCaracter