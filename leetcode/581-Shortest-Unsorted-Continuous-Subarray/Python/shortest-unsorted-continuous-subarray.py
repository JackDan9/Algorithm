class Solution(object):
    def findUnsortedSubarray(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        if len(nums) == 0:
            return 0
        
        temp_l = nums[0]
        temp_r = nums[len(nums) - 1]

        left = 0
        right = 0

        i = 1
        j = len(nums) - 2

        while i < len(nums):
            if nums[i] < temp_l:
                right = i
            temp_l = max(temp_l, nums[i])
            i = i + 1
            
        while j >= 0:
            if nums[j] > temp_r:
                left = j
            temp_r = min(temp_r, nums[j])
            j = j - 1
        
        if left == right:
            return 0
        return right - left + 1