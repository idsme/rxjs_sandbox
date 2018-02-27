Purpose:
Basic start project for testing out RxJS 5.5.6 + operators etc.

commands run:
mkdir rxjs_sandbox
cd rxjs_sandbo
npm init
npm install rxjs --save
npm install webpack webpack-dev-server typescript typings ts-loader --save-dev
cd rxjs_sandbox\node_modules\.bin
typings install dt~es6-shim --save
cd ../..
npm install webpack-cli -D
npm start


Code: to show everything works
main.ts>>
alert("oke webpack & typescript working time to start coding with the RXJS lib");

let numbers = [1, 2, 3, 4, 5];
let subscription = Observable.from(numbers);

subscription.subscribe(
    (dataItem) => console.log(`${dataItem}`),
    (error)=> console.error(`Error detected:>`,error),
    ()=>console.info("Observer completed"));

<<

Add your stuff here have fun exploring RXjs
