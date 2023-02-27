# Day 25 of 30 Days Of Paython - Pandas

import pandas as pd # importing pandas as pd
import numpy  as np # importing numpy as np


nums = [1, 2, 3, 4,5]
s = pd.Series(nums)
print(s)





data = [
    ['Asabeneh', 'Finland', 'Helsink'], 
    ['David', 'UK', 'London'],
    ['John', 'Sweden', 'Stockholm']
]
df = pd.DataFrame(data, columns=['Names','Country','City'])
print(df)



data = {'Name': ['Asabeneh', 'David', 'John'], 'Country':[
    'Finland', 'UK', 'Sweden'], 'City': ['Helsiki', 'London', 'Stockholm']}
df = pd.DataFrame(data)
print(df)



data = [
    {"Name": "Asabeneh", "Country":"Finland","City":"Helsinki"},
    {"Name": "David", "Country":"UK","City":"London"},
    {"Name": "John", "Country":"Sweden","City":"Stockholm"}]
df = pd.DataFrame(data)
print(df)


#Creating a DataFrame
heights = [173, 175, 169]
df['Height'] = heights
print(df)
#Adding a New Column
weights = [74, 78, 69]
df['Weight'] = weights
df
df['Height'] = df['Height'] * 0.01
df
# Using functions makes our code clean, but you can calculate the bmi without one
def calculate_bmi ():
    weights = df['Weight']
    heights = df['Height']
    bmi = []
    for w,h in zip(weights, heights):
        b = w/(h*h)
        bmi.append(b)
    return bmi
    
bmi = calculate_bmi()




