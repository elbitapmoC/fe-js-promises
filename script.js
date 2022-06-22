// CALLBACK EX -START
// const userLeft = false;
// const userWatchingCatMeme = true;

// function watchCallbackTut(callback, errCallback){
//   if(userLeft) {
//     errCallback({
//       name: "User's MIA",
//       message: ':[',
//     })
//   } else if(userWatchingCatMeme) {
//     errCallback({
//       name: 'User Watching Cat Videos..',
//       message: '\nWebdev Simplified < Cats'
//     })
//   } else {
//     callback('Thumbs up & Sub!')
//   }
// }

// watchCallbackTut(message =>{
//   console.log(`Success: ${message}`);
// }, err => {
//   console.log(`${err.name} ${err.message}`);
// })
// CALLBACK EX -END


// BASIC - START
// let p = new Promise((resolve, reject) => {
//     let a = 1+3;
//     if(a === 2){
//         resolve('Yatah!');
//     } else {
//         reject('Failed');
//     }
// })

// p.then(message => {
//     console.log(`Success: ${message}`);
// }).catch(message => {
//     console.log(`ERRRR: ${message}`);
// })
// BASIC - END