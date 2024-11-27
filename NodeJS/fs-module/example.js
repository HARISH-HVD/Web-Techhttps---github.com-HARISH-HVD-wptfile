// const n1=11
// const n2=19
// const add=n1+n2
// console.log(add)

// // window,document,history,location,screen  these objects are not available in node js because these are browser object.

// const arr=["rohit", "ashwin","harish","pratham","akshay"]

// for(e of arr){
//     console.log(e)
// }

const fs=require("fs")

const data="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nisi lacus, rhoncus eu venenatis pellentesque, imperdiet eu arcu. Maecenas risus enim, sollicitudin eget tempus vitae, volutpat vel tellus. Donec interdum justo sagittis purus tincidunt, id lacinia velit interdum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean laoreet nisi vitae nulla fringilla facilisis. Nulla ornare hendrerit velit sit amet tristique. Mauris at porttitor arcu. Nam at leo ut lacus pretium facilisis."

// fs.writeFile("file.txt",data,(err)=> //callback function always runs if err then variable not null otherwise null
//     {
//   if(err)
//     {
//         console.error(err)
//         return err 
//     }  

//     console.log("file write successfully...")
// })

fs.writeFileSync("filesync.txt",data)
