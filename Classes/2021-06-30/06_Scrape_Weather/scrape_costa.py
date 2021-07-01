from splinter import Browser
from bs4 import BeautifulSoup as bs
import time

from webdriver_manager.chrome import ChromeDriverManager


def init_browser():
    # @NOTE: Replace the path with your actual path to the chromedriver
    # executable_path = {"executable_path": "/usr/local/bin/chromedriver"}
    # return Browser("chrome", **executable_path, headless=False)
    exe_path = {'executable_path': ChromeDriverManager().install()}
    return Browser("chrome", **exe_path, headless=False)



def scrape_info():
    browser = init_browser()

    # Visit visitcostarica.herokuapp.com
    url = "https://visitcostarica.herokuapp.com/"
    browser.visit(url)

    time.sleep(1)

    # Scrape page into Soup
    html = browser.html
    soup = bs(html, "html.parser")

    # Get the average temps
    weather_temps = soup.find_all('strong')

    # Get the min avg temp
    min_avg_temp = weather_temps[1].text

    # Get the max avg temp
    max_avg_temp = weather_temps[2].text

    # BONUS: Find the src for the sloth image
    sloth_img = soup.find_all('img', class_='img-fluid animals')[1]['src']
    sloth_url = f"https://visitcostarica.herokuapp.com/{sloth_img}"

    # Store data in a dictionary
    costa_data = {
        "sloth_img": sloth_url,
        "min_temp": min_avg_temp,
        "max_temp": max_avg_temp
    }

    # Quite the browser after scraping
    browser.quit()

    # Return results
    return costa_data
