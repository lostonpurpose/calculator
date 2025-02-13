import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    console.log("poophead");
  }

static targets = ["button", "display", "ac-button", "enter-button"]

clicked(event) {
    console.log("turdburger");
    const buttonText = event.target.innerText;
    this.displayTarget.value += buttonText;
};

clear(event) {
  console.log("cleared");
  this.displayTarget.value = ""
};

calculate(event) {
  const calc = this.displayTarget.value;
  const answer = eval(calc);
  console.log(answer);
  this.displayTarget.value = answer
}

// calculate(event) {
//   const calc = this.displayTarget.value;
//   console.log(calc);
//   const array = []
//   calc.split('').forEach(item => {
//     let num = parseInt(item, 10);
//     if (!isNaN(num)) {
//             array.push(num);
//           }
//     else {
//       array.push(item);
//     }
//     console.log(array);
//   });

//   const numcalc = parseInt(calc, 10);
//   console.log(numcalc);
// }
}