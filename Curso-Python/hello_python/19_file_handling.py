# Day 19 of 30 Days Of Paython - File Handling


# Syntax
#open('filename', mode) # mode(r, a, w, x, t,b)  could be to read, write, update


f=open('./hello_python/files/reading_file_example.txt')
txt = f.read()
print(type(txt))
print(txt)
f.close()


f = open('./hello_python/files/reading_file_example.txt')
line = f.readline()
print(type(line))
print(line)
f.close()


import json
# JSON
person_json = '''{
    "name": "Asabeneh",
    "country": "Finland",
    "city": "Helsinki",
    "skills": ["JavaScrip", "React", "Python"]
}'''
# let's change JSON to dictionary
person_dct = json.loads(person_json)
print(type(person_dct))
print(person_dct)
print(person_dct['name'])


import xml.etree.ElementTree as ET
tree = ET.parse('./hello_python/files/xml_example.xml')
root = tree.getroot()
print('Root tag:', root.tag)
print('Attribute:', root.attrib)
for child in root:
    print('field: ', child.tag)
    




























