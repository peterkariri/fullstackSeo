/* ///initially it was called ecmascript (ES6)
JAVASCRIPT IS NOT JAVA
JAVA>>AN OOP LANGUAGE 
JAVASCRIPT>>THIS IS A SCRIPTING LANGUAGE ()>>FUNCIONAL ORIENTED 

BOT OF THEM HAVE ONE THING ON COMMON {
    THEY ARE USED TO DESING MOBILE APPS {
        JAVASVRIPT >>USES REACT NATIVE 
        JAVA>>
    }
}

WHAT AE WE GOING TO COVEER {
    //VARIABLES 
    DATA TYPES 
    NAMING CONVENTIONS 
    IN-DEPTH OF DATA TYPES {STRNGS ,ARRAYS ,OBJECTS }
    FUNCTIONS
    APIS 
    ASYNCHROOUS JAVASCRIPT 


}
FOUNDATIONS TO SYSTEMS ARCHITECTURE AND MOST IMPORTANLTY THE FUNDAMANTALS {
    FORM RAW JS IS WEHRE WE DELIVE FRAMEWROKS {
        REACT 
        REACT NATIVE
        NEXT JS
        NEST JS 
        EXPRESS JS 
        VUE JS 
    }
} */

   /*  VARIBALES IN JAVASCRIPT >>A VARIABLE IS A STORAGE COMPONENT OF A DATA TYPE 

    WE DEFINE VARIBALES IN THREE WAYS {
        USING LET >>THIS IS USED FOR VARIBALE RENAMING ,ON LOCAL SCOPE 
        USING VAR >>THIS IONE IS USED TO DEFINE CHANGNG VALUES OVER THE GLOBAL SCOPE (VARIBALE RENAMING )
        USING CONST>>USED FOR CONSTANT VALUE THAT WILL NOT CHANGE OVER THE TIME 
    }
        if we want to dislay the items we use the console.log method to disaply 
     */
    let firstname="peter"

   console.log(firstname); //logging out the first instance 
    

    var secondName="myself"
    console.log(secondName);//login out the second instance
    

    const age=50
    console.log(age);
    
    //variable assignment >>to reassign a variable what we do is we call the varibal ename 
   // and give it a new value to it we dont dclare the let or var again 
   firstname="magenta"

   secondName="schooly"

   console.log(firstname);
   console.log(secondName);
   
   


//control structures {this are statemetns that are used to control the logic of code 
//breakpoints where to exit code ,continue }
//if control strucutre >>handles the truth part only {an authentication for a user which should evaluate to tru we use if }
let user="peter@eldohub.co.ke"
/* 
if(user!=="peter@eldohub.co.ke"){
    console.log("access denied");
    
} */

//if we want to add an else or a default /falsey condition we use the else part 

if(user!=="peter@eldohub.co.ke"){
        console.log("proceed to sign up page");
    
}
else{
        console.log("access granted");

}
//in advanced if ..else staemtns we use a ternary operator >>assignment one 


/* nested if ...else >>this is an improvement of the if ..else stating that you can have more than one condition or 
logic to implemt >>the grading system ,days in week or whole backed api  */

let studentScore=123;

if(studentScore >=70 && studentScore<=100 ){
     console.log("this student has first class honours ");
     
}
else if(studentScore >=60 && studentScore<=69){
     console.log("this student has second class honours Upper Division ");

}
else if(studentScore >=50 && studentScore<=59){
     console.log("this student has second class Lower Division ");

}
else if(studentScore >=40 && studentScore<=49){
     console.log("this student has a Pass");

}
else{ //anythng above 100 and also anything below 40 >>bith of them should read Failed or Invalid marks retakes 
   console.log("see Department for guidance");
   
}


//a nested if else and a swich statemtn works like one of the same because we have conditins to fullfil for both of them 


//loops >>refers to a structure that allows one to execute a block of code repeatedly 
//loops have three very important segments whic are {

/* initialization >>this is where you set the beginning of the loop 
condition>>logic that will guide the loop 
increment/decrement>>the termintaor of the loop once the logic has been attained (++(add one ), --(remove one))
}

our first loop is the for loop 
to seperate the three segments we use semicolons

 */

 for(let p=0;p<=20;p++){
    console.log(p);
    
 }

 //lets find the sum  of numbers between 1 and 10 
 let sum=0 //defines the sume and sets it to 0 for storage 

 for(let i=1;i<10;i++){
    sum=sum+i //sum+=i

 }
 console.log('the total is ',sum);
 //1+2+3+4+5+6+7+8+9==45

 //while loop >>this loop executes continuusly if a set conditionis true ,it will execute infinitely if not temirnated 

 /* initialize

 while(condition){
    //code

    increment //never omit it bcz on omission the code runs infinitely >>ram full
 } */

    let n=1;
    while(n<=5){
        console.log(n);


        n++

        
    }

    //we use this in countdowns >>happy new year 
    //in log in >>while user is logged in dont log them out 

    let countdown=10;

    while(countdown>=0){

        console.log(countdown);
        
        countdown--

        
    }
    console.log("Happy 2027");
    

    //the do...while {
/*     this does like the while loop but one key thing is that it executes once even though the condiotion is not true >>it has 
a default execution } this is promise bases 
  */
/*  do{
   // something
 }
 while(condition) */

    let i=1

    do{
        console.log(i);
        i++
    }
    while(i<=10)
 //whee do we use loops >>we use them to guide logic that is repetitive >>slideshows
//functions 