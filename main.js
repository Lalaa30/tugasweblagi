import './style.css'
import $ from 'jquery'

const texts = [
  "Klik bang!!",
  "Hay Oll, Nama Saya Badrayanti Mutiarani, IT 2022",
  "Sudahhhhh yach. Makazihh",
  "Byeee",
];
let currentIndex = 0;

$("#button").click(() => {
  currentIndex = (currentIndex + 1) % texts.length;
  $("#title").text(texts[currentIndex]);
});

