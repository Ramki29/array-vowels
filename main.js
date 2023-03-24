var v=prompt("Enter the name");
let counts=0;
function vowels(v)
	{
	for(i=0; i<v.length; i++)
		{
		if(v[i]=="a" || v[i]=="e" || v[i]=="i" || v[i]=="o" || v[i]=="u" )
			{
			counts++;
			}
		}
		return counts;
		
	}
	document.write(vowels(v));
	document.write("<br>");