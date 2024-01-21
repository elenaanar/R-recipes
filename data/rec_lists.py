from bs4 import BeautifulSoup as bs
import subprocess
import random

def get_items(list):
    item_count = 0
    for item in list:
        subprocess.run("wget -O list_page_files/recipe_list_%d.html %s" % (item_count, list[item_count]), shell=True)
        item_count += 1

def recipe_lists(lower_bound, upper_bound):
    output = subprocess.run("ls -ltr list_page_files/ | cut -d ' ' -f 9", capture_output=True, shell=True, text=True)
    FILE_DIR = 'list_page_files/'
    lists = [item for item in str(output.stdout).split()]
    for html_file in lists[lower_bound:upper_bound]:
        print(FILE_DIR + html_file)
        with open ((FILE_DIR + html_file), 'r', encoding='UTF-8') as inputFile:
            page_content = inputFile.read()
            soup = bs(page_content, 'lxml')
            item_wrappers = soup.find_all('a', class_='comp mntl-card-list-items mntl-document-card mntl-card card card--no-image')
            recipe_links = [(str(item).split()[11][6:-1]) for item in item_wrappers]
            for recipe in recipe_links:
                rand_num = random.getrandbits(32)
                subprocess.run("touch recipes/{}.txt && echo {} > recipes/{}.txt".format(rand_num, recipe, rand_num), shell=True)
                subprocess.run("wget -O 'recipes/%d.html' %s" % (rand_num, recipe), shell=True)

# print(random.getrandbits(32))
recipe_lists(6, 12)