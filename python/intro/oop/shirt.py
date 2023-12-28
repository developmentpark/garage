from clothing import Clothing

class Shirt(Clothing):
    """The Shirt class represents an article of clothing sold in a store
    """

    def __init__(self, color, size, style, price, long_or_short):
        """Method for initializing a Shirt object

        Args:
            color (str)
            size (int)
            price (float)

        Attributes:
            color (str): color of a shirt object
            size (str): size of a shirt object
            price (float): price of a shirt object
        """
        Clothing.__init__(self, color, size, style, price)
        self.long_or_short = long_or_short

    def double_price(self):
        self.price = self.price * 2

