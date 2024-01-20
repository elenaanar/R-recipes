from bs4 import BeautifulSoup as bs
import subprocess

def get_items(list):
    item_count = 0
    for item in list:
        subprocess.run("wget -O list_page_files/recipe_list_%d.html %s" % (item_count, list[item_count]), shell=True)
        item_count += 1

with open("list_page.html", 'r', encoding='UTF-8') as inputFile:
    page_content = inputFile.read()
    soup = bs(page_content, 'lxml')
    item_wrappers = soup.find_all('a', class_='link-list__link type--dog-bold type--dog-link')
    item_links = [(str(item).split()[4][6:-1]) for item in item_wrappers]
    get_items(item_links)