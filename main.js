//  Current Date & Time Both in JavaScript

let current = new Date();
let cDate = current.getDate() + '-' + (current.getMonth() + 1) + '-' + current.getFullYear()+'\n';

let cTime = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();
let dateTime = cDate + ' ' + cTime;
console.log(dateTime);
