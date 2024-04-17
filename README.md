# Sorting-Visualizer

Sorting algorithms are used to rearrange a collection of elements in a specific order, such as ascending or descending order. There are several sorting algorithms available, including bubble sort, insertion sort, selection sort, 
merge sort, quicksort, and heapsort.

# Bubble-Sort:-

Bubble sort is a simple sorting algorithm that works by repeatedly swapping adjacent elements if they are in the wrong order. It gets its name from the way smaller elements "bubble" to the top of the list as the algorithm progresses.

# Methodology: 
The algorithm works as follows: 
1. Starting from the first element, compare the current element with the next element. 
2. If the current element is greater than the next element, swap them. 
3. Move to the next pair of elements and repeat step 2.
4. Continue this process until the end of the list is reached. 
5. Repeat steps 1-4 for each element in the list.

# Insertion-Sort:-

Insertion sort is a simple sorting algorithm that sorts an array or list of elements by repeatedly iterating over the list and inserting each element in its correct position in a sorted sub-list. 

# Methodology: 
The algorithm works as follows: 
1. Start with the first element of the list and assume it is sorted. 
2. Iterate over the list, starting with the second element. For each element, compare it with all the elements in the sorted sub-list that come before it and insert it at the correct position. 
3. Repeat step 2 until all the elements are sorted.

# Selection-Sort:- 
The selection sort algorithm is a simple sorting algorithm that sorts an array by repeatedly finding the minimum element from the unsorted part of the array and placing it at the beginning. 
The algorithm maintains two subarrays in a given array. 
a. The subarray which is already sorted. 
b. Remaining subarray which is unsorted. 
 
In every iteration of the selection sort, the minimum element from the unsorted subarray is picked and swapped with the leftmost element of the unsorted subarray. The leftmost element is then 
considered sorted, and the process continues until the entire array is sorted. 

# Methodology: 
The step-by-step methodology of implementing the selection-sort algorithm: 
1. Set the first element as the minimum. 
2. Compare the minimum element with the second element. If the second element is smaller than the minimum, set the second element as the new minimum. 
3. Repeat step 2 for the rest of the elements in the array. 
4. Swap the minimum element with the first element of the array. 
5. Repeat steps 1 through 4 for the remaining elements of the array.

# Merge-Sort: - 
Mergesort is a popular sorting algorithm that works by recursively dividing an array into smaller subarrays until each subarray contains only one element. Then, it combines the subarrays by sorting and merging them. 

# Methodology: 
The following is the methodology of implementing the Mergesort algorithm
1. Divide the array into two halves 
2. Sort the left half recursively using mergesort 
3. Sort the right half recursively using mergesort 
4. Merge the two sorted halves

# Quick-Sort: - 
The quicksort algorithm is a divide-and-conquer sorting algorithm that works by partitioning an array into two subarrays, one with elements smaller than a pivot and the other with elements greater than the pivot, and then recursively sorting the subarrays. The algorithm has an averagecase time complexity of O(n log n) and a worst-case time complexity of O(n^2), but its worst-case performance can be avoided with careful selection of the pivot. 

# Methodology: 
The quicksort algorithm works as follows: 
1. If the array has fewer than two elements, return the array. 
2. Select a pivot element from the array. 
3. Partition the array into two subarrays, one with elements smaller than the pivot and the other with elements greater than the pivot. 
4. Recursively sort the subarrays using quicksort. 
5. Concatenate the sorted subarrays and return the result.

# Heap-Sort: - 
Heapsort is a sorting algorithm that works by building a heap data structure from the array to be sorted and then repeatedly extracting the maximum element from the heap and placing it at the end of the sorted array. The process is repeated until the entire array is sorted. 

# Methodology: 
Here's the step-by-step methodology for implementing Heapsort: 
1. Build a heap from the array to be sorted. The heap can be either a max heap or a min-heap, depending on whether you want to sort the array in ascending or descending order.. 
2. Swap the first element of the heap with the last element of the heap. 
3. Discard the last element of the heap (it is now sorted) and reduce the heap size by one. 
4. Restore the heap property by calling the max-heapify function on the root element. 
5. Repeat steps 2-4 until the heap size is 1. 
6. The sorted array is obtained by reversing the array obtained after applying the heap sort algorithm.   
