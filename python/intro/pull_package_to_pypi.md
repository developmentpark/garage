```bash
cd my_package_to_pypi
python setup.py sdist
# or
# python3 setup.py sdist bdist_wheel
# you will get both a .tar.gz file and a .whl file.
# .whl file is a newer type of installation file for Python packages
# pip will first look for a .whl

pip install twine

# commands to upload to the pypi test repository
twine upload --repository-url https://test.pypi.org/legacy/ dist/*
# install from pypi test repository
pip install --index-url https://test.pypi.org/simple/ stats_gaussian_binomial

# command to upload to the pypi repository
twine upload dist/*
# install from pypi repository
pip install stats_gaussian_binomial

```
