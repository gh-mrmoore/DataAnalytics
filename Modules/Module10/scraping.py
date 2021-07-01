from splinter import Browser
from bs4 import BeautifulSoup as soup
import pandas as pd
import datetime as dt
from webdriver_manager.chrome import ChromeDriverManager

def scrape_all():
    # initiate headless driver
    executable_path = {'executable_path': ChromeDriverManager().install()}
    browser = Browser('chrome', **executable_path, headless=True)

    news_title, news_p = mars_news(browser)

    # Run scraping and save to dictionary
    data = {'news_title': news_title,
            'news_paragraph': news_p,
            'feature_image': featured_image(browser),
            'facts': mars_facts(),
            'last_modified': dt.datetime.now()
            }
    
    # Stop webdriver and return data
    browser.quit()
    return data

def mars_news(browser):
    # Visit the nasa mars site
    url = 'https://redplanetscience.com'
    browser.visit(url)

    # Optional delay for loading the page
    # browser.is_element_present_by_css('div.list_text', wait_time=1)

    # Convert browser html to soup object
    html = browser.html
    news_soup = soup(html, 'html.parser')

    try:
        slide_elem = news_soup.select_one('div.list_text')
        slide_elem.find('div', class_='content_title')

        # User the parent element to find the first <a> tag
        news_title = slide_elem.find('div', class_='content_title').get_text()
    
        # user the parent element to find the paragraph text
        news_p = slide_elem.find('div', class_='article_teaser_body').get_text()
    except AttributeError:
        return None, None
    
    return news_title, news_p

def featured_image(browser):
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
    try:
        img_url_rel = img_soup.find('img', class_='fancybox-image').get('src')
    except AttributeError:
        return None

    # Set the base URL
    img_url = f'https://spaceimages-mars.com/{img_url_rel}'

    return img_url

def mars_facts():
    try:
        # use read_html to get table to dataframe
        df = pd.read_html('https://galaxyfacts-mars.com')[0]
    except BaseException:
        return None
    
    # Assign columns and set DF index
    df.columns=['Description', 'Mars', 'Earth']
    df.set_index('Description', inplace=True)
    
    return df.to_html()

if __name__ == "__main__":
    print(scrape_all())
