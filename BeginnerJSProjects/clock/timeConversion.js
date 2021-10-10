function timeConversion(s) {
    // Write your code here
let hour = Math.floor(s/3600);
let minute = Math.floor((s - hour*3600)/60);
let second = Math.floor(s - (hour*3600) - (minute*60));
return `${hour}:${minute}:${second}`

}

console.log(timeConversion(3600))