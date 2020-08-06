import Typed from './typedjs-master/src/typed.js';

var options = {
  strings: ['TARIW', 'TARIQ'],
  typeSpeed: 100,
  startDelay: 500,
  backSpeed: 100,
  smartBackspace: true,

};

console.log(options.typeSpeed);

var typed = new Typed('#effect', options);