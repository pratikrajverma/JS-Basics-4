// const id = setTimeout(()=>{
//     console.log('first')
// }, 3000)

// const id = setInterval(() => {
//     console.log('second')
// }, 1000);

//................ sync code .......................

// console.log('first')

// console.log('second')

// console.log('Third')

//................ Async code .......................

// console.log('first')

// setTimeout(() => {
//     console.log('second')
// }, 0);

// console.log('Third')

//.......event loop....................

// console.log('code first')

// setTimeout(() => {
//     console.log('code Second')
// }, 5000);

// console.log('code Third')

// setTimeout(() => {
//     console.log('code forth')
// }, 2000);

//................. Multiple Async ..........................


//   setTimeout(() => {
//     console.log("first code");
//   }, 5000);

//   setTimeout(() => {
//     console.log("Second code");
//   }, 3000);

//   setTimeout(() => {
//     console.log("Third code");
//   }, 1000);


///............................. callback hell..................................

// function first(callback) {
//     setTimeout(() => {
//         console.log("first code");

//         callback()  
//     }, 5000);
//     }

// function second(callback) {
//   setTimeout(() => {
//     console.log("Second code");
//     callback()
//   }, 3000);
// }

// function third() {
//   setTimeout(() => {
//     console.log("Third code");
//   }, 1000);
// }

// first(()=>{
//     second(()=>{
//         third()
//     })
// });
//  

 

