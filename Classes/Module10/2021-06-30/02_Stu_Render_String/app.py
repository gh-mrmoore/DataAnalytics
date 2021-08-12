# import necessary libraries
from flask import Flask, render_template, request

# @TODO: Initialize your Flask app here
app = Flask(__name__)

# @TODO:  Create a route and view function that takes in a string and renders index.html template
@app.route("/", methods=['POST', 'GET'])
def index():
    if request.method == 'POST':
        text_string = request.form['text_string']
        
        return render_template('index.html', text_string = text_string)
    else:
        return render_template('index.html')

if __name__ == "__main__":
    app.run(debug=True)
