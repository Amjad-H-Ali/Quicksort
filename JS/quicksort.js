console.log('Quick Sort!');


const quickSort = (arr) => {
	// Exit code for recurive function
	if (arr.length <= 1) {
		return arr;
	};
	// Integer less than pivot go in left sub array
	let left = [];
	// Integer greater than pivot go in right sub array
	let right = [];
	// We'll arbitrarly chose the last element as our pivot
	let pivot = arr[arr.length - 1];

	for (let i = 0, len = arr.length - 1; i < len; i ++) {
		if (arr[i] <= pivot) {
			left.push(arr[i]);
		}
		else {
			right.push(arr[i]);
		};
	};
	// Repeat the process with the sub-arrays
	return [...quickSort(left),pivot,...quickSort(right)];
};


console.log(quickSort([7, 3, 0, 9, 2, 1, 5, 7]));

        