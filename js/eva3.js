var i=2;
var N=parseInt(prompt("donner un nombre N° 1:"));//déclaration de variable
var Max=N;
var Inf=N;

while(N!=0) //boucle while tant que
 {
    N=parseInt(prompt("donner un nombre N°:"+i));
    if(N==0){break;}
  if(N<=Inf) {Inf=N;} 
  if(N>=Max) {Max=N;}      //
i++;
}

alert("le maximun est :"+Max);
alert("le minumum est :"+Inf);
