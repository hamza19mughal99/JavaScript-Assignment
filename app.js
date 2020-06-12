/// Chapter 1

// Task # 1 

// var message = "Welcome to My Website!";
// alert(message); 


// Task # 2

// Method # 1

// var enterPassword = prompt("enter Password", "like : 65478");
// var password = "1234";
// if (enterPassword === password){
//     alert("password is correct");
// }
// else {
//     alert("Error! Please enter a valid Password.");
// }

// Method # 2

// var message = "Error! Please enter a valid Password.";
//  alert(message); 


// Task # 3

// var msg1 = "Welcome to JS land..";  
// var msg2 = "Happy Coding";
// alert(msg1 + "\r\n" + msg2);

// Task # 4 

// var msg1 = "Welcome to JS land..";  
// var msg2 = "Happy Coding";
// var msg3 = "prevent this page from creating additional dialogs";
// alert(msg1);
// alert(msg2 + "\r\n" + msg3);

// Task # 5

// alert("hello.. i can run my js through my browser console");

//task # 06

// <!DOCTYPE html>
// <html lang="en">
// <head>
    
//     <title>HAMZA</title>
    
//     <script src="app.js">  </script>
//     <script lang="javascript"> alert("task6") </script>
// </head>
// <body>
//     <div>
//         <h2>Hello World, this is Hamza Mughal. </h2>
//         <h2>Assignment of Javascript Chapter # 1.</h2>

//     </div>
// </body>
// </html>

// Task # 7

// <!DOCTYPE html>
// <html lang="en">
// <head>
    
//     <title>HAMZA</title>
    
//     <script src="app.js">  </script>
//     <script lang="javascript"> alert(" javascript in head ") </script>
// </head>
// <script > alert(" javascript before text msg of html") </script>
// <body>
//     <div> 
//         <h1>Hello, HAMZA</h1>
//         <script > alert(" javascript after text msg of html") </script>
//     </div>
// </body>
// <script > alert(" javascript after closing tag") </script>
// </html>


// *********************************************************************


// CHapter 2


//task # 1

// var userName; 

// task # 2

// var myName = "Hamza Ahmed Mughal";

//Task # 3

// var message = "Hello World ";
// alert(message);

// Task # 4

// var name = " Jhone Doe";
// var age = "15 years old";
// var edu = "certified mobile application development";
// alert(name);
// alert(age);
// alert(edu);

// Task # 5

// var name = "pizza" ;

// Task # 6

// var email = "hamza19mughal99@gmail.com";
// alert("my email address is " + email);


// Task # 7

//  var book = "A smarter way to learn javascript";
//  alert("I am trying to learn from a book " + book);

// Task # 8

// var text = "yeah! I can write HTML content through javascript";
// document.write(text);

// Task # 9
// var design = " ▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬  ";
// alert(design);
// document.write(design);

// ********************************************************************

// Chapter 3

// Task # 1

// var age = 21;
// alert("i am " + age + " years old");

// //Task # 2

// var visit = prompt("enter visit");
// alert("you have visited this site " + visit + " " + "times")

// Task # 3

// var birthYear =  1999;
// document.write("My birth Year is "+ birthYear + "<br>" + "DataType of my declared variable is number");

// Task # 4

// var visitorName = "John Doe";
// var productTitle = "T-shirt(s)";
// var quantity = 5;
// document.write(visitorName + "  ordered  " + quantity + " " + productTitle + "  on XYZ clothing Store ");


// *************************************************************************************************************


// Chapter 4

// Task # 1

// var a; var b; var c;  3 variable declare in one statement

// Task # 2

// 5 legal variable name 
// var firstName; var email; var age; var firstName2; var first3Name;

// 5 llegal variable name 
// var 1FirstName; var var; var @age; var +Num; var %percentage; 

// Task # 3


