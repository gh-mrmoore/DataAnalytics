"""
# Rock, Paper, Scissors, Shoot

Create a RPS game that takes user input from the command line and plays against the computer.

## Instructions

* Using the terminal, take an input of `r`, `p` or `s` which will stand for rock, paper, and scissors.

* Have the computer randomly pick one of these three choices.

* Compare the user's input to the computer's choice to determine if the user won, lost, or tied.

## Hints

* Look into this [stackoverflow](https://stackoverflow.com/questions/306400/how-to-randomly-select-an-item-from-a-list) question for usage.
"""

# Incorporate the random library
import random

# Print Title
print("Let's Play Rock Paper Scissors!")

# Specify the three options
options = ["r", "p", "s"]
# Computer Selection
computer_choice = random.choice(options)

# User Selection
user_choice = input("Make your Choice: (r)ock, (p)aper, (s)cissors? ")

# Run Conditionals
if (computer_choice == "r") and (user_choice == "s") or \
    (computer_choice == "s") and (user_choice == "p") or \
    (computer_choice == "p") and (user_choice == "r"):
    print(f'You chose {user_choice} and the computer chose {computer_choice}. You lose!')
elif (computer_choice == user_choice):
    print(f'You chose {user_choice} and the computer chose {computer_choice}. Tie!')
else:
    print(f'You chose {user_choice} and the computer chose {computer_choice}. You win!')