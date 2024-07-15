// complex condition evaluation
let a=6, b=14;
if(a+b>20){
    if(a>b) {
        console.log("condition 1");
    }
    else{
        console.log("condition 2");

    }
}
else {
    if (a<b) {
        console.log("condition 3");

    }
    else {
        console.log("condition 4");
    }
}



///handling different data types

let value = 5;
if (value=== "ram"){
    console.log("strictly equal");
}
else if(value == "5"){
    console.log("loosely equal");

}
else{
    console.log("noT equal");
}


/// logical operator
let x=0;
let y=0;
if  (x|| y) {
    console.log("output 1");

}
else if (!x && !y){
   console.log("output 2");

}else{
    console.log("output 3");
}



//// multiple nested condition
let p = 20, q = 30, r = 25;
if (p < q && q > r) {
    if (p + r > q) {
        console.log("Output A");
    } else {
        console.log("Output B");
    }
} else {
    if (p > r || q < r) {
        console.log("Output C");
    } else {
        console.log("Output D");
    }
}


//// chained ternary operator 
let age =2;
let category = (age >=18) ? "adult":
               (age >=13) ? "teenager":
               (age >=3) ?"child": "toddler";
console.log(`category: ${category}`);


{
///
let age= 17;
let vote = (age >=18)? "yes": "no";
console.log(`vote: ${vote}`);
}


/////  Basic switch case
let color ="green";
switch (color)
{
    case "red":
        console.log("stop");
        break;
        case "green":
         console.log("go");
         break;
         case "yellow":
            console.log("slow down");
            break;
            default:
                console.log("unknown signal");
}

/// switch case with fall though
let level = 1;
switch (level) {
    case 1:
        console.log("Beginner");
    case 2:
        console.log("Intermediate");
    case 3:
        console.log("Advanced");
        break;
    default:
        console.log("Invalid level");
}



//// switch case with numbers
let dayNumber = 4;
switch (dayNumber) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    default:
        console.log("Unknown Day");
}


/// switch case without breaks
let rating = 'C';
switch (rating) {
    case 'A':
        console.log("Excellent");
    case 'B':
        console.log("Good");
    case 'C':
        console.log("Average");
    case 'D':
        console.log("Poor");
        break;
    default:
        console.log("Fail");
}



//// switch case with expressions
let number = 8;
switch(true) {
    case (number < 5):
        console.log("small");
        break;
        case (number >= 5 && number <= 10):
            console.log("medium");
            break;
            default:
              console.log("invalid number");
}



//// question 1) to check if a number is positive or not.

let num =0;
if (num>0)
{
    console.log("positive");

}else if(num<0){
    console.log("n1gative");
}
else{
    console.log("zer0");
}


{
/// program to check if a user is eligible to vote or not( 18 years or older)
let age =0;
if (age>=18){
    console.log("eligible to vote");

}
else if (age<18 && age>=1)
{
    console.log("not eligible to vote ");

}

else{
    console.log("not exist");
}
}

// switch case to determine the day of week based on given number(1-7)
//assume 1 is sunday and 7 is saturday
{
    let day=7;
switch (day){
 case 1:     console.log("sunday");
            break;
            case2:
            console.log("MONDAY");
            break;
            case 3:
                console.log("tuesday");
                case 4:
                    console.log("wednesday");
                    break;
                    case 5:
                        console.log("thursday");
                        break;
                        case 6:
                            console.log("friday");
                        break;
                        case 7:
                            console.log("saturday");
                            break;
                            default:
                                console.log("day not exist");
                        } 
}



///// given string is longer than 10 characters or not?

let char="oicffioijv"
if (char.length >10)
{
    console.log("the string is longer than 10 charcters");
}
else if (char.length ==10){
    console.log("string characters equal to 10");

}
else if (char.length<10 && char.length>0) {
    console.log("string characters lesser than 10");
}
else {
    console.log ("not exist");
}



/////
/// javscript program to determine the grade if student based on their exam
//score using switch case:

let marks=50;

switch (true)
{
    case (marks >=80 && marks <=100):
        console.log("distinction");
       // grade="distinction";
        break;
        case( marks>=50 && marks <80):
       console.log("2nd division");
       //grade="2nd distinction";
        break;
        case(marks <50 && marks >=0):
        console.log("fail");
       // grade="fail";
        break;
        default:
           console.log("invalid marks");
           //grade="invalid "

}

///// write a code that takes a month number (1-12 ) as input and return the number of days in that month using switch case.
function getDaysInMonth(monthNumber) {
    switch (monthNumber) {
      case 2:
        return 28;
      case 4:
      case 6:
      case 9:
      case 11:
        return 30;
      default:
        return 31;
    }
  }
  
  console.log(getDaysInMonth(7)); 




  /////  to check if a given year is leap year or not
  let year=2020;
  if ((year%4===0 && year %100!=0)|| year %400 ===0)
  {
    console.log(`${year } is leap year`);
  }else{
    console.log(`${year} is not leap year`);
  }
  