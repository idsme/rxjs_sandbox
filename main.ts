// Add you sand-box code here and lets play with RXJS.



// Normal way of adding a listener.
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/fromEvent";
import "rxjs/add/operator/scan";

const my_button_normal = document.querySelector('#my-button-normal');
const my_button_observable = document.querySelector('#my-button-observable');

let count = 1;
my_button_normal.addEventListener('click', (result) => console.log(`Clicker de click. From normal addEventListener:>count:>${count++}`));

// The RxJs way
Observable.fromEvent(my_button_observable, 'click')
    .scan(counter  => +counter + 1, 0)
    .subscribe({ next: result => console.log(`Clicker the Click fromEvents Observable>counter:>`,result)});