/* <body>
<h1> Rules for naming JS variable </h1>

<Script src="app.js"> </Script>

</body>
</html>


var num = "numbers";
var lett = "letter";
var dollor = "$";
var underCore = "_";
var sen = "sensitive";
var wor = "keywords";
document.write("Variable names can only contain" + " " + "," + num + "," + dollor + "and" + underCore + "For example $my_1stVariable" + "<br>");
document.write("Variable must begin with a " + lett + "," + dollor + "or"  + underCore + "For example $name, _name or name"+ "<br>");
document.write("variable case are " + sen + "<br>");
document.write("variable name should not be JS " + wor + "<br>"); */

// ***************************************************************************************

// Chapter 5

// Task # 1

// var var1 = +prompt("enter 1st value: ");
// var var2 = +prompt("enter 2st value: ");
// var sum = var1 + var2;
// document.write("sum of " + var1 + " and " + var2 + " is " + sum);

// Task # 2

// var var1 = +prompt("enter 1st value: ");
// var var2 = +prompt("enter 2st value: ");
// var sign = prompt("enter sign" );
// if ( sign === "+" ){
// var sum = var1 + var2;
// document.write("sum of " + var1 + " and " + var2 + " is " + sum); }
// else if ( sign === '-'){
// var sum = var1 - var2;
// document.write("sum of " + var1 + " and " + var2 + " is " + sum); }
// else if ( sign === '*'){
// var sum = var1 * var2;
// document.write("sum of " + var1 + " and " + var2 + " is " + sum); }
// else if ( sign === '/'){ 
// var sum = var1 / var2;
// document.write("sum of " + var1 + " and " + var2 + " is " + sum);}
// else {
//     document.write("wrong operator");
// }

// Task # 3

// var a;
// document.write("value after variable declaration is undefined <br>");
// a = 5;
// document.write("value after variable declaration is " + a + "<br>" );
// a = a + 1;
// document.write("value after increment " + a + "<br>");
// a = a + 7;
// document.write("value after addition " + a + "<br>");
// a = a - 1;
// document.write("value after decrement " + a + "<br>");
// a = a % 3;
// document.write("value after remainder " + a + "<br>");

// Task # 4

// var ticketPrice = 600 ;
// var buy = +prompt("enter number of tickets ");
// var cal = buy * ticketPrice;
// document.write("Total cost of " + buy + "tickets to a movie is " + cal + "PKR");

// Task # 5

// var tab = +prompt("enter number for table ");
// document.write("table of " + tab + "<br>");
// for(var i = 1; i <= 10; i++){
//     document.write(tab + " * " + i + " = " + tab*i + "<br>");
// }

// Task # 6

// var c = 25;
// var cal = (c * 9/5) + 32 ;
// document.write(c + "oC" + " is " + cal + "oF" + "<br>");
// var f = 70;
// var cal1 = (f - 32) * 5/9 ;
// document.write(f + "oC" + " is " + cal1 + "oF");


// Task # 7

// var item1 = 650;
// var item2 = 100;
// var q_item1 = 3;
// var q_item2 = 7;
// var ship_charge = 100;

// document.write("price of item no 1 is " + item1 + "<br>");
// document.write("Quantity of order 1 is  " + q_item1 + "<br>");
// document.write("price of item no 2 is " + item2 + "<br>");
// document.write("Quantity of order 2 is " + q_item2 + "<br>");
// document.write("shipping charges " + ship_charge + "<br>");
// document.write("<br>");
// total = item1*q_item1 + item2*q_item2 + ship_charge; 
// document.write("Total cost of your order is  " + total);
                                                   
// Task # 8

// var totalMark = 980;
// var markObtained = 804;
// var percentage = (markObtained*100)/totalMark;
// document.write("total marks " +totalMark + "<br>");
// document.write("total obtained " +markObtained + "<br>");
// document.write("percentage " +percentage + "<br>");

// Task # 9

