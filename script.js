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

const userLeft = false;
const userWatchingCatMeme = false;

// CALLBACK EX -START
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

// sub promise for callback - START
function watchPromiseTut(){
  return new Promise((resolve, reject)=>{
    if(userLeft) {
      reject({
        message: "User's MIA\n:[",
      })
    } else if(userWatchingCatMeme) {
      reject({
        message: 'User Watching Cat Videos..\nWebdev Simplified < Cats'
      })
    } else { 
      resolve('Thumbs up & Sub!')
    }
  });
}

watchPromiseTut().then(msg => {
  console.log(msg);
}).catch(err =>{
  if(typeof err === 'object'){
    console.log(err.message);
  } 
})
// sub promise for callback - END
