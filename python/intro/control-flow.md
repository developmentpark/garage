## if

```python
if phone_balance < 5:
    phone_balance += 10
    bank_balance -= 10

if season == 'spring':
    print('plant the garden!')
elif season == 'summer':
    print('water the garden!')
elif season == 'fall':
    print('harvest the garden!')
elif season == 'winter':
    print('stay indoors!')
else:
    print('unrecognized season')
```

The [Python Style Guide](https://www.python.org/dev/peps/pep-0008/#tabs-or-spaces) recommends using 4 spaces to indent

- Don't use True or False as conditions

- Be careful writing expressions that use logical operators

  ```python
  ## Bad example
    if weather == "snow" or "rain":
        print("Wear boots!")
  ```

- Don't compare a boolean variable with == True or == False

### Truth Value Testing

non-boolean object as a condition in an if, Python will check for its truth value

built-in objects that are **considered False**:

- constants defined to be false: None and False
- zero of any numeric type: 0, 0.0, 0j, Decimal(0), Fraction(0, 1)
- empty sequences and collections: '"", (), [], {}, set(), range(0)

```python
True < 0 #False
True > 0 #True
True < 1 #False
```

## For Loops

has two kinds of loops - **for** loops over an iterable, and **while** loops

```python
cities = ['new york city', 'mountain view', 'chicago', 'los angeles']
for city in cities:
    print(city)
print("Done!")
```

### range() Function

create an iterable sequence of numbers

```python
for i in range(3):
    print("Hello!")

range(start=0, stop, step=1)
range(stop)
range(start, stop)
```

### Modifying Lists

```python
cities = ['new york city', 'mountain view', 'chicago', 'los angeles']

for index in range(len(cities)):
    cities[index] = cities[index].title()
```

### frequency dictionary

```python
book_title =  ['great', 'expectations','the', 'adventures', 'of', 'sherlock','holmes','the','great','gasby','hamlet','adventures','of','huckleberry','fin']

#Method 1:
for word in book_title:
        if word not in word_counter:
            word_counter[word] = 1
        else:
            word_counter[word] += 1``


#Method 2:
for word in book_title:
    word_counter[word] = word_counter.get(word, 0) + 1


```

### Iterating Dictionaries

```python
cast = {
           "Jerry Seinfeld": "Jerry Seinfeld",
           "Julia Louis-Dreyfus": "Elaine Benes",
           "Jason Alexander": "George Costanza",
           "Michael Richards": "Cosmo Kramer"
       }


for key in cast:
    print(key)

#items() returns tuples of key, value pairs
for key, value in cast.items():
    print("Actor: {}    Role: {}".format(key, value))
```

## While Loops

"indefinite iteration" ends when some condition is met

```python
card_deck = [4, 11, 8, 5, 13, 2, 8, 10]
hand = []

while sum(hand)  < 17:
    hand.append(card_deck.pop())
```

- hash() construye la identidad de un objeto.
  En Python, todos los valores son objetos: int float

## Zip

creates an iterable of tuples that combine several iterables, each tuple is formed with the elements of the iterables in the same position.

```python
letters = ['a', 'b', 'c']
nums = [1, 2, 3]

for letter, num in zip(letters, nums):
    print("{}: {}".format(letter, num))
#[('a', 1), ('b', 2), ('c', 3)]

#unzip
some_list = [('a', 1), ('b', 2), ('c', 3)]
letters, nums = zip(*some_list)
```

## Enumerate

crea un iterable de tuplas (index, value)

```python
letters = ['a', 'b', 'c', 'd', 'e']
for i, letter in enumerate(letters):
    print(i, letter)
#0 a
#1 b
#2 c
#3 d
#4 e
```

## List Comprehensions

create lists really quickly and concisely

```python
capitalized_cities = [city.title() for city in cities]
```

### Conditionals in List Comprehensions

```python
squares = [x**2 for x in range(9) if x % 2 == 0]

#If you would like to add else
squares = [x**2 if x % 2 == 0 else x + 3 for x in range(9)]
```
