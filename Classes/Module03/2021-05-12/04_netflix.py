# Modules
import os
import csv

# Prompt user for video lookup
video = input("What show or movie are you looking for? ")

# Set path for file
data_path = os.path.join("Resources", "netflix_ratings.csv")
# print(data_path)
# Open the CSV
with open(data_path, 'r') as netflix_data:
    netflix_read = csv.reader(netflix_data)
    # Loop through looking for the video
    for row in netflix_read:
        # print(row)
        if video in row:
            print(row)                       