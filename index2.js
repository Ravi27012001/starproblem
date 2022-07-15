let sym = "";
let n = 5;
for( let a=1;a<=n-2;a++){
 for(let b=1;b<a;b++){
   sym +=" ";
 }
 for(let c=1;c<4*n;c++){
   if(c<=n || c>=4*n-a){
     sym +="*";
   }
   else{
     sym +=" ";
   }
 }
 sym +="\n"
}
//  ---------
for(let c=0;c<=1;c++){
 for(let b=1;b<=(n-2)+c;b++){
   sym +=" ";
 }
 for(let d=1;d<4*n;d++){
   sym +="*";
 }
 sym +="\n"
}
//  --------------

for(let b=1;b<=(n-2);b++){
 sym +=" ";
}
for(let d=1;d<4*n;d++){
 sym +="*";

}
sym +="\n"
// ---------------
for( let a=1;a<=n-2;a++){
 for(let b=1;b<n-1-a;b++){
   sym +=" ";
 }
 for(let c=1;c<4*n;c++){
   if(c<=n || c>=4*n+a-(n-1)){
     sym +="*";
   }
   else{
     sym +=" ";
   }
 }
 sym +="\n"
}
console.log(sym);