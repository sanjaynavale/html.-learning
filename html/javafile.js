
for(let bb=1;bb<=5;bb++){
   for(let bc=1;bc<=bb;bc++){
      document.write(1);
	  
   }
   document.write("<br>");
}

document.write("<hr>");

let flot=0;
let be=3
for(let bd=2;bd<be;bd++){
  if(be%bd==0){
	  flot=1;
  }
}
if(flot==0){
    document.write("prime"+"<br>");
}
else{
	document.write("not-prime"+"<br>");
}


document.write("<hr>");

let b=50;
let flag=0;
let count=0;

for(a=1;a<=b;a++){
	flag=0;
	for(let c=2;c<a;c++){
		if(a%c==0){
			flag=1;
		}			
	}
	if(flag==0){
		document.write(a+"<br>");
		count++;
	}
	document.write();
}
document.write("counting"+count);

	
