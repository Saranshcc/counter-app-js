const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const num = document.querySelector(".num");

let a=1;


plus.addEventListener("click",()=>{
    a++;
    num.innerText=a;
    console.log(a);
  });

  minus.addEventListener("click",()=>{
    a--;
    num.innerText=a;
    console.log(a);
  });
    
