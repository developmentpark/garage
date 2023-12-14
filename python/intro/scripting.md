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
