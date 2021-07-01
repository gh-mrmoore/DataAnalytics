# Import Dependencies
from splinter import Browser
from bs4 import BeautifulSoup as soup
from webdriver_manager.chrome import ChromeDriverManager
import pandas as pd

# Set up for the browser to run
executable_path = {'executable_path': ChromeDriverManager().install()}
browser = Browser('chrome', **executable_path, headless=False)

# Visit the mars nasa news site
url = 'https://redplanetscience.com'
browser.visit(url)
# optional delay for loading the page
browser.is_element_present_by_css('div.list_text', wait_time=1)

# get the page info
html = browser.html
news_soup = soup(html, 'html.parser')
slide_elem = news_soup.select_one('div.list_text')

# Begin scraping
slide_elem.find('div', class_='content_title')

# Find the first 'a' tag in the parent and save
news_title = slide_elem.find('div', class_='content_title').get_text()
news_title

# Get the article summary
news_summary = slide_elem.find('div', class_='article_teaser_body').get_text()
news_summary

# Featured Images

# Visit images url
url = 'https://spaceimages-mars.com'
browser.visit(url)

# Click on the 'full image' button
full_image_elem = browser.find_by_tag('button')[1]
full_image_elem.click()

# Parse the new page
html = browser.html
img_soup = soup(html, 'html.parser')

# Get relative img url
img_url_rel = img_soup.find('img', class_='fancybox-image').get('src')
img_url_rel

# Set the base URL
img_url = f'https://spaceimages-mars.com/{img_url_rel}'
img_url

# Mars Data
# DataFrame from table
df = pd.read_html('https://galaxyfacts-mars.com')[0]
df.columns = ['description', 'Mars', 'Earth']
df.set_index('description', inplace=True)
df

df.to_html()

browser.quit()