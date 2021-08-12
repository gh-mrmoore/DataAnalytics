"""
# Justice League API
* In this activity, you will create an API route that returns the superhero name and real name for every member of the DC Comics Justice League.

## Instructions
* Create a file called `app.py` for your Flask app.
* Define a Python dictionary containing the superhero name and real name for each member of the DC Comics Justice League (Superman, Batman, Wonder Woman, Green Lantern, Flash, Aquaman, and Cyborg).
  * You can gather that information here: [Justice League](https://en.wikipedia.org/wiki/Justice_League)
  * Only gather the information for the 7 characters listed above.
* Create a **GET** route called `/api/v1.0/justice-league`.
  * Inside of your GET route, create a function called `justice_league` that will use `jsonify` to convert the dictionary of Justice League members to a JSON object and return that data as a request.
* Define a root route `/` that will return the usage statement for your API.
- - -

### Copyright
© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand.  Confidential and Proprietary.  All Rights Reserved.

"""
from flask import Flask, jsonify

# Dictionary of Justice League
justice_league_members = [
    {"superhero": "Aquaman", "real_name": "Arthur Curry"},
    {"superhero": "Batman", "real_name": "Bruce Wayne"},
    {"superhero": "Cyborg", "real_name": "Victor Stone"},
    {"superhero": "Flash", "real_name": "Barry Allen"},
    {"superhero": "Green Lantern", "real_name": "Hal Jordan"},
    {"superhero": "Superman", "real_name": "Clark Kent Kal-El"},
    {"superhero": "Wonder Woman", "real_name": "Princess Diana"}
]

#################################################
# Flask Setup
#################################################
# @TODO: Initialize your Flask app here
# YOUR CODE GOES HERE
app = Flask(__name__)

#################################################
# Flask Routes
@app.route("/", methods=['GET']) # don't necessarily have to specify GET here, it's the default
def index():
    return "Welcome to the JLA API"

@app.route("/api/v1.0/justice-league", methods=['GET'])
def jla():
    return jsonify(members=justice_league_members)
#################################################

# @TODO: Complete the routes for your app here
# YOUR CODE GOES HERE

if __name__ == "__main__":
    app.run()
