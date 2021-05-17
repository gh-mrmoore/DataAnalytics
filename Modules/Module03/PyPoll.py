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
file_to_save = os.path.join("Analysis", "election_analysis.txt")

total_votes = 0 # initialize counter for total votes
candidate_options = []
candidate_votes = {}

# create placeholders for the winner's information
winning_candidate = ""
winning_count = 0
winning_percentage = 0

with open(file_to_load) as election_data:
    file_reader = csv.reader(election_data)

    headers = next(file_reader)
    # print(headers)

    for row in file_reader:
        # print(row)
        total_votes += 1
        candidate_name = row[2]
        if candidate_name not in candidate_options:
            candidate_options.append(candidate_name)
            candidate_votes[candidate_name] = 0
        
        candidate_votes[candidate_name] += 1

# print(total_votes)
# for names in candidate_options:
#     print(names)

# print(candidate_votes) # print dictionary with each candidate's vote count
for candidate_name in candidate_votes:
    cand_votes = candidate_votes[candidate_name]
    candidate_vote_percentage = (float(cand_votes) / float(total_votes)) * 100
    print(f'{candidate_name}: received {candidate_vote_percentage:.1f}% of the vote.')
    if (cand_votes > winning_count) and (candidate_vote_percentage > winning_percentage):
        winning_count = cand_votes
        winning_percentage = candidate_vote_percentage
        winning_candidate = candidate_name
print(f'The winning candidate was: {winning_candidate} with {winning_count:,} votes totaling {winning_percentage:.1f}% of the vote.')

winner_summary = (
    f'-------------------------\n'
    f'Winner: {winning_candidate}\n'
    f'Winning Vote Count: {winning_count:,}\n'
    f'Winning Percentage: {winning_percentage:.1f}\n'
    f'-------------------------\n'
)

#outfile = open(file_to_save, "w")
with open(file_to_save, "w") as txt_file:
    txt_file.write(f'Election Results\n')
    txt_file.write(f'-------------------------\n')
    txt_file.write(f'{total_votes:,}\n')
    txt_file.write(f'-------------------------\n')
    for candidate_name in candidate_votes:
        cand_votes = candidate_votes[candidate_name]
        candidate_vote_percentage = (float(cand_votes) / float(total_votes)) * 100
        txt_file.write(f'{candidate_name}: received {candidate_vote_percentage:.1f}% of the vote.\n')
    txt_file.write(f'-------------------------\n')
    txt_file.write(winner_summary)
