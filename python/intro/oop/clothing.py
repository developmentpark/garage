class Clothing:
    def __init__(self, color, size, style, price):
        self.color = color
        self.size = size
        self.style = style
        self.price = price

    def get_price(self):
        return self.price
    
    def set_price(self, new_price):
        self.price = new_price
        return None

    def discount(self, discount):
        assert 0 < discount < 1
        return self.price * (1 - discount)