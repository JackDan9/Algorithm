class Solution(object):
    def massage(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        index0 = 0
        index1 = 0
        index = 0

        while index < len(nums):
            temp = max(index0, index1 + nums[index])
            index1 = index0
            index0 = temp
            index += 1
        
        return index0

if __name__ == '__main__':
    x = Solution()
    print(x.massage([2,7,9,3,1]))