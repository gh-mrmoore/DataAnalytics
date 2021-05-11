"""
# Info in Dictionaries

## Instructions

* Create a dictionary to store the following:
  * Your pet's name
  * Your pet's age
  * A list of a few of your pet's hobbies
  * A dictionary of a few times you wake up during the week

* Print out the following:
  * Your pet's name and age.
  * How many hobbies your pet has.
  * What your pet's favorite hobby is.
  * What time your pet wakes on one of the days of the week.
"""

my_pet = {
    "pet_name": "Fluffy",
    "pet_age": 9,
    "pet_hobbies": ["sleeping", "fetch", "tug-of-war"],
    "pet_wakeups": {
      "Monday": 9,
      "Tuesday": 8,
      "Wednesday": 5
    }
}

print(f'My pet is named {my_pet["pet_name"]} and {my_pet["pet_name"]} is {my_pet["pet_age"]}')
print(f'{my_pet["pet_name"]} has a favorite activity and it is {my_pet["pet_hobbies"][1]}')
print(f'On Tuesday, {my_pet["pet_name"]} woke up at {my_pet["pet_wakeups"]["Tuesday"]}')