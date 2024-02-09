from __future__ import annotations
from dataclasses import dataclass

@dataclass
class File:
    id: int
    name: str
    categories: list[str]
    parent: int
    size: int


"""
Task 1
"""
def leafFiles(files: list[File]) -> list[str]:
    # intialise a set for all the parents
    # O(n)
    parentSet = set()

    # loop through all the files, and if we find
    # a file with a parent that isn't -1, 
    # add it.
    for f in files:
        if f.parent != -1:
            parentSet.add(f.parent)

    # now we just return a list of all files that are not in the parent set
    return [fl.name for fl in files if fl.id not in parentSet]


"""
Task 2
"""
def kLargestCategories(files: list[File], k: int) -> list[str]:
    # counts the number of of each category in the list
    categoryCount = {}

    # an array used to store, in order, the frequencies of the categories into buckets.
    # i.e. if a category 'documents' appeared twice in the files list, then it is stored
    # in the array at index 2.
    freq = [[]]

    # counts, the categories and initialises the frequency array counter. (max frequency
    # of anything is bounded by the number of files)
    for f in files:
        for c in f.categories:
            categoryCount[c] = categoryCount.get(c, 0) + 1
        freq.append([])

    # adds the categories and groups them by their frequencies
    for name, category in categoryCount.items():
        freq[category].append(name)

    final_res = []

    # loop backwards, since we wwant the top k most frequent
    for x in freq[::-1]:
        # sort each category alphabetically, to satisfy the second requirement
        for category in sorted(x):
            final_res.append(category)
            if len(final_res) == k:
                return final_res
    # O(n + k log k)

"""
Task 3
"""
def largestFileSize(files: list[File]) -> int:
    # this problem is analogous to a graph problem.
    # we are trying to find all possible children and grandchildren, and get a size there.
    # it stands to reason that we connect these with an adjacencyMap,
    # then we can run DFS on that graph, and check for maxSize.

    # map to track adjacencies in the graph.
    # we can describe adjacencies in a one way relationship, where A is
    # adjacent to B if A is a parent of B.
    adjMap = {}

    # this map keeps track of elements that we've already calculated
    # the totalSize for, to reduce any repeated work.
    totalSizeMap = {}

    # Initialise the adjacency Map.
    for f in files:
        adjMap[f.id] = []

    # for every file, look up the parent,
    # then append itself to its parent's array.
    for f in files:
        if f.parent != -1:
            adjMap[f.parent].append(f)

    maxSize = 0

    # DFS to traverse through the whole map we created, and to update the maxSize accordingly.
    def dfs(f: File, adjMap: dict, totalSizeMap: dict):
        # if the id is already visited, return it.
        if f.id in totalSizeMap:
            return totalSizeMap[f.id]
        # we need to calculate total size, so we 
        # must visit all neighbours and add their total sizes
        sum = f.size
        for child in adjMap[f.id]:
            sum += dfs(child, adjMap, totalSizeMap)

        # once found, update the totalSizeMap.
        totalSizeMap[f.id] = sum
        return sum

    # for the final step, to ensure we visit all files, (including the ones)
    # that have no parent or child relationship, we must loop through them 
    # and run the dfs function.
    for f in files:
        maxSize = max(maxSize, dfs(f, adjMap, totalSizeMap))
        
    return maxSize


if __name__ == '__main__':
    testFiles = [
        File(1, "Document.txt", ["Documents"], 3, 1024),
        File(2, "Image.jpg", ["Media", "Photos"], 34, 2048),
        File(3, "Folder", ["Folder"], -1, 0),
        File(5, "Spreadsheet.xlsx", ["Documents", "Excel"], 3, 4096),
        File(8, "Backup.zip", ["Backup"], 233, 8192),
        File(13, "Presentation.pptx", ["Documents", "Presentation"], 3, 3072),
        File(21, "Video.mp4", ["Media", "Videos"], 34, 6144),
        File(34, "Folder2", ["Folder"], 3, 0),
        File(55, "Code.py", ["Programming"], -1, 1536),
        File(89, "Audio.mp3", ["Media", "Audio"], 34, 2560),
        File(144, "Spreadsheet2.xlsx", ["Documents", "Excel"], 3, 2048),
        File(233, "Folder3", ["Folder"], -1, 4096),
    ]

    assert sorted(leafFiles(testFiles)) == [
        "Audio.mp3",
        "Backup.zip",
        "Code.py",
        "Document.txt",
        "Image.jpg",
        "Presentation.pptx",
        "Spreadsheet.xlsx",
        "Spreadsheet2.xlsx",
        "Video.mp4"
    ]

    assert kLargestCategories(testFiles, 3) == [
        "Documents", "Folder", "Media"
    ]

    assert largestFileSize(testFiles) == 20992
