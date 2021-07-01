# import necessary libraries
from flask import Flask, render_template, request

# @TODO: Initialize your Flask app here
app = Flask(__name__)

# @TODO: Create a list of dictionaries
list_dicts = [{'name': 'Mike', 'breed': 'Dalmation'},
                 {'name': 'Mark', 'breed': 'Yorkshire Terrier'}, 
                 {'name': 'Mira', 'breed': 'Cocker Spaniel'}, 
                 {'name': 'Milo', 'breed': 'Irish Wolf Hound'}]

# @TODO:  Create a route and view function that takes in a dictionary and renders index.html template
@app.route("/", methods=['GET'])
def index():
    return render_template('index.html', ld=list_dicts)

if __name__ == "__main__":
    app.run(debug=True)
