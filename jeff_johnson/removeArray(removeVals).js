//-----------------------------------------------------------------------

function removeVals(arr, index1, index2){
	 var index=0;
	 var size=arr.length-1;  //keep array size reference constant for later pop

	for(i=0; i<index1; i++)
	 {
	 		arr[index]=arr[i];
	 		index++;
	 	} 
	 for(i=index2+1; i<=size; i++)
	 {
	 		arr[index]=arr[i];
	 		index++;
	 	} 	
	
	//now pop remainder
	for(i=index; i<=size; i++){
 	var popped=arr.pop();  //remove extras from array
 }	

	return arr;
}

//-----------------------------------------------------------------------
