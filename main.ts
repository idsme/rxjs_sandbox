// Add you sand-box code here and lets play with RXJS.
import {Observable} from "rxjs";
import {first, last} from "rxjs/operators";

alert("oke webpack & typescript working time to start coding with the RXJS lib");

let numbers = [1, 2, 3, 4, 5];
let source = Observable.from(numbers);

// Get the first item only 1
source.pipe(first()).subscribe((data)=> console.log('data.first item only>', data));


// Get the last item only 5
source.pipe(last()).subscribe((data)=> console.log('data.last item only>', data));