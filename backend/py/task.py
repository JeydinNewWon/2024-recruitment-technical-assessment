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
    parentset = set()

    for f in files:
        if f.parent != -1:
            parentset.add(f.parent)

    return [fl.name for fl in files if fl.id not in parentset]


"""
Task 2
"""
def kLargestCategories(files: list[File], k: int) -> list[str]:
    categorycount = {}

    freq = [[]]

    for f in files:
        for c in f.categories:
            categorycount[c] = categorycount.get(c, 0) + 1
        freq.append([])

    for name, category in categorycount.items():
        freq[category].append(name)

    final_res = []

    for x in freq[::-1]:
        for category in sorted(x):
            final_res.append(category)
            if len(final_res) == k:
                return final_res

"""
Task 3
"""
def largestFileSize(files: list[File]) -> int:
    adjMap = {}
    totalSizeMap = {}

    for f in files:
        adjMap[f.id] = []

    for f in files:
        if f.parent != -1:
            adjMap[f.parent].append(f)

    maxSize = 0

    def dfs(f: File, adjMap: dict, totalSizeMap: dict):
        if f.id in totalSizeMap:
            return totalSizeMap[f.id]
        sum = f.size
        for child in adjMap[f.id]:
            sum += dfs(child, adjMap, totalSizeMap)
        totalSizeMap[f.id] = sum
        return sum

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
