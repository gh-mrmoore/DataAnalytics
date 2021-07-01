from flask import Flask, render_template, redirect
from flask_pymongo import PyMongo, MongoClient
import scrape_costa

# Create an instance of Flask
app = Flask(__name__)

# Use PyMongo to establish Mongo connection
# mongo = PyMongo(app, uri="mongodb://localhost:27017/weather_app")
# alternative below as provided in class on 30 June.
mongo = MongoClient("mongodb://localhost:27017/inclass_weather")

# Route to render index.html template using data from Mongo
@app.route("/")
def home():

    # Find one record of data from the mongo database
    destination_data = mongo.db.inclass_weather.find_one()

    # Return template and data
    return render_template("index.html", vacation=destination_data)


# Route that will trigger the scrape function
@app.route("/scrape")
def scrape():

    # Run the scrape function and save the results to a variable
    scraped_site = scrape_costa.scrape_info()

    # Update the Mongo database using update and upsert=True
    weather = mongo.db.inclass_weather
    weather.update({}, scraped_site, upsert=True)
    return redirect('/', code=302)

    # Redirect back to home page
    return redirect("/")


if __name__ == "__main__":
    app.run(debug=True)
