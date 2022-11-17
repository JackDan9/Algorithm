# if __name__ == '__main__':
#   print(('').join([ '()', '()' ]));
#   for i in range(10):
#     print("first i: ", i)
#     for i in range(20):
#       print(i)

# class Solution:
from copyreg import constructor


def generateParenthesis(n):
    res = ["()"]
    if n == 1:
        return res
    for i in range(n-1):
        st = set()
        for item in res:
            print(item)
            for i in range(len(item)+1):
                t = item
                t = list(t)
                t.insert(i, '()')
                # print(('').join(t))
                st.add(('').join(t))
                # print(st)
        print(st)
        res = list(st)
        print(res)
    return res


if __name__ == '__main__':
    generateParenthesis(3)
