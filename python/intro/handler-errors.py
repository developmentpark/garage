cookies = int(input("How many cookies are you baking? "))
people = int(input("How many people are attending? "))

try:
    cookies_each = cookies // people
    leftovers = cookies % people

    message = "\nLet's party! We'll have {} people attending, they'll each get to eat {} cookies, and we'll have {} left over."
    print(message.format(people, cookies_each, leftovers))

except ZeroDivisionError as e:
    print("ZeroDivisionError occurred: {}".format(e))
    print("bad input for people")
    print("Please enter a good number of people for a party.")

except (ValueError, KeyboardInterrupt):
    print("valueError or keyboardInterrupt")

except:
    print("Thats not a valid number.")

finally:
    print("Atempted Input")


#always exe
