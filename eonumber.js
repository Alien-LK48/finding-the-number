'use scrict'
function findeo(){

var r= document.getElementById(`firstvalue`).value;
var n= document.getElementById(`lastvalue`).value;
let even =[];
let odd=[];
let o=1;
let e=1;
            for(let a= Number(r) ; a<=Number(n) ; a++){
                if( a%2 != 0) {
                odd.push(a);
                h1.innerHTML=`odd numbers are <br> ${odd.toString().split(',').join(' , ')}`;
                h3.innerHTML=`Total number ${o}`
                o++;
            }
            else if(a==''){
                h1.innerHTML=`Zero can not be inputed.Or, Maybe you have not entered either initial or final value.`
            }
                else{
                even.push(a);
                h2.innerHTML=`even numbers are<br> ${even.toString().split(',').join(' , ')}`;
                h4.innerHTML=`Total number ${e}`
                e++;
            } 
        }

}

