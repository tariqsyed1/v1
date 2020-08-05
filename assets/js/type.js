import Typed from 'typed.js';

console.log("hello");

var options = {
  strings: ['<i>Tariq</i> sentence.', '&amp; a second sentence.'],
  typeSpeed: 40
};

console.log("starting to type");
var typed = new Typed('.brand-heading', options);
console.log("done");