"use strict"
let $=document;
setInterval(()=>{
    let divClocl=$.querySelector('.desain-div');
    let hours=$.querySelector('.clock0');
    let minute=$.querySelector('.clock1');
    let secondes=$.querySelector('.clock2');
    let dayAm=$.querySelector('.dayAm');
    let date=new Date();
    let H =date.getHours();
    let M =date.getMinutes();
    let S =date.getSeconds();
    H = (H<10) ? '0'+ H :H;
    M = (M<10) ? '0'+ M :M;
    S = (S<10) ? '0'+ S :S;
   let Am = H >= 12 ?'PM':'AM';
    hours.innerHTML=H+':';
    minute.innerHTML=M+':';
    secondes.innerHTML=S;
    dayAm.style.paddingLeft='0.5rem';
    dayAm.style.fontSize='1.7rem';
    dayAm.innerHTML='-_-'+Am;    
})
//randomrang
setInterval(randomm,1000)
function randomm(){
let colors=['gray','green','blue'];
let indexcolors;
indexcolors=Math.floor(Math.random()*colors.length);
$.body.style.background=colors[indexcolors];
}


