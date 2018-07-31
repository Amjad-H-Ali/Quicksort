console.log('Quick Sort!');


const quickSort = (arr) => {
	let pivot = arr[arr.length -  1];
	let indx0 = 0;

	for (let i = 0, len = arr.length; i < len; i ++) {
		if (arr[i] < pivot) {
			const temp = arr[indx0];
			arr[indx0] = arr[i];
			arr[i] = temp;
			indx0 ++; 
		};
	};
	arr[arr.length - 1] = arr[indx0];
	arr[indx0] = pivot
	console.log(arr);
};


quickSort([7, 3, 0, 9, 2, 1, 5]);

