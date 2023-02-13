# Day 24 of 30 Days Of Paython - Statistics

# How to import numpy
import numpy as np
# How to check the version of the numpy package
print('numpy:', np.__version__)
# Checking the available methods
print(dir(np))


#Creating python List
python_list = [1,2,3,4,5]
#Checking data types
print('Type:', type (python_list)) #<class 'list'>

print(python_list) #[1, 2, 3, 4, 5]
two_dimensional_list = [[0,1,2], [3,4,5], [6,7,8]]
print(two_dimensional_list) #[[0, 1, 2], [3, 4, 5], [6, 7, 8]]
#Creating Numpy(Numerical Python) array from python list
numpy_array_from_list = np.array(python_list)
print(type (numpy_array_from_list)) #<class 'numpy.ndarray'>
print(numpy_array_from_list) #array([1, 2, 3, 4, 5])

#Creating multidimensional array using numpy
two_dimensional_list = [[0,1,2], [3,4,5], [6,7,8]]
numpy_two_dimensional_list = np.array(two_dimensional_list)
print(type (numpy_two_dimensional_list))
print(numpy_two_dimensional_list)

np_to_list = numpy_array_from_list.tolist()
print(type (np_to_list))
print('one dimensional array:', np_to_list)
print('two dimensional array:', numpy_two_dimensional_list.tolist())

# Numpy array from tuple
# Creating tuple in Python
python_tuple = (1,2,3,4,5)
print(type (python_tuple)) # <class 'tuple'>
print('python_tuple: ', python_tuple) # python_tuple:  (1, 2, 3, 4, 5)

numpy_array_from_tuple = np.array(python_tuple)
print(type (numpy_array_from_tuple)) # <class 'numpy.ndarray'>
print('numpy_array_from_tuple: ', numpy_array_from_tuple) # numpy_array_from_tuple:  [1 2 3 4 5]


