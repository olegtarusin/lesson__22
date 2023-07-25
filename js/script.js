'use strict'
console.log('учим js');
console.log('учим');
console.log('js');
let eyeColor = 'blue';
console.log(eyeColor);
let user;
let userName;
userName = 'vasya';
user = userName;
console.log(user);
const BLOCK_SIZE = 35 + 16;
console.log(BLOCK_SIZE);
const BLOCK_HIGHT = 100;
console.log(BLOCK_HIGHT);
if (true) {
    var size = 15;
}
console.log(size);
console.log(typeof size);

let userSize = 183;
console.log(userSize, "this is", typeof (userSize));
console.log(userSize + " this is " + Boolean(userSize));
const userInfo = `${userName} size is ${userSize} and this is ${Boolean(userName)}`;
console.log(userInfo);
let num1 = String(size) + String(userSize);
let num2 = String(userSize) / String(size);
console.log(num1, typeof (num1), num2, typeof (num2));
userSize = userSize / 0;
console.log(userSize);
