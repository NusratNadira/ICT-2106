// console.log("Hello!!!!");
// document.write("Hello!");
// alert("Hi!First js");
// let age2=1235.1;
// //var age=223;
// let name="Nadira";
// var age1=500;
// var age1=5;
// //document.write("<br>"+age1+"<br>");
// //document.write("<span style='color:skyblue ; text-decoration:underline ; font-size:100px'>"+ age2+"</span>");
// console.log(window);
// console.log(typeof(age1));
// //console.log(typeof(age2));
// console.log(typeof(name));
// age1=age1.toString();
// console.log(typeof(age1));
// let age="1000000";
// age=parseInt(age);
// console.log(typeof(age));
// age2=parseFloat(age2);
// console.log(typeof(age2));
//if....else..............
// const hour=new Date().getHours();
// let greeting;
// if(hour>18){
//     greeting="Gn";
// }
// else{
//     greeting="Gm";
// }
// document.getElementById("demo").innerHTML=greeting;
// //switch..........
// let day;
// switch(new Date().getDay()){
//     case 0:
//     day = "Sunday";
//     break;
//   case 1:
//     day = "Monday";
//     break;
//   case 2:
//     day = "Tuesday";
//     break;
//   case 3:
//     day = "Wednesday";
//     break;
//   case 4:
//     day = "Thursday";
//     break;
//   case 5:
//     day = "Friday";
//     break;
//   case  6:
//     day = "Saturday";
                                
// }
// document.getElementById("demo").innerHTML="Today is:"+day;

// //dfghjkl;.,mnbvcxcvbgoiuy
// let x = 1;

// switch (x) {
//   case 0:
//     text = "Off";
//     break;
//   case 1:
//     text = "On";
//     break;
//   default:
//     text = "No value found";
// }
//document.getElementById("demo").innerHTML = text;

// let text="";
// //const number=[fn:"Nadira","Now","Ju","Ru"];
// //number[3]="Junaira";
// //const person={fn:"Nadira",ln:"Sultana",Mn:"Jahan"};
// for(i=0;i<person.length;i++){
//    // text+=i;
//   // document.write("THe Number is:"+(person[i])+"<br/>")

// }

// //objects....
// const person = {firstName:"John", lastName:"Doe", age:46};
// //document.getElementById("demo").innerHTML = person.firstName;
// //document.write(person.firstName);

// var firstnum=promt("Enter first Number");
// var lastnum=promt("Enter last Number");
//firstnum=parseInt(firstnum,10);
//lastnum=parseInt(lastnum,10);
//document.write((Number(promt("Enter first Number")))+(Number(promt("Enter first Number"))));
// var num1=100;
// var num2=200;
// document.write(num1+num2+"<br>");
// var firstNum = prompt("Enter first Number");
// var secondNum = prompt("Enter second Number");
//  document.write(Number(firstNum) + Number(secondNum)+"<br>");


// var studentFirstName = prompt("Enter your first Name");
// var studentLastName = prompt("Enter your last Name");
// document.write(studentFirstName + studentLastName+"<br/>");

// document.writeln(
//   "String Concatenation:   " +
//     studentFirstName.concat(" " + studentLastName) +
//     "<br/>"
// );

// document.write(studentFirstName.toUpperCase());


// function  Nadira(){
//   var name="Nadira Sultana";
//   var name1=prompt("Enter your name");
//   //document.write("My Name is:"+name+"<br>"+name1+"<br>");
// }
// Nadira();

// function number(num){
//  // document.write(num*num);
// }
// number(12);

// (function show(num1, num2){
//   //document.write("<br/>IIFEs Immediately Invokeable Function Expressions" + (num1 + num2));
// })(12, 45);
// show(1,2);

// var names=["na","ra","sa"];
// for(var i=0;i<names.length-1;i++){
//   //document.write("<span></span>"names[i]+",\t");
//   document.write("<span style='color:skyblue '>"+ names[i]+",\t"+"</span>");
// }
// document.write( names[names.length-1]);


// var names=new Array(5);
// for(var i=0;i<names.length;i++){
//   names[i]=prompt("Enter names"+i);
// }
// for(var i=0;i<names.length;i++){
//   document.write(names[i]+"<br>");
// }

Task:1


//var num1= prompt("Enter First Number: ");  //prompt diye user input neoa hoy jeta seta string e thake
// var num2= prompt("Enter Second Number: ");

// num1 = parseInt(num1 , 10);  // 10 cz eta decimal number er base
// num2 = parseInt(num2 , 10);

