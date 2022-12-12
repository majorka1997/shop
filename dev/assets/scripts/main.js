// var app = 1;
let script = 2;
const NUMBER = 3;
let app = null;

// script = 5;
// console.log('script5', typeof script);

// script = '6';
// console.log('script6', typeof(script));

number = 5;
app = 1;

console.log("number", number);
console.log("app", app);

// app = undefined;

/* 
string  // "fdsfsdfs", 'dsadasd', `sadsadas`
number  // 1, 2, 3,  .... 
NaN    // 'test'/1 = NaN
Infinity  // 1 / 0 = Infinity, -Infinity
BigInt  // -+(2^53 - 1)
Boolean // true, false
Object // {}
symbol,
typeof // typeof x, typeof(x)
undefined
null
*/

// const obj = {
//   key: value,
// };

// console.log('script', script);

// ФИЛЬТР
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function filterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtЗначение = a[i].textСодержание || a[i].innerText;
    if (txtЗначение.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}