{/* <h1>Currency is PKR</h1>

<script src="app.js"></script>

document.write("1 US dollar is equal to 104.80" + "<br>");
document.write("1 saudi riyal is equal to 28" + "<br>");
var usDollar = 10 * 104.80;
var sauDollar = 25 * 28;
var total = usDollar + sauDollar;
document.write("Total currency in PKR " + total ); */}


// Task # 10

// var num = 10;
// var cal = ((num + 5) * 10);
// var result = cal / 2;
// document.write("ans is " + result);


// Task # 11

// {
    /* <h1>Age Calculator</h1>

<script src="app.js"></script>

var currentYear = 2020;
var birthYear = 1999;
var cal = currentYear - birthYear;
document.write("your age is " + cal); */
// }

// Task # 12

// var radius = 21;
// var circum = 2 * 3.142 * radius;
// document.write(" The circumference of circle is : " + circum + "<br>");
// var area = 3.142 * (radius * radius);
// document.write(" The area is : " + area );


// Task # 13

// var favorSnack = "Biryani";
// var age = 21;
// var maxAge = 50;
// var amountSnack = 4;
// var cal = (maxAge - age) * amountSnack;
// document.write("you will need " + cal + " " + favorSnack + " to last you until the ripe old age is " + maxAge);


// ****************************************************************************

// Chapter 6 - 9

// Task # 1

// var a = 10;
// document.write("Result:" + "<br>");
// document.write("The value of a is " + a + "<br>");
// document.write("-----------------------------");
// document.write("<br>");
// var a = ++a;
// document.write("The value of ++a is " + a + "<br>");
// document.write("Now the value of a is " + a + "<br>");
// document.write("<br>");
// document.write("<br>");

// document.write("Now the value of a++ is " + a + "<br>");
// var a = ++a;
// document.write("Now the value of a is " + a + "<br>");
// document.write("<br>");
// document.write("<br>");
// var a = --a;
// document.write("Now the value of --a is " + a + "<br>");
// document.write("Now the value of a is " + a + "<br>");
// document.write("<br>");
// document.write("<br>");

// document.write("Now the value of a-- is " + a + "<br>");
// var a = --a;
// document.write("Now the value of a is " + a + "<br>");

// Task # 2

// var a = 2 , b = 1;
// var result = --a - --b + ++b + b-- ;
//             //   1  -  0  +  1  +  1
//             //      1     +  1  +  1
//             //            3 ans
// var c = --a;
// document.write(c + "<br>");
// var d = --a - --b;
// document.write(d + "<br>");
// var e = --a - --b + ++b;
// document.write(e + "<br>");
// document.write(result + "<br>");

// Task # 3 

// var name = prompt("enter your name ");
// alert("Welcome! " + name);

// Task # 4
    
// var numTable = +prompt("enter number for table");
//     j = 5;
// switch ( numTable )
// {
//     case numTable :
//         for (var i = 1; i <= 10; i++) 
//     {
//         document.write(numTable + " * " + i + " = " + (numTable * i) + "<br>");
        
//     }
//     break;
//     default:
//         for (var i = 1; i <= 10; i++) 
//         {
//             document.write(j + " * " + i + " = " + (j * i) + "<br>");
            
//         }
//         break;
// }

    
// Task # 5

// var subName1 = prompt("enter first subject " );
// var subName2 = prompt("enter second subject " );
// var subName3 = prompt("enter third subject " );
// var totalMark = 100;
// var marksub1 = +prompt("enter first subject mark" );
// var marksub2 = +prompt("enter second subject mark" );
// var marksub3 = +prompt("enter third subject mark" );
// var percent1 = (marksub1*100) / totalMark;
// var percent2 = (marksub2*100) / totalMark;
// var percent3 = (marksub3*100) / totalMark;
// var percent4 = percent1+percent2+percent3; 
// var total = totalMark*3;
// var totalOb = marksub1+marksub2+marksub3;
// var totalpercent = (percent4*100) / 300; 
// document.write(subName1 + " " + " " + " " + totalMark + " " + " " + " " + marksub1 + " " + " " + " " + " " + percent1 + "%" + "<br>" );
// document.write(subName2 + " " + " " + " " + totalMark + " " + " " + " " + marksub2 + " " + " " + " " + " " + percent2 + "%" + "<br>" );
// document.write(subName3 + " " + " " + " " + totalMark + " " + " " + " " + marksub3 + " " + " " + " " + " " + percent3 + "%" + "<br>" );
// document.write(total + " " + totalOb + " " + totalpercent);    


