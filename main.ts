// Add you sand-box code here and lets play with RXJS.
import {interval} from "rxjs/observable/interval";

import {of} from "rxjs/observable/of";
import "rxjs/add/operator/take";
import {concatAll} from "rxjs/operators";


const source1 = interval(2000).take(5);
const source2 = interval(2000).take(3);
const source3 = interval(2000).take(1);

const source = of(source1, source2, source3);

const example = source.pipe(concatAll());

example.subscribe((data) => console.log('output>', data));

// output> 0
// main.ts:17 output> 1
// main.ts:17 output> 2
// main.ts:17 output> 3
// main.ts:17 output> 4
// main.ts:17 output> 0
// main.ts:17 output> 1
// main.ts:17 output> 2
// main.ts:17 output> 0