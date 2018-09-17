# Quicksort

##### Description
###### Quicksort is a sorting algorithm that uses the divide-and-conquer strategy. It quickly sorts data items by dividing a large array into two smaller arrays. The last integer in the array, though arbitrary, is chosen as the pivot. Starting at the _0th_ index in the array, we search for an integer less than the pivot. If one is found, we swap it with the integer at the _0th_ index in the array. Index one of the array now becomes the _0th_ index. Once the pivot is reached, we swap it with the integer at the _0th_ index in this new sub-array. The process is repeated until the array is sorted.

###### We can implement Quicksort by simply creating two sub-arrays. Each time we find a smaller number than the pivot, we place it in the first sub-array. All other numbers fall into the second sub-array. We than recursivly do the same to the sub-arrays, each time placing the pivot in between the sub-arrays.

##### Complexity
###### Time: worst _O_(_n_<sup>2</sup>), best _O_(_n log n_), average _O_(_n log n_)
###### Space: worst _O_(_n_) auxiliary
