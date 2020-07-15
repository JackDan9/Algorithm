class Solution(object):
    def subsets(self, nums):
        """
        :type nums: List[int]
        :rtype: List[List[int]]
        """
        nums_len = len(nums)
        
        if nums_len == 0:
            return []
        
        result_list = []
        path_list = []
        
        self.depth_first_search(nums, nums_len, 0, path_list, result_list)
        
        return result_list
    
    def depth_first_search(self, nums, nums_len, depth, path, result):
        result.append(path[:])
        
        for index in range(depth, nums_len):
            path.append(nums[index])
            self.depth_first_search(nums, nums_len, index + 1, path, result)
            path.pop()