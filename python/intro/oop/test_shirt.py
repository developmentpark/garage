from shirt import Shirt

new_shirt = Shirt("red", "L", "30")

print(new_shirt)

print(new_shirt.price)
new_shirt.set_price(47)
print(new_shirt.price)

print(new_shirt.discount(0.8))