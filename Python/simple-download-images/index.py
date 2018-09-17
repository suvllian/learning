# -*- coding: utf-8 -*-
import urllib
from bs4 import BeautifulSoup;

def get_html(url):
    response = urllib.urlopen(url)
    return response.read()

def get_image(html_text):
    bs = BeautifulSoup(html_text, 'html.parser')
    body = bs.body
    book_list = body.select('.book-item')
    index = 1
    for book in book_list:
        book_src = book.select('.panel-img img')[0].get('src')
        book_title = book.find('h3').string
        print '下载第 %d 张图片，%s' % (index, book_title.encode("utf-8"))
        urllib.urlretrieve(book_src, '%s.jpg' % book_title)
        index += 1

if __name__ == '__main__':
    html_text = get_html('https://market.douban.com/book/')
    get_image(html_text)