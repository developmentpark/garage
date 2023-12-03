# Intro Python

## Data Types and Operators

- Data Types: Integers, Floats, Booleans, Strings
- Operators: Arithmetic, Assignment,
  ```python
    % Mod
    ** Exponentiation
    // Divides and rounds down to the nearest integer
  ```

+-------------------------------------------------------+
| Precedencia | Operadores |
+-------------------------------------------------------+
| 1 | () |
| 2 | f(args...), x[index], x.attribute |
| 3 | ** |
| 4 | +x, -x, ~x |
| 5 | \*, /, //, % |
| 6 | +, - |
| 7 | <<, >> |
| 8 | & |
| 9 | ^ |
| 10 | | |
| 11 | in, not in, is, is not, <, <=, >, >=, !=, ==|
| 12 | not x |
| 13 | and |
| 14 | or |
| 15 | if-else |
+-------------------------------------------------------+
**Bitwise\*\* operators, treat number as if it were a string of bits
https://wiki.python.org/moin/BitwiseOperators

- Comparison, Logical

  ```python

  ```

- **Built-In** Functions, Type Conversion
  ```python
  print(3+5)
  ```
- Whitespace and Style Guidelines

### Variables and Assignment Operators

equivalent:
x = 3
y = 4
z = 5

and
x, y, z = 3, 4, 5

#### keywords

False await else import pass
None break except in raise
True class finally is return
and continue for lambda try
as def from nonlocal while
assert del global not with
async elif if or yield

**convencion**: snake_case

**scientific notation**: 4.445e8 = 4 _ 445 _ 10 \*\* 8

#### Interger and Float

two data type used for numeric values.

```python
x = int(4.7)   # x is now an integer 4
y = float(4)   # y is now a float of 4.0
>>> print(type(x)) #check the type
int
>>> print(type(y))
float
```

**PEP 8 – Style Guide for Python Code**
https://peps.python.org/pep-0008/

**Python only prints a decimal approximation to the true decimal**

```python
>>> print(.1 + .1 + .1 == .3)
False
0.30000000000000004
```

**divide by zero**

```python
>>> print(5/0)
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
ZeroDivisionError: division by zero

```

**boolean**
and, or, not.

### String

type **str**, define with **"** or **'**

```python
this_string = 'Simon\'s skateboard is in the garage.'
my_string2 = "this is also a string!!!"

>>> first_word = 'Hello'
>>> print(first_word * 5)
HelloHelloHelloHelloHello

>>> print(len(first_word))
5
>>> first_word[0]
H

>>> len(233)
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: object of type 'int' has no len()

```

### Type and Type Conversion

```python
>>> print(type(633))
int
>>> print(type(633.0))
float
>>> print(type('633'))
str
>>> print(type(True))
bool

"0" + "5"
0 + 5
>>> "0" + 5
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: can only concatenate str (not "int") to str
>>> "0" +" 5"


house_number = 13
street_name = "The Crescent"
town_home = "Belmont"
print(type(house_name)) # <class 'int'="">

address = str(house_number + " " + street_name + ", " + town_name
print(address) # 13 The Crescent, Belmont


ex:
weekly_sales = int(mon_sales) + int(tues_sales) + int(wed_sales) + int(thurs_sales) + int(fri_sales)
weekly_sales = str(weekly_sales)  #convert the type back!!
print("This week's total sales: " + weekly_sales)
```

### String Methods.

```python
>>> my_string.islower()
True
>>> my_string.count('a')
2
>>> my_string.find('a')
3
python pep_string = "Pep loves {} and {}"
print(maria_string.format("math", "statistics"))

new_str = "The cow jumped over the moon."
new_str.split()
['The', 'cow', 'jumped', 'over', 'the', 'moon.']

new_str.split(' ', 3)#maxsplit argument is set to 3
['The', 'cow', 'jumped', 'over the moon.']

new_str.split(None, 3) #no separators but having a maxsplit argument of 3
['The', 'cow', 'jumped', 'over the moon.']



```

#### Common Error Message

**ZeroDivisionError**

**SyntaxError**
