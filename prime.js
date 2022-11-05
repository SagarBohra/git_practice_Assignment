let num = 13;
let factor=0;
for(let i=1;i<=num;i++){
  if(num%i==0){
   factor++;
  }
}
if(factor==2){
   console.log(num,"number is prime");
}else {
   console.log(num,"Not prime")
}
