"""
# Hello Variable World

## Instructions
* Create two variables called `name` and `country` that will hold strings.
* Create two variables called `age` and `hourly_wage` that will hold integers.
* Create a variable called `satisfied` which will hold a boolean.
* Create a variable called `daily_wage` that will hold the value of `hourly_wage` multiplied by 8.
* Use traditional string concatenation to print the `name`, `country`, `age`, and `hourly_wage` variables.
* With an `f-string`, print the `daily_wage` and `satisfied` variables.

## **Hint**
* For additional help with f-strings, visit [Python 3's f-Strings](https://realpython.com/python-f-strings/).
"""

# Create a variable called 'name' that holds a string
name = "United States"

# Create a variable called 'country' that holds a string
country = "United States"

# Create a variable called 'age' that holds an integer
age = 245

# Create a variable called 'hourly_wage' that holds an integer
hourly_wage = 15

# Calculate the daily wage for the user
daily_wage = hourly_wage * 8

# Create a variable called 'satisfied' that holds a boolean
satisfied = True

# Print out "Hello <name>!"
print("Hello " + name)

# Print out what country the user entered
print(country)

# Print out the user's age
print("Your age: " + str(age))

# With an f-string, print out the daily wage that was calculated
print(f"Calculated wage: {daily_wage}")
# string format method
wage_text = "Calculated daily wage was: {wage_calc}"
print(wage_text.format(wage_calc = daily_wage))

# With an f-string, print out whether the users were satisfied
print(f"User satisfied: {satisfied}")
# string format method
satisfied_text = "User satisfied: {satisfy}"
print(satisfied_text.format(satisfy = satisfied))