`use strict`
function isPalindrome(n)
{
    var rev = 0;
    for (var i = n; Math.trunc(i) > 0; i /= 10)
    {
        rev = ((rev*10) + (Math.trunc(i)%10));
         
        }
   
    return (n==rev);
}   

function leaplain(min,  max)
{
    var min=document.getElementById('invalue').value;
    var max=document.getElementById('finvalue').value;
    let year = [];
 
    if(min.length < 4 || max.length < 4){
        h1.innerHTML=`years must be in 4 digits`
        return false;
    }
    else if (min>max){
        h1.innerHTML=`Input field error. Initial year can not be bigger than Final year`
    }
    else {
            for (var i = min; i <= max; i++)
        {
            if((isPalindrome(i)) && (i%4==0 && i%100!=0 || i%400==0))
            { 
                year.push(i); 
            } 
        }
        h1.innerHTML=`leap years are ${year.toString().split(',').join(' , ')}`;
        h2.innerHTML=`total years are ${year.length}.`;
        }
        
   
}
