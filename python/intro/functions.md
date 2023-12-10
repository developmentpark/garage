## Functions

```python
def cylinder_volume(height, radius):
    pi = 3.14159
    return height  *pi*  radius ** 2

cylinder_volume(10, 3)

#default args
def cylinder_volume(height, radius=5):
    pi = 3.14159
    return height  *pi*  radius ** 2

cylinder_volume(10, 7)  # pass in arguments by position
cylinder_volume(height=10, radius=7)  # pass in arguments by name


```

### Variable Scope

Variable scope refers to which **parts of a program** a variable can be referenced, or used, from.

```python
#Here, word is said to have a global scope.
word = "hello"

#global variable can not be __modified__ inside the function
#If you want to modify that variable's value inside this function, it should be passed in as an argument
def some_function():
    print(word)

some_function()

egg_count = 0
def buy_eggs():
    egg_count += 12 # purchase a dozen eggs
buy_eggs() #UnboundLocalError

egg_count = 0

def buy_eggs(count):
    return count + 12  # purchase a dozen eggs
egg_count = buy_eggs(egg_count)
```

## Documentation

used to make your code easier to understand and use

```python
def population_density(population, land_area):
    """Calculate the population density of an area.

    INPUT:
    population: int. The population of that area
    land_area: int or float. This function is unit-agnostic, if you pass in values in terms
    of square km or square miles the function will return a density in those units.

    OUTPUT:
    population_density: population / land_area. The population density of a particular area.
    """
    return population / land_area
```

### Lambda Expressions

to create anonymous functionsthat aren’t needed later in your code.

useful for higher order functions, or functions that take in other functions as arguments.

```python
multiply = lambda x, y: x * y
multiply(4, 7)#28
```

#### map

map() is a higher-order built-in function.

takes a function and iterable as inputs, and returns an iterator that applies the function to each element of the iterable.

```python
numbers = [
              [34, 63, 88, 71, 29],
              [90, 78, 51, 27, 45],
              [63, 37, 85, 46, 22],
              [51, 22, 34, 11, 18]
           ]

averages = list(map(lambda x: sum(x) / len(x), numbers))
print(averages)#[57.0, 58.2, 50.6, 27.2]
```

##### filter

filter() is a higher-order built-in function.
takes a function and iterable as inputs and returns an iterator with the elements from the iterable for which the function returns True.

```python
cities = ["New York City", "Los Angeles", "Chicago", "Mountain View", "Denver", "Boston"]

short_cities = list(filter(lambda x: len(x) < 10, cities))
print(short_cities) #['Chicago', 'Denver', 'Boston']
```
