var today = new Date()
var curHr = today.getHours()
let word;

if (curHr < 12) {
    word = 'Good Morning';
} else if (curHr < 18) {
    word = 'Good Afternoon';
} else {
    word = 'Good Evening';
}

function changeColor(newColor) {
    const elem = document.getElementById("good_time");
    elem.innerHTML = `${word}`;
  }