# Day 22 of 30 Days Of Paython - Web Scraping
import requests
from bs4 import BeautifulSoup
import json
import pandas as pd




url = 'https://archive.ics.uci.edu/ml/datasets.php'

# Lets use the requests get method to fetch the data from url

response = requests.get(url)
# lets check the status
status = response.status_code
print(status) # 200 means the fetching was successful




url = 'https://archive.ics.uci.edu/ml/datasets.php'
url2 ='https://archive.ics.uci.edu/ml/datasets.php'

response = requests.get(url2)
content = response.content # we get all the content from the website
soup = BeautifulSoup(content, 'html.parser') # beautiful soup will give a chance to parse
print(soup.title) # <title>UCI Machine Learning Repository: Data Sets</title>
print(soup.title.get_text()) # UCI Machine Learning Repository: Data Sets
print(soup.body) # gives the whole page on the website
print(response.status_code)

tables = soup.find_all('table', {'cellpadding':'3'})
# We are targeting the table with cellpadding attribute with the value of 3
# We can select using id, class or HTML tag , for more information check the beautifulsoup doc
table = tables[0] # the result is a list, we are taking out data from it
for td in table.find('tr').find_all('td'):
    print(td.text)

data = [] # creating a list to store the data
for tr in table.find_all('tr'):
        td_list = []
        for td in tr.find_all('td'):
            td_list.append(td.text)
            data.append(td_list)

with open("./hello_python/files/data.json", "w") as file:
    json.dump(data, file)


""" Note: To create the excel file, the following modules must be installed: openpyxl y xlsxwriter
 pip install openpyxl
 pip install xlsxwriter
"""
# Writing the data to a pandas dataframe
""" df = pd.DataFrame(data) """

# Exporting the dataframe to a excel file
""" df.to_excel("./hello_python/files/data.xlsx", index=False) """



















