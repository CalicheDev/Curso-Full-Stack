# Day 22 of 30 Days Of Paython - Web Scraping

import requests
from bs4 import BeautifulSoup
import json
import pandas as pd

url = 'http://www.bu.edu/president/boston-university-facts-stats'
response = requests.get(url)
content = response.content
soup = BeautifulSoup(content, 'html.parser')

# Find the main content of the page
main_content = soup.find('section', {'class': 'facts-categories'})

# Extract all the data from the main content
data = []
for p in main_content.find_all('p'):
    data.append(p.text)


# Store the data as a JSON file
with open('./hello_python/files/data.json', 'w') as file:
    json.dump(data, file)


""" Note: To create the excel file, the following modules must be installed: openpyxl y xlsxwriter
 pip install openpyxl
 pip install xlsxwriter
"""
    # Writing the data to a pandas dataframe
df = pd.DataFrame(data)

# Exporting the dataframe to a excel file
df.to_excel("./hello_python/files/data.xlsx", index=False)