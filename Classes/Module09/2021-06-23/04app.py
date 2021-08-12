# 1. Import Flask
from flask import Flask

# 2. Create an app
app = Flask(__name__)

# 3. Define index route
@app.route("/")
def index():
    return "Welcome"

# 4. Define the about route
@app.route("/about")
def about():
    return "About"

# 5. Define the contact route
@app.route("/contact")
def contact():
    return "Contact"

# 6. Define main behavior
if __name__ == '__main__':
    app.run()