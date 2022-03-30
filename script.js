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

    img.style.filter = `blur(${kamayuvchi}rem)`;

    if (kamayuvchi == 100) {
      // } else if (kamayuvchi == 90) {
      //   img.style.filter = `blur(0.9rem)`;
      // } else if (kamayuvchi == 80) {
      //   img.style.filter = `blur(0.8rem)`;
      // } else if (kamayuvchi == 60) {
      //   img.style.filter = `blur(0.6rem)`;
      // } else if (kamayuvchi == 40) {
      //   img.style.filter = `blur(0.4rem)`;
      // } else if (kamayuvchi == 20) {
      //   img.style.filter = `blur(0.2rem)`;
      // } else if (kamayuvchi == 10) {
      //   img.style.filter = `blur(0.1rem)`;
      // } else if (kamayuvchi == 0) {
      //   img.style.filter = `blur(0)`;
      //   clearTimeout(t);
    } else if ((kamayuvchi = 0)) {
      clearTimeout(t);
    }
    // console.log(kamayuvchi);
  }, 50);
});
