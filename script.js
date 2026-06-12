function stringChop(str, size) {
  // your code here
	let ans=[];
	size=Number(size);
	if(size==0) return null;
	let s='';
	for(let i=0;i<str.length;i++){
		s+=str[i];
		if(s.length===size){
			ans.push(s);
			s='';
		}
	}
 if (s.length > 0) {
    ans.push(s);
  }
  
  return ans;
}
// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
