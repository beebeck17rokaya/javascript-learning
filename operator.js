// object
const person= {
    name :"bibek",
    age: 22,
    isMaried : false

}
console.log(person);
console.log(person.age);
console.log(person["name"]); 


// array
const students = [
    {
        name : 'kharal',
        age: 25,
        isMarried: false,
    },
    {
    name: "pratik",
    age: 22,
    },
    {
        name:"bibek",
        age:134,
    }


]
console.log(students[1].name);
console.log(students[0].isMarried);
console.log(students[2].age);
console.log(students[1]["name"]);


const stud ={
    names :["ram","hari"],
    marks: [20,30]
}
console.log(stud.marks[1]);
console.log(stud.names,stud.marks);
console.log("marks of",stud.names[0],"=",stud.marks[0]);
console.log(`marks of ${stud.names[0]} is ${stud.marks[0]}`);
console.log(`marks of ${stud.names[1]} is ${stud.marks[1]}`);

/////////////////////////////
// NAN
let x=10;
let y="text";
let z=x*y;
console.log(z);
let w=x+y;
console.log(w);
console.log(typeof x);
let a=10.0;
console.log(typeof a);


// type casting in js
// how to covert
let g="20";
let h=10;
console.log(g+h);







// number to string using tostring() method
 let num=10;
 let num_string= num.toString();
 console.log(num_string);

 ///////arithmetic operator
{
    let x="10";
    let y=10;
    y+=10;
    
    console.log(x!=y);
    

}
//// comparision operator
{


}
/// taking input from user
{


let num = prompt("enter a number");
if ( num %5 ===0){
    console.log(num,"is multiple of 5");
}
else{
    console.log(num,"is not multiple of 5");
}
}





