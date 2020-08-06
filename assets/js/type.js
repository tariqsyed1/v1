import Typed from './typedjs-master/src/typed.js';

var options = {
  strings: ['TARUQ', 'TARIQ'],
  smartBackspace: true,
  typeSpeed: 200,
  backSpeed: 200,
  backDelay: 200,
  showCursor: false,

};

console.log(options.typeSpeed);

var typed = new Typed('#effect', options);