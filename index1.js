let pat = "";
let n=5;
for(i=1;i<n;i++){
  for(j=1;j<i;j++){
    pat +=" ";
  }
  for(k=1;k<2*n;k++){
    if(k===1 || k === 2*n-(2*i-1)){
      pat +="*";
    
    }
    else{
      pat +=" ";
    }
  }
  pat +="\n"
}
   for(let l=0;l<n;l++){
    for(let m=1;m<n;m++){
      pat+=" "
    }
    pat +="*"
    pat +="\n"
  }
  


console.log(pat);
 
