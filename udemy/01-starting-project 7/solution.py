# write an algorithm to find the sets of foreground and background application pairs that optimally utilize the given device for a given list of foreground applications and a given list of background applications

# input: a list of foreground applications, alist of pair integeres where the first integere represents the unique ID of a foreground application and the second integere represnts the amount of memory required by application, a list of background applications, alist of pair integeres where the first integere represents the unique ID of a background application and the second integere represnts the amount of memory required by application, and the amount of memory available on the device
# a deviceCapacity
# output: a list of pairs of integeres representing the pairs of IDs of foreground and background applications that optimally utilize the device


# example input
# foregroundApplications = [[1, 2], [2, 4], [3, 6]]
# backgroundApplications = [[1, 2]]

# example output
# [[2, 1]]

# Solution:

# def applicationPairs(deviceCapacity, forgroundAppList, backgroundAppList):
#     # sort the lists by memory required
#     forgroundAppList.sort(key=lambda x: x[1])
#     backgroundAppList.sort(key=lambda x: x[1])
#     # initialize the result list
#     result = []
#     # initialize the max memory used
#     maxMemoryUsed = 0
#     # iterate through the foregroundAppList
#     for i in range(len(forgroundAppList)):
#         # iterate through the backgroundAppList
#         for j in range(len(backgroundAppList)):
#             # if the sum of the memory required by the forground and background app is less than the device capacity
#             if forgroundAppList[i][1] + backgroundAppList[j][1] <= deviceCapacity:
#                 # if the sum of the memory required by the forground and background app is greater than the max memory used
#                 if forgroundAppList[i][1] + backgroundAppList[j][1] > maxMemoryUsed:
#                     # set the max memory used to the sum of the memory required by the forground and background app
#                     maxMemoryUsed = forgroundAppList[i][1] + backgroundAppList[j][1]
#                     # set the result to the pair of IDs of the forground and background app
#                     result = [[forgroundAppList[i][0], backgroundAppList[j][0]]]
#                 # if the sum of the memory required by the forground and background app is equal to the max memory used
#                 elif forgroundAppList[i][1] + backgroundAppList[j][1] == maxMemoryUsed:
#                     # append the pair of IDs of the forground and background app to the result
#                     result.append([forgroundAppList[i][0], backgroundAppList[j][0]])
#     # return the result
#     return result

Time Complexity: O(n^2)
Space Complexity: O(1)
  
print(applicationPairs(7, [[1, 2], [2, 4], [3, 6]], [[1, 2]]))

