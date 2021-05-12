"""
## The conditional puzzle

### Instructions

* Look through the examples and figure out what line will print.

* Do not run the code at first, see if you can follow the thought process and guess.
"""

# 1.
x = 5
y = 10
if 2 * x > 10:
    print("Question 1 works!")
else:
    print("oooo needs some work") # this line should print, 10 is not > 10, so the first condition fails


# 2.
x = 5
y = 10
if len("Dog") < x:
    print("Question 2 works!") # this line should print since 3 is not less than 5, quote marks don't count
else:
    print("Still missing out")

# 3.
x = 2
y = 5
if (x ** 3 >= y) and (y ** 2 < 26):
    print("GOT QUESTION 3!") # this line should print: 8 is >= 5 AND 25 is < 26
else:
    print("Oh good you can count")

# 4.
name = "Dan"
group_one = ["Greg", "Tony", "Susan"]
group_two = ["Gerald", "Paul", "Ryder"]
group_three = ["Carla", "Dan", "Jefferson"]

if name in group_one:
    print(name + " is in the first group")
elif name in group_two:
    print(name + " is in group two")
elif name in group_three:
    print(name + " is in group three") # this line, "Dan" is only in group_three
else:
    print(name + " does not have a group")


# 5.
height = 66
age = 16
adult_permission = True

if (height > 70) and (age >= 18):
    print("Can ride all the roller coasters") # nope
elif (height > 65) and (age >= 18):
    print("Can ride moderate roller coasters") # nope
elif (height > 60) and (age >= 18):
    print("Can ride light roller coasters") # nope
elif ((height > 50) and (age >= 18)) or ((adult_permission) and (height > 50)): # this one
    print("Can ride bumper cars")
else:
    print("Stick to lazy river")
