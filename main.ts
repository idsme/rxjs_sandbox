// Add you sand-box code here and lets play with RXJS.

import {Subject} from "rxjs/Subject";
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/from";

// Play with Subject
const subject = new Subject();

const observer1 = {
    next: data => console.log(`Observer1>`, data)
}



const observer2 = {
    next: data => console.log(`Observer2>`, data)
}


subject.subscribe(observer1);

subject.subscribe(observer2);


Observable.from([1,2,3,4]).subscribe(subject);
