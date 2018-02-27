// Add you sand-box code here and lets play with RXJS.
import {Observable} from "rxjs";

alert("oke webpack & typescript working time to start coding with the RXJS lib");

let numbers = [1, 2, 3, 4, 5];
let subscription = Observable.from(numbers);

subscription.subscribe(
    (dataItem) => console.log(`${dataItem}`),
    (error)=> console.error(`Error detected:>`,error),
    ()=>console.info("Observer completed"));


