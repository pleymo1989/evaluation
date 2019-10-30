var N;
var ctj=0;
 var ctm=0;
 var ctv=0;
do{N=parseInt(prompt("saisir votre age"));
if(N<20){ctj++;}
if(20<=N<=40){ctm++;}
if(N>40){ctv++;}
}
while (N!=100);
console.log("le nombre des jeunes est :"+ctj);
console.log("le nombre des moyens est :"+ctm);
console.log("le nombre des vieux est :"+ctv);