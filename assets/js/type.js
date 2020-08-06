import Typed from './typedjs-master/src/typed.js';

var options = {
  strings: ['TARUQ', 'TARIQ'],
  smartBackspace: true,
  typeSpeed: 100,
  backSpeed: 125,
  showCursor: false,

};

console.log(options.typeSpeed);

var typed = new Typed('#effect', options);