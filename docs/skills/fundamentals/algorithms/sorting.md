# Sorting

## Definition

Sorting algorithms are methods or techniques used to arrange elements in a specific order within a collection of data, such as an array or a list. The goal of sorting is to organize the data in a way that makes it easier to search, access, and analyze. Various sorting algorithms have been developed, each with its own advantages and disadvantages based on factors like time complexity, space complexity, and the characteristics of the data.

These sorting algorithms differ in their efficiency, adaptability to different data scenarios, and ease of implementation. The choice of which sorting algorithm to use depends on factors such as the size of the dataset, the distribution of the data, and the specific requirements of the application.

## Bubble Sort

Repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted.
Time Complexity O(n^2) in the worst case.

## Selection Sort

Divides the list into a sorted and an unsorted region. It repeatedly selects the smallest (or largest) element from the unsorted region and swaps it with the first element of the unsorted region.
Time Complexity O(n^2) in the worst case.

## Insertion Sort

Builds the final sorted array one item at a time. It takes each element from the list and inserts it into its correct position in the already-sorted part of the array.
Time Complexity O(n^2) in the worst case.

## Merge Sort

Divides the unsorted list into n sub-lists, each containing one element, and then repeatedly merges sub-lists to produce new sorted sub-lists until only one sub-list remains.
Time Complexity O(n log n) in the worst case.

## Quick Sort

Selects a 'pivot' element from the array and partitions the other elements into two sub-arrays, according to whether they are less than or greater than the pivot. The process is then applied recursively to each sub-array.
Time Complexity O(n^2) in the worst case, but O(n log n) on average.

## Heap Sort

Builds a max-heap (or min-heap) data structure and uses it to sort the elements. It involves building a heap, swapping the root with the last element, and then heapifying the reduced heap.
Time Complexity O(n log n) in the worst case.
