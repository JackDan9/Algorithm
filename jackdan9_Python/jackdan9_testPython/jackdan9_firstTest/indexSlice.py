# _*_ coding: UTF-8 _*_
word = "jackdan9_python"
print(word[0:2])
print(word[1:])
print(word[4:])
print(word[4:5])
print('J' + word[1:])
print('D' + word[4:])
print(len(word))

print(4 ** 3)

cubes = [1, 8, 27, 65, 125]  # something's wrong here
cubes[3] = 4 ** 3
print(cubes)

letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
print(letters)
# replace some values
letters[2:5] = ['C', 'D', 'E']
print(letters)

# Fibonacci series:
a, b = 0, 1
while b < 10:
    print(b)
    a, b = b, a+b

x = int(input("Please enter an integer: "))
if x < 0:
    x = 0
    print('Negative changed to zero')
elif x == 0:
    print('Zero')
else:
    print('More')

strWords = ['cat', 'window', 'defenstrate']
for w in strWords:
    print(w, len(w))

for num in range(2, 10):
    for i in range(2, num):
        if num % i == 0:
            print(num, 'equals', i, '*', num//i)
            break
    else:
        print(num, 'is a prime number')

