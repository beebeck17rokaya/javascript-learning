/// for loop
let i;
for(let i=1;i<=10;i++)
{
    console.log(i);
}


/// while loop
console.log("3)","while loop");
let j=0;
while(j<=5)
{
    console.log(j);
    j++;
}

/// do while loop
{
console.log("do while loop");
let i=1;
do{
    console.log(i);
    i++;
} while(i<=10);
}



////// print only even number using for loop
console.log("print even number")
{
let i=0;
for(let i=0;i<=20;i+=2){
    console.log(i);
}
}

///// print even number using while loop
{
    console.log("while loop")
    let i=3;
    while(i<=10)
        {
            if(i%2==0){
                console.log(i);
                i+=2;
            }
            else{
                console.log(i);
                i+=2;
            }
        
        }
}

/// to calculate loop of numbers from 1 to 10
{
    console.log("sum of number from 1 to 10");
let sum=0;
for(let i=1;i<=10;i++)
    {
    sum+=i;
    console.log(sum);  // print by step
}
console.log(sum);  // whole output
}

/// for loop that prints square of number from 1 to 5.

for(let i=1;i<=5;i++){
    console.log(i*i);
}

{
let fact=1;
let n=5;
while(n>1){
    fact*=n;
    n--;
    
}
console.log(fact)

}
