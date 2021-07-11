from sys import executable
from flask import Flask, render_template, redirect, url_for, request
from flask_pymongo import PyMongo, MongoClient
import scraping

app = Flask(__name__)

# Connect to Mongo DB
mongo = MongoClient("mongodb://localhost:27017/mars_challenge_app")

@app.route("/", methods=['GET'])
def index():
    mars = mongo.db.mars.find_one()
    # print(mars)

    return render_template("index.html", mars=mars)

@app.route("/scrape", methods=['GET'])
def scrape():
    mars = mongo.db.mars
    mars_data = scraping.scrape_all()
    mars.update({}, mars_data, upsert=True)
    return redirect('/', code=302)

if __name__ == "__main__":
    app.run()