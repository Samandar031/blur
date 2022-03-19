let btn = document.querySelector(".btn");
let img = document.querySelector("img");

let foiz = document.querySelector(".foiz");
// let count = function () {
//   foiz.textContent = parseFloat(foiz.textContent) - 1;
// };

// let t = setInterval(function () {
//   foiz.textContent = parseFloat(foiz.textContent) - 1;
//   let kamayuvchi = foiz.textContent;
//   if (kamayuvchi == 0) {
//     clearTimeout(t);
//   } else if (kamayuvchi == 50) {
//   }
// }, 100);

btn.addEventListener("click", function () {
  let t = setInterval(function () {
    foiz.textContent = parseFloat(foiz.textContent) - 1;
    let kamayuvchi = foiz.textContent;
    if (kamayuvchi == 0) {
      clearTimeout(t);
    } else if (kamayuvchi == 50) {
    }
  }, 100);
});
