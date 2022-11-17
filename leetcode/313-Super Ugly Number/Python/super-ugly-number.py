class Solution(object):
    def nthSuperUglyNumber(self, n, primes):
        """
        :type n: int
        :type primes: List[int]
        :rtype: int
        """
        s = len(primes)

        if not primes or s < 1 or n < 1:
            return 0

        res = [0] * n
        res[0] = 1

        next = [0] * s
        index = 1

        while index < n:
            nextNum = float('inf')

            for i in range(s):
                temp = res[next[i]] * primes[i]
                if temp < nextNum:
                    nextNum = temp
            
            res[index] = nextNum

            for j in range(s):
                while res[next[j]] * primes[j] <= res[index]:
                    next[j] += 1

            index += 1
        
        return res[n - 1]

if __name__ == '__main__':
    func = Solution()
    print(func.nthSuperUglyNumber(900, [11,13,17,23,37,41,47,53,61,67,71,79,83,103,109,113,127,131,139,149,157,163,167,181,191,199,223,227,257,263]))