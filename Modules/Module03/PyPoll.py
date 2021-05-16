"""
In this project, our final Python script will need to be able to deliver
the following information when the script is run: 

1. Total number of votes cast
2. A complete list of candidates who received votes
3. Total number of votes each candidate received
4. Percentage of votes each candidate won
5. The winner of the election based on popular vote
"""

import datetime, os, csv
# file_to_load = "Resources/election_results.csv"
# election_data = open(file_to_load, 'r')
# election_data.close()
file_to_load = os.path.join("Resources", "election_results.csv")
with open(file_to_load) as election_data:
    file_reader = csv.reader(election_data)

    headers = next(file_reader)
    print(headers)

    # for row in file_reader:
    #     print(row)

file_to_save = os.path.join("Analysis", "election_analysis.txt")
#outfile = open(file_to_save, "w")
with open(file_to_save, "w") as txt_file:
    txt_file.write("Counties in Election\n")
    txt_file.write("--------------------\n")
    txt_file.write("Arapahoe\nDenver\nJefferson")

