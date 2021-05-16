print("Hello World")
print(type(2019))
print(type(73.81))
print(type(""))
print(type(True))

print(5 + 2 * 3)
print (8 // 5 - 3)
print(8 + 22 * 2 - 4)
print (16 - 3 / 2 + 7 - 1)
print(3 ** 3 % 5)
print(5 + 9 * 3 / 2 - 4)
print((5 + 2) * 3)
print((8 // 5) - 3)
print(8 + (22 * (2 - 4)))
print(16 - 3 / (2 + 7) - 1)
print(3 ** (3 % 5))
print(5 + (9 * 3 / 2 - 4))
print(5 + (9 * 3 / (2 - 4)))

counties = ["Arapahoe", "Denver", "Jefferson"]

print(counties[0])

print(counties[:2])

print(counties[1:])
print(counties[1:2])

counties_tuple = ("Arapahoe", "Denver", "Jefferson")

print(counties_tuple[:-1])

counties_dict = {"Arapahoe": 422829}

print(counties_dict[("Arapahoe")])
print(counties_dict.get("Arapahoe"))

voting_data = []
voting_data.append({"county":"Arapahoe", "registered_voters": 422829})
voting_data.append({"county":"Denver", "registered_voters": 463353})
voting_data.append({"county":"Jefferson", "registered_voters": 432438})