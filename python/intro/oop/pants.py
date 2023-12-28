from clothing import Clothing

class Pants(Clothing):
    def __init__(self, color, size, style, price, waist):
        Clothing.__init__(self, color, size, style, price)
        self.waist = waist

    def discount(self, discount):
        return self.price * (1 - discount / 2)