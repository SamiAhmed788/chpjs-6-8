// Question No 1
var a=10;
document.write("The value of a is: " +a+"<br><br>......................................");
++a;
document.write("<br><br>The value of ++a is: "+a);
document.write("<br>Now the value of a is: "+a);
var a=a++;
document.write("<br><br>The value of a++ is: "+a);
 a++;
document.write("<br>Now the value of a is: "+a);
--a;
document.write("<br><br>The value of --a is: "+a);
document.write("<br>Now the value a is: "+a);
var a=a--;
document.write("<br><br>The value of a-- is: "+a);
a--;
document.write("<br>Now the value of a is: "+a);
document.write("<br> <br>====================>");
//Question No 2
var a=2,b=1;
--a;
a=--a - --b;
document.write("<br>a is "+a);
a=--a - --b + ++b;
document.write("<br>b is "+a);
var result=--a - --b + ++b + b--;
document.write("<br>result is "+result);
// Question No 4
var userName = prompt("What is your  sweet name?");
alert("Welcome to our website "+ userName)
//Question No 5


var number= prompt("Of which number mulplication do you want ?");
document.write("<hr>"+number+"x 1 = "+ (number*1) +"<br>");


document.write(number+"x 2 = "+ (number*2) +"<br>");
document.write(number+"x 3 = "+ (number*3) +"<br>");
document.write(number+"x 4 = "+ (number*4) +"<br>");
document.write(number+"x 5 = "+ (number*5) +"<br>");
document.write(number+"x 6 = "+ (number*6) +"<br>");
document.write(number+"x 7 = "+ (number*7) +"<br>");
document.write(number+"x 8 = "+ (number*8) +"<br>");
document.write(number+"x 9 = "+ (number*9) +"<br>");
document.write(number+"x 10 = "+ (number*10) +"<br>");
document.write(number+"x11= "+(number*11) +"<br>");
document.write(number+"x12= "+(number*12));
//Question No 6
var subjects= prompt("Write your subjects name");
console.log(subjects)
totalMarks=100;
var subject1="English",subject2="Math",subject3="Urdu";
var obtainedMarks1=prompt("How much did you score in your 1 subject?");
var obtainedMarks2=prompt("How much did you score in your 2 subject?");
var obtainedMarks3=prompt("How much did you score in your 3 subject?");
console.log(obtainedMarks1);
console.log(obtainedMarks2);
console.log(obtainedMarks3);
    obtainedMarks1=54;
    obtainedMarks2=54;
    obtainedMarks3=48;
let total=obtainedMarks1/totalMarks*totalMarks;
document.write("<hr>"+total+"%");
var grand_total=((totalMarks*3)+obta
)

