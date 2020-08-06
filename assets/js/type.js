import Typed from './typedjs-master/src/typed.js';

var options = {
  strings: ['TARIW', 'TARIQ'],
  typeSpeed: 700,
  startDelay: 500,
  backSpeed: 300,
  backDelay: 400,
  smartBackspace: true,
  showCursor: false,

};

console.log(options.typeSpeed);

var typed = new Typed('#effect', options);