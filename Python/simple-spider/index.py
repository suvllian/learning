import urllib;
import unicodecsv;
from bs4 import BeautifulSoup;

def get_content(url, data = None):
    response = urllib.urlopen(url)
    return response.read()

def get_data(html_text):
    bs = BeautifulSoup(html_text, 'html.parser')
    body = bs.body
    data = body.find_all('div', { 'class': 'book-brief' })
    final_result = []
    print data

    for item in data:
        book_title = item.find('h3').string
        book_introduction = item.find('div', { 'class': 'book-quote' }).find('p').string
        book = []
        book.append(book_title)
        book.append(book_introduction)
        final_result.append(book)

    return final_result

def write_data(file_data, file_name):
    with open(file_name, 'a') as f:
        f_csv = unicodecsv.writer(f, encoding='utf-8-sig')
        f_csv.writerows(file_data)

if __name__ == '__main__':
    url = 'https://market.douban.com/book/'
    html = get_content(url)
    result = get_data(html)
    write_data(result, 'book.csv')
