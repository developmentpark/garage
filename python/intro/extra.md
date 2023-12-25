## Iterators and Generators

- **iterator** is an object that represents a stream of data

- **Generators** are a simple way to create iterators using functions.

```python
def my_range(x):
    i = 0
    while i < x:
        yield i #This allows the function to return values one at a time
        i += 1


for x in my_range(5):
    print(x)
```

```python
def generador_simple():
    yield 1
    yield 2
    yield 3

mi_iterador = generador_simple()

next(mi_iterador, None)
```

Generators are a lazy way to build iterables. They are useful when the fully realized list would not fit in memory, or when the cost to calculate each list element is high and you want to do it as late as possible.
https://softwareengineering.stackexchange.com/questions/290231/when-should-i-use-a-generator-and-when-a-list-in-python/290235

```python
def chunker(iterable, size):
    """Yield successive chunks from iterable of length size."""
    for i in range(0, len(iterable), size):
        yield iterable[i:i + size]

for chunk in chunker(range(21), 5):
    print(list(chunk))

Output:

[0, 1, 2, 3, 4]
[5, 6, 7, 8, 9]
[10, 11, 12, 13, 14]
[15, 16, 17, 18, 19]
[20]
```

## Generator Expressions

write a list comprehension, except with parentheses instead of square brackets

```python
sq_iterator = (x**2 for x in range(10))  # this produces an iterator of squares
```
