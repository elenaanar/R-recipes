from bs4 import BeautifulSoup as bs
import subprocess

class Recipe:
    def __init__(self):
        self.img_url = ''
        self.url = ''
        self.title = ''
        self.desc = ''   
        self.ingredients = ''
        self.tags = ''




output = subprocess.run("ls -ltr recipes/*.html | cut -d ' ' -f 9", capture_output=True, shell=True, text=True)
recipes = [item for item in str(output.stdout).split()]

for recipe in recipes[0:1]:
    with open(recipe, 'r', encoding='UTF-8') as inputFile:
        current_recipe = Recipe()
        url = subprocess.run("head -n 1 %s" % (recipe[:-5] + ".txt"), shell=True, capture_output=True)
        current_recipe.url = str(url.stdout)[2:-3]
        print(current_recipe.url)

        page_content = inputFile.read()
        soup = bs(page_content, 'lxml')
        item_wrappers = soup.find_all('h1', class_='comp type--lion article-heading mntl-text-block')
        title = (str(item_wrappers[0]).split('>')[1][:-4])
        current_recipe.title = title
        print(current_recipe.title)

        image = soup.find('img')
        # for image in item_images:
        try:
            current_recipe.img_url = (image['src'])
        except KeyError:
            current_recipe.img_url = (image['data-src'])
        except:
            print("COULD NOT GRAB IMAGE FOR {}".format(current_recipe.title))
        print(current_recipe.img_url)

        desc = str(soup.find('p', class_='comp type--dog article-subheading').text)
        current_recipe.desc = desc
        print(current_recipe.desc)





