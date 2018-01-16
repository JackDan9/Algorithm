# -*- coding:utf-8 -*-
# Check username and PIN code.

database = [
    ['jackdan', '1234'],
    ['jackdan9', '4242'],
    ['jack', '7524'],
    ['dan', '9843']
]
username = raw_input('User name: ')
pin = raw_input('PIN code: ')

if [username, pin] in database:
    print('Access granted')