// var sum , sub;
// sum= num1+num2;
// document.write( num1 + "+" + num2 + " = " + sum + "<br><br>")

// sub= num1 - num2;
// document.write( num1 + "-" + num2 + " = " + sub + "<br><br>")



// var base= prompt("Enter Base  ");
// var height= prompt("Enter Height  ");

// var area= base * height;
// document.write("Area = "+ area+ "<br>");

// var farn= parseFloat(prompt("Enter Fahrenheit Temperature"));
// var cels=(farn-32)*(5/9);
// document.write("Celsius = "+ cels);

// var cels= parseFloat(prompt("Enter Celsius Temperature"));
//  var farn=(cels*(9/5))+32;
//  document.write("Fahrenheit = "+ farn);

// var namesType2 = new Array();
// var namesType3 = new Array();
// var namesType4 = new Array();
// var sortedNames = new Array();

// namesType2[0] = "Karim";
// namesType2[1] = "Rahim";
// namesType3[0] = "Jannatul";
// namesType3[1] = "Ferdous";
// document.write(namesType2.concat(namesType3) +"<br>");
// document.write(namesType2 + "<br>");


//pop (removes from last)
//  var names=["Nadira","nadu"];
// names.pop();
// console.log(names);

// //push adds element in the last
// names.push("jahan")
// console.log(names);

// //shift is opposite of pop (removes from first)
// names.shift();
// console.log(names);

// // //unshift : adds element in the first
// names.unshift("You");
// console.log(names);

// var student={
//   name:"Nadira Sultana",
//   roll:2017,
//   courses:["DS","DLD","IWT","DC","NA"]
// }
// document.write(student.roll+"<br>"+student.name);
// console.log(student.name+student.roll);

// class name{
//   constructor(A,B){
//     this.a=A;
//     this.b=B;
//   }
//   print(){
//     document.write(this.a+"<br>"+this.b);
//   }
// }
// let nm=new name("Nadira","Sultana");
// nm.print();

// function student(name,age,roll,courses){
//   this.name=name;
//   this.age=age;
//   this.roll=roll;
//   this.courses=courses;
//   this.display=function(){
//     console.log(this.name);
//     console.log(this.age);
//     console.log(this.roll);
//     console.log(this.courses);
//   }
// }
// var student1=new student("Nadira",22,2017,["Dc","DS","IWT","NA"])
// student1.display();
// console.log(student1.age);




//Task:1---------------------------------------------------------

// let num1=parseInt(prompt("Enter first number"));
// let num2=parseInt(prompt("Enter second number"));

// let add=num1 + num2;
// let sub=num1 - num2;
// let mul=num1 * num2;
// let div=num1 / num2;
// let mod=num1 % num2;
 
// //document.write(add);
// //console.log(add);

// console.log(num1 + " + " + num2 + " = " + add);
// console.log(num1 + " - " + num2 + " = " + sub);
// console.log(num1 + " * " + num2 + " = " + mul);
// console.log(num1 + " / " + num2 + " = " + div);
// console.log(num1 + " % " + num2 + " = " + mod);



// //Task -2--------------------------


//circle

// let radius=parseFloat(prompt("Enter a number"));
// let res=Math.PI*radius*radius;

// console.log(res);


// // Function to calculate area of a circle
// function calculateCircleArea(radius) {
//   return Math.PI * radius * radius;
// }
// const radius = parseFloat(prompt("Enter the radius of the circle:"));
//   const area1 = calculateCircleArea(radius);
//   console.log("The area of the circle is: "+area1);

// // Function to calculate area of a square
// function calculateSquareArea(side) {
//   return side * side;
// }
// const side = parseFloat(prompt("Enter the side length of the square:"));
//   const area2 = calculateSquareArea(side);
//   console.log("The area of the circle is: "+area2);

// // Function to calculate area of a rectangle
// function calculateRectangleArea(length, width) {
//   return length * width;
// }
// const length = parseFloat(prompt("Enter the length of the rectangle:"));
//   const width = parseFloat(prompt("Enter the width of the rectangle:"));
//   const area3 = calculateRectangleArea(length, width);
// console.log("The area of the circle is: "+area3);

// // Function to calculate area of a pentagon
// function calculatePentagonArea(side, apothem) {
//   return (5 * side * apothem) / 2;
// }
// const side1 = parseFloat(prompt("Enter the side length of the pentagon:"));
//   const apothem = parseFloat(prompt("Enter the apothem of the pentagon:"));
//   const area4 = calculatePentagonArea(side, apothem);
// console.log("The area of the circle is: "+area4);

