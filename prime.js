'use scrict'
function findprime(){
    var r= Number(document.getElementById(`invalue`).value) ;
    var n= Number(document.getElementById(`finvalue`).value) ;
    let x=0;
    let ans=[];
    if (r==Number('') || n==Number('')){
        h1.innerHTML=`Zero can not be inputed.Or, Maybe you have not entered either initial or final value.`
        return false;
    }
    
    else if (r>n){
        h1.innerHTML=`Initial Value Can't Be Bigger Than Final Value`;
        return false;
    }
    else if (r<0){
        h1.innerHTML=`Negative Number Can't Be A Prime Number`;
        return false;
    }
    else {   
        primenumber: for ( let user = Number(r); user <= Number(n); user++ ){
            for ( let subuser = 2; subuser < user; subuser++){
                    if( (user % subuser == 0) ){  
                    continue primenumber;
            }
        }
        x++;
        ans.push(user);
        h1.innerHTML=`Prime Numbers from ${r} to ${n}  Are : <br> ${ans.toString().split(',').join(' , ')}`;
        h2.innerHTML=` <br> Total Prime number is : ${x}`;
    }
    }    
}