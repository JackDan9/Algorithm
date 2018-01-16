# -*- coding: utf-8 -*-
def aVar():
    a = 2
    del a
    a = 1
    return a
if __name__ == '__main__':
    a = 1
    a = aVar()
    if(a == a):
        print(1)