// ******************************************************************************


// Chapter 9 - 11

// Task # 1

// var cityName = prompt("enter city name ");
// var a = "karachi";
// if (cityName === a){
//     alert("Welcome! to the city of lights ");
// }
// else{
//     alert("welcome! " + " " + cityName); 
// }

// Task # 2

// var gender = prompt("enter Gender ");
// var a = "male";
// var b = "female";
// if (gender === a){
//     alert(" Good Morning Sir! ");
// }
// else if (gender === b){
//     alert("Good Morning Madam! "); 
// }
// else{
//     alert("write proper gender");
// }

// Task # 3

// var color1 = prompt("enter color 1 ");
// var color2 = prompt("enter color 2 ");
// var color3 = prompt("enter color 3 ");

// var forColor = "signal color";
// var msg = "Message";
// var msg1 = "Must Stop";
// var msg2 = "Ready to Move";
// var msg3 = "Move Now";

// document.write(forColor + " " + msg + "<br>");
// document.write(color1 + " " + msg1 + "<br>");
// document.write(color2 + " " + msg2 + "<br>");
// document.write(color3 + " " + msg3 + "<br>");

// Task # 4

// var remainFuel = prompt("enter your fuel ", "in litre" );
// if (remainFuel < 0.25){
//     alert("please refill the fuel in your car");
// }
// else
//    alert("carry on");

//  Task # 5 

// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");          // RUN SUCCESSFULLY
// }


// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");        
// }



// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");       // RUN SUCCESSFULLY
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");        // RUN SUCCESSFULLY
// }


// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;      // RUN SUCCESSFULLY
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");       
// }                                                      

// if (true){                       // RUN SUCCESSFULLY
//     alert("True");          
//     }
//     if (false){
//     alert("False");
//     }

//  if("car" < "cat"){
//     alert("car is smaller than cat");         // RUN SUCCESSFULLY
//     }


// Task # 6

// var mark1 = +prompt("enter subject 1 marks ");
// var mark2 = +prompt("enter subject 2 marks ");
// var mark3 = +prompt("enter subject 3 marks ");
// var total = +prompt("enter total marks  ");
// var totalObtained = mark1 + mark2 + mark3;
// var percentage = (totalObtained*100) / total;

// document.write("total marks obtained " + totalObtained + "<br>");
// document.write("total percentage " + percentage + "<br>");


// if (percentage >= 80){
//     document.write("Percentage%" + " " + "Grade" + " " + "Remarks" + "<br>");
//     document.write("Greater than or equal to 80" + " " + "A-One" + " " + "Excellent" + "<br>");
//     }
// if (percentage >= 70 && percentage < 80){
//     document.write("Percentage%" + " " + "Grade" + " " + "Remarks" + "<br>");
//     document.write("Greater than or equal to 70" + " " + "A" + " " + "Good" + "<br>");
//      }
//  if (percentage >= 60 && percentage < 70){
//     document.write("Percentage%" + " " + "Grade" + " " + "Remarks" + "<br>");
//     document.write("Greater than or equal to 60" + " " + "B" + " " + "You need to improve" + "<br>");
//      }
// if (percentage < 60){
//     document.write("Percentage%" + " " + "Grade" + " " + "Remarks" + "<br>");
//     document.write("less than 60" + " " + "Fail" + " " + "Sorry" + "<br>");
//       }
                         
