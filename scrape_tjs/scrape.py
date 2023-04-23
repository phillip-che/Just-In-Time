import requests
from bs4 import BeautifulSoup

url = 'https://www.traderjoes.com/home/products/category/food-8'
response = requests.get(url)

soup = BeautifulSoup(response.content, 'html.parser')
foods = soup.find_all('img', {'class': 'ProductCard_card__cover__19-g3'})
print(soup)
for item in foods:
    print(item)
