"""
# Grocery Store List

## Instructions

* Create a Python list to store the following items as a list of strings. You need to buy:
    * Milk
    * Bread
    * Eggs
    * Peanut Butter
    * Jelly

* Print out the list
* Wait! Your cousin is visiting next week, and they’re only allergic to peanuts! Change “peanut butter” in the list to “almond butter”.
* You just remembered that you have homemade jam that your neighbor made for you. Remove “jelly” from the list.
* You just used up the last of your coffee. Add “coffee” to your grocery list.
* Print out the updated list.
"""

# Create a Python list to store your grocery list
grocery_list = ["Milk", "Bread", "Eggs", "Peanut Butter", "Jelly", "Milk"]
print(grocery_list)
print(grocery_list.index("Milk")) # index will only find the first instance of an item

# Print the grocery list
grocery_list.remove("Milk") # remove will only remove the first instance matching the given value
print(grocery_list)

# Change "Peanut Butter" to "Almond Butter" and print out the updated list
grocery_list[3] = "Almond Butter"
print(grocery_list)

# Remove "Jelly" from grocery list and print out the updated list
grocery_list.remove("Jelly")

# Add "Coffee" to grocery list and print the updated list
grocery_list.append("Coffee")
print(grocery_list)

for item in grocery_list:
    print(item)