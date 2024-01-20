from bs4 import BeautifulSoup as bs
import subprocess

def get_items(list):
    item_count = 0
    subprocess.run("wget -")

with open("list_page.html", 'r', encoding='UTF-8') as inputFile:
    page_content = inputFile.read()
    soup = bs(page_content, 'lxml')
    item_wrappers = soup.find_all('a', class_='link-list__link type--dog-bold type--dog-link')
    item_links = [(str(item).split()[4][6:-1]) for item in item_wrappers]
    short = item_links[0:5]
    
    subprocess.run("pwd", shell=True)