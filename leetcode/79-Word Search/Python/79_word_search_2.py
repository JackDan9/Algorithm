class Solution(object):
    def exist(self, board, word):
        """
        :type board: List[List[str]]
        :type word: str
        :rtype: bool
        """

        board_len = len(board)
        board_second_len = len(board[0])

        mark = [[False for _ in range(board_second_len)] for j in range(board_len)]

        for i in range(board_len):
            for j in range(board_second_len):
                if self.depth_first_search(board, word, i, j, board_len, board_second_len, 0):
                    return True
        
        return False
    
    def depth_first_search(self, board, word, i, j, board_len, board_second_len, index):
        if index == len(word) - 1:
            return board[i][j] == word[index]
        
        if board[i][j] == word[index]:
            mark[i][j] = True

            for d in [[0, -1], [-1, 0], [0, 1], [1, 0]]:
                new_i = i + d[i]
                new_j = j + d[j]
            
                if new_i >= 0 and new_i < board_len and new_j >= 0 and new_j < board_second_len and 