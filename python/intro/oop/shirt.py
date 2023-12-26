class Shirt:
    """The Shirt class represents an article of clothing sold in a store
    """

    def __init__(self, color, size, price):
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
        self.color = color
        self.size = size
        self.price = price

    def set_price(self, new_price):
        """The set_price method changes the price attribute of a shirt object

        Args: 
            new_price (float): the new price of the shirt object

        Returns: None

        """
        self.price = new_price
        return None

    def get_price(self):
        return self.price

    def discount(self, discount):
        """The discount method outputs a discounted price of a shirt object

        Args:
            percentage (float): a decimal representing the amount to discount

        Returns:
            float: the discounted price
        """
        assert 0 < discount < 1
        return self.price * (1 - discount)


