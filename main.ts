// Add you sand-box code here and lets play with RXJS.

// Subscribe => .unsubscribe();
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/interval";

const observable = Observable.interval(1000);
const subscription =  observable.subscribe(data => console.log(data));

setTimeout(()=>{
    console.log(`Unsubscribing ;)`);
    subscription.unsubscribe();
}, 5000);

