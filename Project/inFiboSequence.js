
function fibNext(a,b)
{
	return a + b;		
}

function inFiboSequence(num)
{
	let n1 = 0;
	let n2 = 1;
	let sum = n1 + n2;	

	while(true)
	{
		if(num == sum) return true;	
		n1 = n2;
		n2 = sum;	
		if(num < sum) break;
		sum = fibNext(n1, n2);
	}

	return false;	
}
