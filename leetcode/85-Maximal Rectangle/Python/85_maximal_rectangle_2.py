class Solution(object):
    def maximalRectangle(self, matrix):
        """
        :type matrix: List[List[str]]
        :rtype: int
        """
        if len(matrix) == 0 or len(matrix[0]) == 0:
            return 0
        
        row_len = len(matrix)
        col_len = len(matrix[0])
        
        height = [0] * (col_len + 2)
        
        max_area = 0
        
        for i in range(0, row_len):
            temp_list = []
            for j in range(0, (col_len + 2)):
                if j >= 1 and j <= col_len:
                    if matrix[i][j - 1] == "1":
                        height[j] += 1
                    else:
                        height[j] = 0
                while temp_list and height[temp_list[-1]] > height[j]:
                    current = temp_list.pop()
                    max_area = max(max_area, (j - temp_list[-1] - 1) * height[current])
                temp_list.append(j)
        return max_area