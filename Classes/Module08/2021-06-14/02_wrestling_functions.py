"""
# Wrestling with Functions

## Instructions

* Analyze the code and CSV provided, looking specifically for what needs to still be added to the application.

* Using the starter code provided, create a function called `print_percentages` which takes in a parameter called `wrestler_data` and does the following:

  * Uses the data stored within `wrestler_data` to calculate the percentage of matches the wrestler won, lost, and drew over the course of a year.

  * Prints out the stats for the wrestler to the terminal.

## Bonus

* Still within the `print_percentages()` function, create a conditional that checks a wrestler's loss percentage and prints either "Jobber" to the screen if the number was greater than fifty or "Superstar" if the number was less than 50.
"""

import os
import csv

# Path to collect data from the Resources folder
wrestling_csv = os.path.join("Resources", "WWE-Data-2016.csv")

# Define the function and have it accept the 'wrestlerData' as its sole parameter
def print_percentages(wrestlerData):
    # Find the total number of matches wrestled
    total_matches = int(wrestlerData[1]) + int(wrestlerData[2]) + int(wrestlerData[3])
    # Find the percentage of matches won
    percent_won = (int(wrestlerData[1]) / total_matches) * 100
    # Find the percentage of matches lost
    percent_lost = (int(wrestlerData[2]) / total_matches) * 100
    # Find the percentage of matches drawn
    percent_draw = (int(wrestlerData[3]) / total_matches) * 100
    # Print out the wrestler's name and their percentage stats
    print(f'{wrestlerData[0]} has won {percent_won:.2f} percent of matches, lost {percent_lost:.2f} percent of matches and drawn {percent_draw:.2f} percent of matches.')

# Read in the CSV file
with open(wrestling_csv, 'r') as csvfile:

    # Split the data on commas
    csvreader = csv.reader(csvfile, delimiter=',')

    # Prompt the user for what wrestler they would like to search for
    name_to_check = input("What wrestler do you want to look for? ")

    # Loop through the data
    for row in csvreader:

        # If the wrestler's name in a row is equal to that which the user input, run the 'print_percentages()' function
        if(name_to_check == row[0]):
            print_percentages(row)
