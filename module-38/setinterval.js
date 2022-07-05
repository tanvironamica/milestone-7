console.log('first');
// setInterval(() => {
//     console.log('tik tik tik tik')
// }, 1000)

let seconds = 0;

const timeId = setInterval(() => {
    // seconds++;
    console.log(seconds++);
    if (seconds > 15) {
        clearInterval(timeId);
    }
}, 1000)
console.log('second');



/* 
console.log(seconds++); = 0 theke suru hoy
console.log(++seconds); = 1 theke suru hoy
*/