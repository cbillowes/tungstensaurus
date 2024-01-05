# Searching

## Definition

Searching algorithms are methods or techniques used to find a particular item or value in a collection of data, such as an array, list, or database.
The goal of a searching algorithm is to determine whether a specific element exists within the dataset and, if so, to locate its position.

Knowing when to use each algorithm based on the characteristics of the problem and the data is crucial for a senior software engineer. Additionally, understanding the time and space complexities of these algorithms is essential for making informed decisions in algorithm selection.

## Linear Search

The simplest searching algorithm that checks each element in a list until a match is found.

**Time Complexity:** O(n) in the worst case.

## Binary Search

Applicable to sorted arrays, binary search compares the target value to the middle element of the array and narrows down the search range.

**Time Complexity:** O(log n) in the worst case.

## Depth-First Search (DFS)

Used for traversing or searching tree or graph data structures. It explores as far as possible along each branch before backtracking.

**Applications:** Solving mazes, pathfinding, topological sorting.

## Breadth-First Search (BFS)

Another algorithm for traversing or searching tree or graph data structures. It explores all the neighbors at the present depth before moving on to nodes at the next depth level.

**Applications:** Shortest pathfinding, network analysis.

## A\* Search Algorithm

A heuristic search algorithm that efficiently finds the least-cost path from a starting point to a goal.

**Applications:** Pathfinding in games, robotics, and artificial intelligence.

## Jump Search

An improvement over linear search for ordered lists. It jumps ahead by a fixed number of steps and then linearly searches to find the exact location.

**Time Complexity:** O(√n) in the worst case.

## Interpolation Search

An algorithm for searching ordered datasets. It uses interpolation to estimate the position of the target value.

**Time Complexity:** O(log log n) on average, but can be O(n) in the worst case.

## Exponential Search

An algorithm designed for searching in ordered and unbounded lists. It narrows down the search range exponentially before performing a binary search.

**Time Complexity:** O(log n).

