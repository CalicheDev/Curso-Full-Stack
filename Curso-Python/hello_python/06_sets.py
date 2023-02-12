# Day 7 of 30 Days Of Paython - Sets

"""Set is a collection of items. Let me take you back to your elementary or high school 
Mathematics lesson. The Mathematics definition of a set can be applied also in Python. 
Set is a collection of unordered and un-indexed distinct elements. In Python set is used to 
store unique items, and it is possible to find the union, intersection, difference, symmetric 
difference, subset, super set and disjoint set among sets."""

# syntax
st = {}
# or
st = set()

# syntax
st = {'item1', 'item2', 'item3', 'item4'}

# syntax
fruits = {'banana', 'orange', 'mango', 'lemon'}

# syntax
st = {'item1', 'item2', 'item3', 'item4'}
len(st)

fruits = {'banana', 'orange', 'mango', 'lemon'}
len(fruits)

# syntax
st = {'item1', 'item2', 'item3', 'item4'}
print("Does set st contain item3? ", 'item3' in st) # Does set st contain item3? True


fruits = {'banana', 'orange', 'mango', 'lemon'}
print('mango' in fruits ) # True


# syntax
st1 = {'item1', 'item2', 'item3', 'item4'}
st2 = {'item2', 'item3'}
st2.issubset(st1) # True
st1.issuperset(st2) # True


whole_numbers = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
even_numbers = {0, 2, 4, 6, 8, 10}
whole_numbers.issubset(even_numbers) # False, because it is a super set
whole_numbers.issuperset(even_numbers) # True

python = {'p', 'y', 't', 'h', 'o','n'}
dragon = {'d', 'r', 'a', 'g', 'o','n'}
python.issubset(dragon)     # False















