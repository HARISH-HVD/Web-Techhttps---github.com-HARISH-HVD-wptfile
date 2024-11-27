// const displayDiv=document.getElementById("Display");
// let intervalId=null;
// let s=0;
// let min=0;
// let hr=0;
// let ms=0;
// function startClock(){
//     intervalId=setInterval(function(){
//         if(s===60){
//             min++;
//             s=0;
//         }
//         if(min===60){
//             hr++;
//             min=0;
//         }
//         s++;

//         displayDiv.innerHTML=${hr} hr : ${min} min : ${s} sec
       
//     },1000)
//     }
//     function stopClock(){
//         clearInterval(intervalId)
//     }

//     function resetClock(){
//         clearInterval(intervalId)
//         displayDiv.innerHTML="00 : 00 : 00 ";

//     }