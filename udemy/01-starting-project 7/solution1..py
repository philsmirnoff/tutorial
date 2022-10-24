# Write a function or method to return a list of strings representing the correctly prioritized orders according to this system
# 1. Prime orders should be returned first, sorted by lexicographic sort of the alphabetic metadata
# 2. Only in case of ties, the identifier should be used as a backup sort.
# 3. The remaining non-Prime orders must all come after, in the original order they were given in the input

# input: orderList, a list of strings representing all of the orders
# output: a list of strings representing the correctly prioritized orders

# example input:
# orderList = 
# [zId 93 12]
# [fp kindle book]
# [10a echo show]
# [17g 12 25 6]
# [ab1 kindle book]
# [125 echo dot second generation]

# example output:
# [125 echo dot second generation]
# [10a echo show]
# [ab1 kindle book]
# [fp kindle book]
# [zId 93 12]
# [17g 12 25 6]

# Solution:
  
  def sortOrders(orderList):
    # initialize the result list
    result = []
    # initialize the prime orders list
    primeOrders = []
    # initialize the non-prime orders list
    nonPrimeOrders = []
    # iterate through the orderList
    for i in range(len(orderList)):
      # if the first character of the order is a digit
      if orderList[i][0].isdigit():
        # append the order to the non-prime orders list
        nonPrimeOrders.append(orderList[i])
      # 
      else:
        # append the order to the prime orders list
        primeOrders.append(orderList[i])
    # sort the prime orders list by the alphabetic metadata
    primeOrders.sort()
    # append the prime orders list to the result list
    result.extend(primeOrders)
    # append the non-prime orders list to the result list
    result.extend(nonPrimeOrders)
    # return the result list
    return result
  
  
  Time Complexity: O(nlogn)
  Space Complexity: O(n)