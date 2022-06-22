const scrollable = document.getElementById('scrollable');
const button = document.querySelector('button');

// const abort = new AbortController();
// button.addEventListener('click', onClick, {
//     capture: true,
//     once: true,
//     passive: true,
//     signal: abort.signal
// });
// abort.abort(); //removes event listener

// (event, function, useCapture)
// function onClick(e){
//     // e.preventDefault();
//     // e.stopPropagation();
//     console.log(e.target);
//     console.log(this);
// }

// EVENTS
// dblclick
// mousedown
// mouseup
// keydown
// keyup

// Scrolling
// mousemove
// mouseenter

// scrollable.addEventListener('scroll', e => {
//     console.log(e.target.scrollTop);
// })

// scrollable.addEventListener('mouseenter', e => {
//     console.log(e.pageX, e.pageY);
// })

// scrollable.addEventListener('mousemove', e => {
//     console.log(e.pageX, e.pageY);
// })

// button.addEventListener('dragstart', e =>{
//     console.log(e);
// })

// scrollable.addEventListener('drop', e =>{
//     scrollable.prepend(button)
// })

// scrollable.addEventListener('dragover',e=>{
//     // prevent default behavior because it prevents us from using drop.
//     e.preventDefault();

//     console.log('SAFE ZONE, PREP FOR LANDING');
// })

scrollable.addEventListener('click', event =>{
    // if(event.target.tagName === 'P'){
    //     event.target.textContent = 'Clicked!';
    // }
});
