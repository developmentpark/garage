## Scripting

sequence of commands that perform specific tasks or automate processes.
stored in a plain text file with the extension .py

```python
#get raw input from the user with the built-in function input
num = int(input("Enter an integer"))
print("hello" * num)

#interpret user input as a Python expression
result = eval(input("Enter an expression: "))
print(result)


#ex: generate messages
names = input("Enter names separated by commas: ").title().split(",")
assignments = input("Enter assignment counts separated by commas: ").split(",")
grades = input("Enter grades separated by commas: ").split(",")

message = "Hi {},\n\nThis is a reminder that you have {} assignments left to \
submit before you can graduate. You're current grade is {} and can increase \
to {} if you submit all assignments before the due date.\n\n"

for name, assignment, grade in zip(names, assignments, grades):
    print(message.format(name, assignment, grade, int(grade) + int(assignment)*2))

```

### Error and Exceptions

- **Syntax errors**, when Python can’t interpret our code. static
- **Exceptions**, when unexpected things happen during execution. dynamic. many types:
  **ValueError**, correct type but inappropriate value is passed as input

  **AssertionError**, assert statement fails

  **IndexError**, is out of range

  **KeyError**, key can't be found in a dictionary

  **TypeError**, unsupported type is passed as input

- **TypeError** occurs when an **operation that is not valid for the data type** is performed.
- **ValueError** occurs when an argument with an **incorrect value** is passed to a

## Importing Local Scripts

```python
## useful_functions.py

def mean(num_list):
    return sum(num_list) / len(num_list)

def add_five(num_list):
    return [n + 5 for n in num_list]

#only executed when the main program is called
def main():
    print("Testing mean function")
    n_list = [34, 44, 23, 46, 12, 24]
    correct_mean = 30.5
    assert(mean(n_list) == correct_mean)

    print("Testing add_five function")
    correct_list = [39, 49, 28, 51, 17, 29]
    assert(add_five(n_list) == correct_list)

    print("All tests passed!")

if __name__ == '__main__':
    main()

```

```python

## useful_functions.py

def mean(num_list):
    return sum(num_list) / len(num_list)

def add_five(num_list):
    return [n + 5 for n in num_list]

def main():
    print("Testing mean function")
    n_list = [34, 44, 23, 46, 12, 24]
    correct_mean = 30.5
    assert(mean(n_list) == correct_mean)

    print("Testing add_five function")
    correct_list = [39, 49, 28, 51, 17, 29]
    assert(add_five(n_list) == correct_list)

    print("All tests passed!")

if __name__ == '__main__':
    main()
```

- python libraries organized into modules https://pymotw.com/3/

```js
    csv: very convenient for reading and writing csv files
    collections: useful extensions of the usual data types including OrderedDict, defaultdict and namedtuple
    random: generates pseudo-random numbers, shuffles sequences randomly and chooses random items
    string: more functions on strings. This module also contains useful collections of letters like string.digits (a string containing all characters which are valid digits).
    re: pattern-matching in strings via regular expressions
    math: some standard mathematical functions
    os: interacting with operating systems
    os.path: submodule of os for manipulating path names
    sys: work directly with the Python interpreter
    json: good for reading and writing json files (good for web work)
```

### Techniques for Importing Modules

````python
from module_name import object_name

from module_name import first_object, second_object

import module_name as new_name

from module_name import object_name as new_name

from module_name import *
    ```
    6. If you really want to use all of the objects from a module, use the standard import module_name statement instead and access each of the objects with the dot notation.
    ```python
import module_name
````

### Packages

A package is simply a module that contains sub-modules

```python
import package_name.submodule_name
```

### Third-Party Libraries

- Install using pip `pip install package_name`
- For easy sharing of packages list a project's dependencies in a file called requirements.txt. and install with `pip install -r requirements.txt`

```java
//requirements.txt
beautifulsoup4==4.5.1
bs4==0.0.1
pytz==2016.7
requests==2.11.1
```

```cmd
    IPython - A better interactive Python interpreter
    requests - Provides easy to use methods to make web requests. Useful for accessing web APIs.
    Flask - a lightweight framework for making web applications and APIs.
    Django - A more featureful framework for making web applications.
    Django is particularly good for designing complex, content heavy, web applications.
    Beautiful Soup - Used to parse HTML and extract information from it. Great for web scraping.
    pytest - extends Python's builtin assertions and unittest module.
    PyYAML - For reading and writing YAML files.
    NumPy - The fundamental package for scientific computing with Python.
    It contains among other things a powerful N-dimensional array object and useful linear algebra capabilities.
    pandas - A library containing high-performance, data structures and data analysis tools.
    In particular, pandas provides dataframes!
    matplotlib - a 2D plotting library which produces publication
    quality figures in a variety of hardcopy formats and interactive environments.
    ggplot - Another 2D plotting library, based on R's ggplot2 library.
    Pillow - The Python Imaging Library adds image processing capabilities to your Python interpreter.
    pyglet - A cross-platform application framework intended for game development.
    Pygame - A set of Python modules designed for writing games.
    pytz - World Timezone Definitions for Python
```

### IPython

alternative to the default Python interactive interpreter

- tab completion
- ? for details about an object
- ! to execute system shell commands
- syntax highlighting!
  https://ipython.org/ipython-doc/3/interactive/tutorial.html