// Task # 7
// var secretNum = 8 ;
// var guessNum = +prompt("enter number to guess");
// if (guessNum === secretNum){
//     alert("Bingo! Correct answer.");
// }
// else if (guessNum === 9 || guessNum === 7){
//     alert("Close enough to the correct answer.");
// }
// else {
//     alert("Wrong! try again");
// }


// Task # 8

// var num = +prompt("Enter number to check");
// if (num % 3 === 0){
//     alert("The Num is divisible by 3 ");
// }
// else{
//     alert("The Num is not divisible by 3 ");
// }

// Task # 9

// var numCheck = +prompt("Enter Num to check");
// if (numCheck % 2 === 0){
//     alert("The given Number is Even.");
// }
// else{
//     alert("The given Number is Odd.");
// }

// ************************************************************************

// Chapter 12 - 13

// Task # 1

// var num = prompt("Enter a number or string");
// if (num >=65 && num <=90 ){
//     alert("upper case ")
// }
// else if (num >=97 && num <=122 ){
//     alert(" lower case ")
// }
// else {
//     alert("digit");
// }



// Task # 2  

// var num1 = +prompt("enter first integer ");
// var num2 = +prompt("enter second integer ");
// if (num1 > num2){
//     alert (num1 + " is greater ");
// }
// if (num1 < num2){
//     alert (num2 + " is greater ");
// }
// if (num1 == num2){
//     alert (num1 + " and " + num2 + "are equal");
// }

// Task # 3

// var num2 = +prompt("enter a Number ");
// if (num2 > 0){
//     alert (num2 + " is positive. ");
// }
// if (num2 < 0){
//     alert (num2 + " is negative ");
// }
// if (num2 == 0){
//     alert (num2 + " is zero");
// }


// Task # 4

// var char = prompt("enter a character ");
// if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u"  ){
//     alert("true");
    
// }
// else {
//     alert("False");
// }

// Task # 5

// var correctpass = "pakistan123";
// var passinput = prompt("enter a password");
// if (passinput === ""){
//     alert("please enter your password");
// }
// else if ( passinput === correctpass ){
//     alert("Correct! The password you entered matches the original password");
// }
// else {
//     alert("incorrect password");
// }

// Task # 6

// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// alert(greeting);
// }
// else {
// greeting = "Good evening";
// alert(greeting);
// }

// ********************************************************************

// Chapter 14 -  16

// Task # 1

// var studentName = [ ];
// document.write(studentName);

// Task # 2 

// var stringarr = ["hamza","ahmed","mughal"];
// document.write(stringarr);

// Task # 3

// var stringarr = [5,8,9];
// document.write(stringarr);

// Task # 4 

// var stringarr = [true,false,true];
// document.write(stringarr);

// Task # 5

// var stringarr = ["hamza", 21 , true];
// document.write(stringarr);

// Task # 7

// var stringarr = ["","SSC","HSC","BSC","BS","B.COM","MS","PHD"];
// for(var i = 1 ; i < stringarr.length; i++){
// document.write(i + ")" + stringarr[i] + "<br>" );
// }

// Task # 8

// var stuName = ["Hamza","Ahmed","Mughal"];
// var stuscore = [344,432,276];
// var totalMark = 500;
// for(var i = 0; i < stuName.length; i++){
    
//         document.write("Score of " + stuName[i] + " is " + stuscore[i] + " percentage : " +stuscore[i]*100/totalMark + "<br>");

// }

// Task # 9

// var arr = ["This","is","my","cat"]
// for(var i = 0 ; i < arr.length; i++){
//     document.write(arr[i] + " ")
// }


// Task # 10

// var arr = ["keyboard","mouse","printer","monitor"];
// document.write(arr + " ");
// for(var i = 0 ; i < arr.length; i++){
//       document.write( "<br>" + "out :" + "<br>" + arr[i] );
// }

// Task # 11

