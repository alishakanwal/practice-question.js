//practice question#1://
let firstname="alisha";
let lastname="kanwal";{
console.log("firstname+lastname=",firstname+lastname);
}
//practice question#2://
let num1=56;
let num2=88;
let num3=70;{
    console.log("num1=56 num2=88 num3=70");
    console.log("num1+num2+num3=",num1+num2+num3);
    console.log("num1-num2-num3=",num1-num2-num3);
    console.log("num1*num2*num3=",num1*num2*num3);
    console.log("num1/num2/num3=",num1/num2/num3);
}
//practicequestion#3://
let temperature = Number(prompt("Enter temperature in Celsius:"));

if (temperature <= 0) {
    console.log("Freezing");
} else {
    console.log("Not freezing");
}
//practice question#4://

let age = Number(prompt("Enter your age:"));
if (age >= 0 && age <= 12) {
    console.log("Child");
}
else if (age >= 13 && age <= 19) {
    console.log("Teenager");
} 
else if (age >= 20 && age <= 59) {
    console.log("Adult");
} 
else if (age >= 60) {
    console.log("Senior Citizen");
} 
else {
    console.log("Invalid age");
}
//practice question#5://
let units = Number(prompt("Enter electricity units consumed:"));
let bill = 0;
if (units <= 100) {
    bill = units * 10;
} 
else if (units <= 200) {
    bill = (100 * 10) + ((units - 100) * 15);
} 
else {
    bill = (100 * 10) + (100 * 15) + ((units - 200) * 20);
}
console.log("Total Electricity Bill = Rs. " + bill);
//practice question#6://
let color = prompt("Enter traffic light color:");
if (color.toLowerCase() === "red") {
    console.log("Stop");
} 
else if (color.toLowerCase() === "yellow") {
    console.log("Ready");
} 
else if (color.toLowerCase() === "green") {
    console.log("Go");
} 
else {
    console.log("Invalid Color");
}
//practice question#7://
let money = Number(prompt("Enter your pocket money:"));
if (money > 500) {
    console.log("You can buy a gift");
} else {
    console.log("Save your money");
}
//practice question#8;//
let amount = Number(prompt("Enter total shopping amount:"));
if (amount >= 2000) {
    console.log("Free Delivery");
} else {
    console.log("Delivery Charges Apply");
}