// // Function to calculate area of a triangle
// function calculateTriangleArea(base, height) {
//   return (base * height) / 2;
// }
// const base = parseFloat(prompt("Enter the base length of the triangle:"));
//   const height = parseFloat(prompt("Enter the height of the triangle:"));
//   const area5 = calculateTriangleArea(base, height);
// console.log("The area of the circle is: "+area5);

// // Function to calculate area of a hexagon
// function calculateHexagonArea(side) {
//   return (3 * Math.sqrt(3) * side * side) / 2;
// }
// const side2 = parseFloat(prompt("Enter the side length of the hexagon:"));
//   const area6 = calculateHexagonArea(side);
// console.log("The area of the circle is: "+area6);



//Task-3--------------------------------


// Function to convert Fahrenheit to Celsius
// function fahrenheitToCelsius(fahrenheit) {
//   return (fahrenheit - 32) * 5 / 9;
// }

// // Function to convert Celsius to Fahrenheit
// function celsiusToFahrenheit(celsius) {
//   return (celsius * 9 / 5) + 32;
// }

// // Get user inputs
// const choice = prompt("Choose an option:\n1. Fahrenheit to Celsius\n2. Celsius to Fahrenheit");

// if (choice === "1") {
//   const fahrenheit = parseFloat(prompt("Enter temperature in Fahrenheit:"));
//   const celsius = fahrenheitToCelsius(fahrenheit);
//   console.log("Celsius:"+celsius);
// } else if (choice === "2") {
//   const celsius = parseFloat(prompt("Enter temperature in Celsius:"));
//   const fahrenheit = celsiusToFahrenheit(celsius);
//   console.log("Fahrenheit:"+fahrenheit);
// } 


//Task-4---------------

//let mark=parseInt(prompt("Enter the mark"));

// if(mark>=80){
//   document.write("The grade is : A+");
// }
// else if(mark>=70 && mark<=79){
//   document.write("The grade is : A-");
// }
// else if(mark>=60 && mark<=69){
//   document.write("The grade is : A");
// }
// else if(mark>=50 && mark<=59){
//   document.write("The grade is : B");
// }
// else if(mark>=40 && mark<=49){
//   document.write("The grade is : C");
// }
// else {
//   document.write("The grade is : F");
// }

////Switch case-------


// switch(mark){
//   case(mark>80):{
//     document.write("The grade is: A+");
//     break;
//   }
//   case(mark>70):{
//     document.write("The grade is: A-");
//     break;
//   }
//   case(mark>60):{
//     document.write("The grade is: A");
//     break;
//   }
//   case(mark>50):{
//     document.write("The grade is: B");
//     break;
//   }
//   case(mark>40):{
//     document.write("The grade is: C");
//     break;
//   }
//   default:{
//     document.write("The grade is: F");
//   }

// }

//Task-5---------
// for(let i=1;i<=8;i++){
//   document.write("Multiplication table for:"+i+"<br>");

//   for(let j=1;j<=10;j++){
//     let ans=i*j;
//     document.write(i+"*"+j+"="+ans+"<br>");
//   }
// }


//Task-6---------


//  (function add(num1,num2,num3){
//     document.write(num1+num2+num3);
//  })(parseInt(prompt("Enter first number")),parseInt(prompt("Enter second number")),parseInt(prompt("Enter third number")));


//Task-7----------


// let array=new Array(5);
// for(let i=0;i<array.length;i++){
//    array[i]= prompt("Enter "+i+"th number");
// }
// let highest=array[0];
// for(let i=1;i<array.length;i++){
//     if(array[i]>highest){
//         highest=array[i];
//     }
// }
// document.write(highest);


//Task-8---------
// class Customer{
//     cust(customerId,customerName,profession,items){
//         this.customerId=customerId;
//         this.customerName=customerName;
//         this.profession=profession;
//         this.items=items;
//     }
//     display(){
//         document.write("Customer Id : "+customerId+"<br>"+"Customer Name : "+customerName+"<br>"
//         +"Profession : "+profession+"<br>"+"Items : "+items+"<br>")
//     }
// }
// let customerId=prompt("Enter the customer id");
// let customerName=prompt("Enter the customer name");
// let profession=prompt("Enter the profession");
// let items=new Array(2);
// for(let i=0;i<items.length;i++){
//     items[i]=prompt("Enter "+i+" th element");
// }
// let customer=new Customer(customerId,customerName,profession,items);
// customer.display();