// var arr = ["keyboard","mouse","printer","monitor"];
// document.write(arr + " ");
// for(var i = 3 ; i >= 0; i--){
//       document.write( "<br>" + "out :" + "<br>" + arr[i] );
// }



// **********************************************************************************

// Chapter  17  -  20

// Task # 1

// var multiarr = [[2,3] , [4,6] , [6,9] ];
//  document.write(multiarr[0][0]);
//  document.write(multiarr[0][1]);
//  document.write(multiarr[1][0]);
//  document.write(multiarr[1][1]);


// Task # 2

// for (var i = 1 ; i <= 10; i++){
//     document.write(i + "<br>");
// }

// Task # 3

// var tab = +prompt("Enter Number for Multiplication ");
// var len = +prompt("enter length");
// for(var i = 1; i <= len; i++){
//     document.write(tab + " " + " * " + i + " " + " = " + tab*i + "<br>" );

// }

// Task # 4

// var fruits = ["apple","banana","mango","orange","strawberry"];
// for(var i = 0; i < fruits.length; i++){
//     document.write(fruits[i] + "<br>");
//     document.write("<br>");
// }

// for(var i = 0; i < fruits.length; i++){
//     document.write("element at index " + " " + i + " is " + fruits[i] + "<br>");
// }

// Task # 5

// var series = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
// document.write("Counting" + "<br>");
// for (i = 0; i < series.length; i++) {
//     document.write(series[i] + " ");
// }
// document.write("<br>" + "Reverse" + "<br>");
// for (i = series.length; i >= 0; i--) {
//     document.write(series[i] + " ");
// }
// document.write("<br>"  + "Even" + "<br>");
// for (i = 0; i < series.length; i++) {
//     if(i % 2 !== 0 ){
//     document.write(series[i] + " ");
//     }

// }
// document.write("<br>"  + "ODD" + "<br>");
// for (i = 0; i < series.length; i++) {
//     if(i % 2 == 0 ){
//     document.write(series[i] + " ");
//     }

// }

// Task # 6

// var arr = ["cake","cookie","paties","chips"];
// var inputarr = prompt("enter for search");
// for(var i = 0; i < arr.length; i++){
//     if(inputarr === arr[i] ){
//         document.write(arr[i] + " " + "is available at " + i + " in our bakery");
//         break;
//     }
//     else{
//         document.write("we are sorry." + inputarr + " is not available in our bakery");
//         break;
//     }
// }

// Task # 7

// var arr = [24, 53, 78, 91, 12];
// if (arr[3] > arr[0]) {
//     if (arr[3] > arr[1]) {
//         if (arr[3] > arr[2]) {
//             if (arr[3] > arr[4]) {
//                 document.write(arr[3] + " is greater in all");
            
//             }
//         }
//     }
// }
// else if (arr[0] > arr[1]) {
//     if (arr[0] > arr[2]) {
//         if (arr[0] > arr[3]) {
//             if (arr[0] > arr[4]) {
//                 document.write(arr[0] + " is greater in all");
            
//             }
//         }
//     }
// }
// else if (arr[1] > arr[0]) {
//     if (arr[1] > arr[2]) {
//         if (arr[1] > arr[3]) {
//             if (arr[1] > arr[4]) {
//                 document.write(arr[1] + " is greater in all");
            
//             }
//         }
//     }
// }
// else if (arr[2] > arr[0]) {
//     if (arr[2] > arr[1]) {
//         if (arr[2] > arr[3]) {
//             if (arr[2] > arr[4]) {
//                 document.write(arr[2] + " is greater in all");
            
//             }
//         }
//     }
// }
// else if (arr[4] > arr[0]) {
//     if (arr[4] > arr[1]) {
//         if (arr[4] > arr[2]) {
//             if (arr[4] > arr[3]) {
//                 document.write(arr[4] + " is greater in all");
            
//             }
//         }
//     }
// }

// ***********************************  END ********************************************



