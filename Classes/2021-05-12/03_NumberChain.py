"""
# Number Chain

Chain up the numbers

## Instructions

* Using a while loop, ask the user "How many numbers?", then print out a chain of ascending numbers, starting at 0.
* After the results have printed ask the user if they would like to continue.
  * If "y", restart the process, starting at 0 again.
  * If "n", exit the chain.

## Bonus

* Rather than just displaying numbers constantly starting at 0, have the numbers begin at the end of the previous chain.
"""

# Initial variable to track game play
user_play = "y"
chain_output = ""
# While we are still playing...
while user_play == "y":

    # Ask the user how many numbers to loop through
    user_loops = input("How many loops would you like to run? ")
    # Loop through the numbers. (Be sure to cast the string into an integer.)
    # Print each number in the range
    for number in range(int(user_loops)):
        print(number)
        chain_output += str(number)
    # Once complete...
    print(chain_output)
    user_play = input("Continue: (y)es or (n)o? ")