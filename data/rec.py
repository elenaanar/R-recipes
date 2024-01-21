from bs4 import BeautifulSoup as bs
from csv import DictWriter
import subprocess

CSV_PATH = "data.csv"

class Recipe:

    

    def __init__(self):
        self.img_url = ''
        self.url = ''
        self.title = ''
        self.desc = ''   
        self.ingredients = []
        self.tag = ''

    def print_info(self):
        print("Recipe: %s\n URL: %s\n Desc: %s\n Ingredients: %s\n Tag: %s \n" % (self.title, self.url, self.desc, self.ingredients, self.tag))

    def write_data(self, PATH):
        print("Writing data for: %s" % self.title)
        fields = ['Title', 'URL', 'IMG_URL', 'Desc', 'Ingredients', 'Tag']
        rec_dict = {'Title': self.title,
                    'URL':          self.url, 
                    'IMG_URL':      self.img_url, 
                    'Desc':         self.desc,
                    'Ingredients':  self.ingredients, 
                    'Tag':          self.tag}
        with open(PATH, 'a') as output:
            writer = DictWriter(output, fieldnames=fields)
            writer.writerow(rec_dict)
            output.close()

output = subprocess.run("ls -ltr recipes/*.html | cut -d ' ' -f 9", capture_output=True, shell=True, text=True)
recipes = [item for item in str(output.stdout).split()]

for recipe in recipes:
    with open(recipe, 'r', encoding='UTF-8') as inputFile:
        current_recipe = Recipe()
        url = subprocess.run("head -n 1 %s" % (recipe[:-5] + ".txt"), shell=True, capture_output=True)
        current_recipe.url = str(url.stdout)[2:-3]
        #print(current_recipe.url)

        page_content = inputFile.read()
        soup = bs(page_content, 'lxml')
        item_wrappers = soup.find_all('h1', class_='comp type--lion article-heading mntl-text-block')
        title = (str(item_wrappers[0]).split('>')[1][:-4])
        current_recipe.title = title
        #print(current_recipe.title)

        image = soup.find('img')
        # for image in item_images:
        try:
            current_recipe.img_url = (image['src'])
        except KeyError:
            current_recipe.img_url = (image['data-src'])
        except:
            print("COULD NOT GRAB IMAGE FOR {}".format(current_recipe.title))
        #print(current_recipe.img_url)

        desc = str(soup.find('p', class_='comp type--dog article-subheading').text)
        current_recipe.desc = desc
        #print(current_recipe.desc)

        try:
            ingred = soup.find_all('li', class_='mntl-structured-ingredients__list-item')
            ingred = str(ingred).split("<")
            ing = []
            [ing.append(item) for item in ingred if len(item) > 15]
            ing_names = [(item.split()[1:]) for item in ing if item.split()[0] == "span"]

            ingredients = []

            for item in ing_names:
                if (item[0].split("=")[0] == 'data-ingredient-name'):
                    item[0] = item[0][28:]
                    ingredients.append(' '.join(item))
            
            current_recipe.ingredients = ingredients
            # print(current_recipe.ingredients)

        except:
            print("No ingredients! This must not be food")
            continue

        try:
            tag = soup.find('a', id='mntl-text-link_2-0-3')
            current_recipe.tag = str(tag.text)
            #print(current_recipe.tag)
        except AttributeError:
            current_recipe.tag = 'null'
        except:
            print("No tags could be find for %s, and got error besides AttributeError. Wtf?" % current_recipe.title)

        # current_recipe.print_info()
        current_recipe.write_data(CSV_PATH)