// console.log(document.getElementById("header1"));

// //document.getElementById("header1").innerHTML = "Without Variable";
// var htmltag = document.getElementById("header1");
// console.log(htmltag);
// var header = document.getElementById("header1").innerHTML;
// console.log(header);
// htmltag.innerHTML = "Test";
// document.write(htmltag.innerHTML);


 //getElementsByTagName
// var y=document.getElementsByTagName("h3"); // practice it in console; it returns HTML Collection
// var t = document.getElementsByTagName("h3").innerHTML = "Good students"; // will not show any change 
// document.getElementsByTagName("h3")[0].innerHTML = "Good girls";
// document.getElementsByTagName("h3")[1].innerHTML = "Good boys";
// for(let i=0; i<2;i++){
//     y[i].innerHTML="Value="+i;
//     //document.write()
// }


//getElementsByClassName

//document.getElementsByClassName("h2");
//document.getElementsByClassName("h2"); // practice it in console; it returns HTML Collection
//document.getElementsByClassName("h2").innerHTML = "H2 - Good students"; // will not show any change 
// document.getElementsByClassName("classheader1")[0].innerHTML = "H2 - Good girls";
// document.getElementsByClassName("classheader1")[1].innerHTML = "H2 - Good boys";

//Query Selector

document.querySelector("#header1").innerHTML="Query Selector with id";
document.querySelector(".classheader1").innerHTML="Query Selector with class";
document.querySelectorAll(".classheader1")[1].innerHTML="Query SelectorAll with class";
document.querySelectorAll("#header1")[1].innerHTML="Query SelectorAll with id";


//document.querySelector("h2").innerHTML="h2";
document.querySelector("a").innerHTML="First Ancor tag";
document.querySelector("li a").innerHTML=" Ancor tag inside the list item ";
document.querySelectorAll("li ")[1].innerHTML="Bangladesh is beautiful  ";
document.querySelectorAll("li ")[1].innerHTML="Bangladesh is beautiful  ";
document.querySelector("span").innerHTML="Replacement of getElementsByTagName  ";
document.querySelector("span").innerHTML="Replacement of getElementsByTagName  ";


function messagebutton1(){
        alert("Clicked Button 1");
    }
    
    function messagebutton2(){
        alert("Clicked Button 2");
    }
    
    function clickParagraph(){
        alert("clicked the Paragraph()");
    }
    
    //using query selector for onclick
    // function messagebutton1(){
    //     var paraVar = document.querySelector("#paraId");
    //     paraVar.innerHTML = "<span style = 'color:yellow'> You have clicked the Button 1</span>";
    // }
    
    // function messagebutton2(){
    //     var paraVar = document.querySelector("#paraId");
    //     paraVar.innerHTML = "You have the clicked the Button 2";
    // }


    // function addStyle(){
    //     var paraVar1=document.querySelector("#paraId");
    //     paraVar1.style.color="red";
    //     paraVar1.style.fontWeight="bold";
    //     paraVar1.style.fontSize="100 rem";
    //     paraVar1.style.fontStyle="italic";
    // }

    // function removeStyle(){
    //     var paraVar1 = document.querySelector("#paraId");
    //     paraVar1.style=" ";
    // }

//     function addStyle(){
//         var paraVar1=document.querySelector("#paraId");
//         paraVar1.classList=" ";
//         paraVar1.classList.add("para-style");
//     }

//     function removeStyle(){
//         var paraVar1=document.querySelector("#paraId");
//        paraVar1.classList.remove("para-style");
//     }

// var a="test";
//     function nextpage(){
// location.href=a+".html";
//     }


var para1=document.querySelector("#imageid");
function firstone(){
    para1.src="/HTMLClass/images/caktus.jpeg";
}
function secondone(){
    para1.src="/HTMLClass/images/kathgolap.png";
}


// !!-- RESPONSIVE NAVBAR USING HTML CSS JAVASCRIPT -->

/*=============== SHOW MENU ===============*/
// const showMenu = (toggleId, navId) =>{
//     const toggle = document.getElementById(toggleId),
//           nav = document.getElementById(navId)
 
//     toggle.addEventListener('click', () =>{
//         // Add show-menu class to nav menu
//         nav.classList.toggle('show-menu')
 
//         // Add show-icon to show and hide the menu icon
//         toggle.classList.toggle('show-icon')
//     })
//  }
 
//  showMenu('nav-toggle','nav-menu'