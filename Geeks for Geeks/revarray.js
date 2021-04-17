function reverse(arr){
	let i = 0,j = arr.length - 1;

	while (i < j){
		let temp = arr[i];
		arr[i] = arr[j];
		arr[j] = temp;
		i++;
		j--;
	}
}

let nums = [1,2,3,4]
console.log(nums);
reverse(nums);
console.log(nums);
