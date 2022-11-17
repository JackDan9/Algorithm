class Solution(object):
    def minCostClimbingStairs(self, cost):
        """
        :type cost: List[int]
        :rtype: int
        """
        l = len(cost)
        if l == 1:
            return cost[0]
        if l == 2:
            return min(cost[0], cost[1])
        
        res = [0] * l

        res[0] = cost[0]
        res[1] = cost[1]

        index = 2

        while index < l:
            res[index] = cost[index] + min(res[index - 1], res[index - 2])
            index += 1
        
        return min(res[l - 1], res[l - 2])
        

