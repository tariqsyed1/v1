import Typed from './typedjs-master/src/typed.js';

var options = {
  strings: ['TARUQ', 'TARIQ'],
  typeSpeed: 200,
  startDelay: 200,
  backSpeed: 200,
  backDelay: 200,
  smartBackspace: true,
  showCursor: false,

};

console.log(options.typeSpeed);

var typed = new Typed('#effect', options);