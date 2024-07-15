let age=15;
if(age>=18){
    console.log("you are eligible to vote");
}
else{
    console.log("YOU are not eligible to vote");
}


// print whether the number is odd or even
let num=88;
if (num %2==0)
{
    console.log("the number is even");
}
else
{
    console.log("the number is odd");
}

//


    
// positive or negative
{

let n=2;
if (n>=0)
    {
    console.log("the number is positive");
    }
else
{
    console.log("the number is negative");
}
}
// positive negative zero
{
  let n=0;  
if (n>0)
    {
    console.log("the number is positive");
    }
else if(n>0)
{
    console.log("the number is negative");
}
else 
{ console.log ("the number is zero");

}

}

// progaram to check whether the number is divisible by 5 or not
{
    let n=26;
    if(n%5==0)
    { console.log("the number is divisible by 5") ;

    }
    else{
        console.log("the number is not divisible by 5");
    }
}

// write a program  to check the grades of student based on the marks

let marks = -1;
if(marks>=90 && marks<=100)
{
    console.log("grade A");
}
else if(marks>=80 &&  marks<=90)
{ console.log ("grade B");

}
else if(marks>=60 &&  marks<=80)
{ console.log ("grade C");

}
else if(marks<=40 && marks>=0){
    console.log("fail");
}
else{
    console.log("the result is invalid");
}
    
/// switch case
let day =2;
switch (day) {
    case 2:
        console.log("its mondAY");
        break;
        
    
        case 3:
        console.log("its tuesday");
        break;
        
    
        default:
            console.log("its other day");
        break;
        
}


//// for loops
for(let i=0;i<5;i++) {
    console.log(i);
}


/// while loops
let count =0;
while (count<5){
    console.log(count);
    count++;
}