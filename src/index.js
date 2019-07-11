import './index.css';
import numeral from 'numeral';

const courseValue = numeral(1000).format('$0,0.00');
//debugger //used to translate the code in the browser to the original code after bundle.
console.log(`I would pay ${courseValue} for this awesome course`); //eslint-disable-line no-console