// enable es native es5 custome-elements
import '@webcomponents/custom-elements/src/native-shim';

import {Tooltip} from './components/tooltip/Tooltip';
import {Framework} from './lib/Framework';

// write your code here.
const app = new Framework();

app.registerComponent('ao-tooltip', Tooltip);
