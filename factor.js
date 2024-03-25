'use strict'
function factor(){
        var n= Number(document.getElementById('invalue').value);
        var fact=1;
        if(n==0)
        {
            h1.innerHTML=`${1}`;
        }
        else
        {
            for (var i= 1; i<=n; i++){
                fact = fact*i;
            
        }
        h1.innerHTML=`${fact}`;
        }

        }
       

