from shirt import Shirt
from pants import Pants

new_shirt = Shirt("red", "L","AA", 30, "long")

print(new_shirt)

print(new_shirt.price)
new_shirt.set_price(47)
print(new_shirt.price)

print(new_shirt.discount(0.8))


new_pants= Pants("black", "L", "BB", 50, "10")
print(new_pants.discount(0.8))