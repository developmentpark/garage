## List

```python
#
list_of_random_things = [1, 3.4, 'a string', True]
>>> list_of_random_things[0]
1



months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
print(months[0]) # January
print(months[1]) # February
print(months[7]) # August
print(months[-1]) # December
print(months[25]) # IndexError: list index out of range

```

#### Slice and Dice with Lists

```python
>>> list_of_random_things = [1, 3.4, 'a string', True]
>>> list_of_random_things[1:2]
[3.4]
>>> list_of_random_things[:2]
[1, 3.4]
>>> list_of_random_things[1:]
[3.4, 'a string', True]
```

#### **in** or **not in**

bool of whether an **element exists** within our list, or if one string **is a substring** of another

```python
>>> 'this' in 'this is a string'
True
>>> 'in' in 'this is a string'
True
>>> 'isa' in 'this is a string'
False
>>> 5 not in [1, 2, 3, 4, 6]
True
>>> 5 in [1, 2, 3, 4, 6]
False
```

# strings are immutable

to change a string, you will need to create a completely new string

```python
>>> greeting = "Hello there"
>>> greeting[0] = 'M'
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: 'str' object does not support item assignment
```

# Both strings and lists are ordered

We can use the order to access parts of a list and string

### List methods

```python
len()
max() returns the greatest element of the list.
min()
sorted() returns a copy of a list in order ascending.

join, #is a string method that takes a list of strings as an argument, and returns a string consisting of the list elements joined by a separator string.

new_str = "\n".join(["fore", "aft", "starboard", "port"])
print(new_str)


Output:
fore
aft
starboard
port

append method
letters = ['a', 'b', 'c', 'd']
letters.append('z')
print(letters) #['a', 'b', 'c', 'd', 'z']


```

## Tuples

- immutable ordered sequences of elements.
- can be accessed by their indices.
- you can't add and remove items from tuples, or sort them in place.

```python
#parentheses are optional
location = (13.4125, 103.866667)
print("Latitude:", location[0])
print("Longitude:", location[1])

dimensions = 52, 40, 100
#tuple unpacking.
length, width, height = dimensions
print("The dimensions are {} x {} x {}".format(length, width, height))

length, width, height = 52, 40, 100
print("The dimensions are {} x {} x {}".format(length, width, height))
```

## Sets

**mutable** **unordered** collections of **unique elements**.

```python
numbers = [1, 2, 6, 3, 1, 1, 6]
unique_nums = set(numbers)
print(unique_nums)#{1, 2, 3, 6}

# define a set
fruit = {"apple", "banana", "orange", "grapefruit"}

# check for element
print("watermelon" in fruit)  #False

# add an element
fruit.add("watermelon")
print(fruit)
#{'grapefruit', 'orange', 'watermelon', 'banana', 'apple'}

# remove a random element
print(fruit.pop()) # grapefruit

print(fruit)#{'orange', 'watermelon', 'banana', 'apple'}
```

## Dictionaries

unordered data structure
**mutable** data type that stores **mappings** of unique **keys** to **values**.
keys must be immutable

```python
elements = {"hydrogen": 1, "helium": 2, "carbon": 6}

# print the value mapped to "helium"
print(elements["helium"])


# insert "lithium" with a value of 3 into the dictionary
elements["lithium"] = 3

print("carbon" in elements)#True
print(elements.get("dilithium"))#None
#If you expect lookups to sometimes fail, get might be a better tool than normal square bracket lookups because errors can crash your program.


```

## Identity Operators

**==** compara que los valores sean iguales.

**is** compara que la identidad sea la misma (misma direccion)

```python
n = elements.get("dilithium")
print(n is None)#True
print(n is not None)#False
```
