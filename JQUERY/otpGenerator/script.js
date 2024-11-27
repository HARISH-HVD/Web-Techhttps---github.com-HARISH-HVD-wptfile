let generate = document.getElementById("generate")
let resend = document.getElementById("resend")
let sumbit = document.getElementById("submit")
let ipOtp = document.getElementById("input-otp")
let resultBlock = document.querySelector(".result")

let otp = 0;

let generateOtp = () => {
    generate.style.display = "none";
    resend.style.display = "inline";

    otp = Math.floor(1000 + Math.random() * 9000);

    console.log(otp)
    alert(`Your OTP is: ${otp}`);

}

function resendOtp() {

    otp = Math.floor(1000 + Math.random() * 9000);
    alert(`Your OTP is: ${otp}`);
}
function submitOtp() {
    let abc = ipOtp.value;
    if(otp == abc){
        console.log("verification successful!!");
        resultBlock.innerHTML = "Verification Successful";

    } else {
        console.log("verification failed!!");
        resultBlock.innerHTML = "Verification Failed";
        resultBlock.style.backgroundColor = "Red";
    }
}