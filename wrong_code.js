//prime problem

let num = 13;
let count = 0;
for(x = 1; x <= num; x++){
   if(num % x == 0){
     count++;
   }
  }

 if(count == 2){
   console.log(num,"is a prime number");
   }else{
   console.log(num,"is not a prime number");
}

//palindrome problem

let str = "nrupul"
let N =6 ;
let jhola = "";
for(let i = N-1; i >= 0; i--){
   jhola += i;
  }
  
if(str == jhola){
 console.log(str,'it is pallindrome')
}else{
  console.log(str,"is not a palindrome");
}
