from bs4 import BeautifulSoup as bs
import subprocess

def get_items(list):
    item_count = 0
    for item in list:
        subprocess.run("wget -O list_page_files/recipe_list_%d.html %s" % (item_count, list[item_count]), shell=True)
        item_count += 1

def recipe_lists(list_range):
    output = subprocess.run("ls -ltr list_page_files/ | cut -d ' ' -f 9", capture_output=True, shell=True, text=True)
    lists = [item for item in str(output.stdout).split()]
    print(lists)
    # with open("recipe_list_%d", 'r', encoding='UTF-8') as inputFile:
    #     page_content = inputFile.read()
    #     soup = bs(page_content, 'lxml')
    #     item_wrappers = soup.find_all('a', class_='link-list__link type--dog-bold type--dog-link')
recipe_lists()
