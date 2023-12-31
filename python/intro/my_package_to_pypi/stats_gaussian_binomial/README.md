# stats_gaussian_binomial

stats_gaussian_binomial is a Python package which provides tools for manipulating Gaussian and Binomial distributions. This project was developed as part of the challenge to obtain a scholarship from Udacity for the AI Nanodegree programming with Python Nanodegree program, sponsored by Bertelsmann.

## Key Features

Include statistical calculations for mean and standard deviation, data handling through file reading, probability density and mass functions, data visualization with histograms and charts, as well as support for arithmetic operations between distributions.

## Installation

```bash
pip install stats_gaussian_binomial
```

## Usage

```python
from stats_gaussian_binomial import Gaussian, Binomial

# Create a Gaussian distribution
gaussian_distribution = Gaussian(mu=0, sigma=1)

# Calculate mean and standard deviation
mean = gaussian_distribution.calculate_mean()
stdev = gaussian_distribution.calculate_stdev()

# Create a Binomial distribution
binomial_distribution = Binomial(prob=0.5, size=20)

# Calculate mean and standard deviation
mean_binomial = binomial_distribution.calculate_mean()
stdev_binomial = binomial_distribution.calculate_stdev()

# Visualize histograms and probability density functions
gaussian_distribution.plot_histogram_pdf()
binomial_distribution.plot_bar_pdf()

```

## License

This project is distributed under the MIT license. See the LICENSE file for more details.
