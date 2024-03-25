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

function findpalindrom(min, max)
{
    var min=Number(document.getElementById('invalue').value);
    var max=Number(document.getElementById('finvalue').value);
    let h1=document.getElementById('h1');
    let palindrom = [];
    
    
    
    if (min==1 || min==2 || min==3 || min==4 || min==5 || min==6 || min==7 || min==8 || min==9) {
        h1.innerHTML=`There is no palindrom number from 1 to 9 check from 10`;
    }
    else if (min<0 || max<0){
        h1.innerHTML=`Negative value can't be Palindrom number`;
    }
    else if(min=='' || max==''){
        h1.innerHTML=`Zero can not be inputed.Or, Maybe you have not entered either initial or final value.`
    }
    else {
        for (var i = min; i <= max; i++)
        {
            if(isPalindrome(i))
            { 
                palindrom.push(i);
            } 
        }
        h1.innerHTML=`Palindrom Numbers are <br> ${palindrom.toString().split(',').join(' , ')}`;
        h2.innerHTML=`Total Number Are ${palindrom.length}.`;
        }
        
   
}
