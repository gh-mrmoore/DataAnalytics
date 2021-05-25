# Modules
import os
import csv

# Prompt user for video lookup
video = input("What show or movie are you looking for? ")

# Set path for file
csvpath = os.path.join("Resources", "netflix_ratings.csv")
# print(csvpath)
# Specify the file to write to the movie data.
txt_file = os.path.join("Output", "movie_results.txt")

# Set a variable to false to check if we found the video
found = False

# Open the NetFlix CSV
with open(csvpath, newline="") as csvfile:
    csvreader = csv.reader(csvfile, delimiter=",")

    # Loop through looking for the video
    for row in csvreader:
        if row[0] == video:

            # Set the variable created in Step 1 to confirm we have found the video
            found = True
 
            # Open the file using "write" mode. Specify the variable to hold the contents
            with open(txt_file, 'w') as txt_file_path:
                
                # Create a variable to hold the title, rating level, and the movie rating inside parentheses.
                movie_data = (
                    f"Title: {row[0]}\n"
                    f"===============\n"
                    f"Rating: {row[1]}\n"
                    f"Rated {row[5]}\n"
                    f"===============\n"
                )
               
                
                # Write the movie data to the text file.
                txt_file_path.write(movie_data)

                # Print the movie data to the console.
                print(movie_data)

            # Stop at first results to avoid duplicates
            break

    # If the video is never found, alert the user
    if found is False:
        print("Sorry about this, we don't seem to have what you are looking for!")
