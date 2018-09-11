# -*- coding: UTF-8 -*-

import math;
import urllib;
import unicodecsv;
from bs4 import BeautifulSoup;

def do_spider(book_tag, book_number):
    book_list = []
    page_num = 0

    while(page_num < math.ceil(book_number/15.0)):
        url = 'http://www.douban.com/tag/' + urllib.quote(book_tag) + '/book?start=' + str(page_num * 15)

        response = urllib.urlopen(url)
        html_code = response.read()
        html_code_soup = BeautifulSoup(html_code, features="html.parser")

        book_list_soup = html_code_soup.find('div', {'class': 'mod book-list'})

        if book_list_soup == None or len(book_list_soup) <= 1:
            break

        book_list_html = book_list_soup.findAll('dd')

        for book_info in book_list_html:
            book_title = book_info.find('a', {'class': 'title'}).string.strip()
            book_desc = book_info.find('div', {'class': 'desc'}).string.strip()
            book_url = book_info.find('a', {'class': 'title'}).get('href')
            desc_list = book_desc.split('/')

            try:
                author_info = '/'.join(desc_list[0 : -3])
            except:
                author_info = '暂无'
            try:
                pub_info = '/'.join(desc_list[-3:])
            except:
                pub_info = '暂无'
            try:
                rating = book_info.find('span', {'class': 'rating_nums'}).string.strip()
            except:
                rating = '0.0'
            try:
                people_num = get_people_num(book_url)
            except:
                people_num = '0'

            book_list.append([book_title, author_info, pub_info, rating, people_num, book_url])

        page_num += 1
        print 'Downloading information page %d ' % page_num + 'in ' + book_tag

    return book_list

def get_people_num(book_url):
    response = urllib.urlopen(book_url)
    html_code = response.read()
    html_code_soup = BeautifulSoup(html_code, features="html.parser")
    people_num = html_code_soup.find('div', {'class': 'rating_sum'}).findAll('span')[1].string.strip()
    return people_num

def write_data(file_data, file_name):
    with open(file_name, 'a') as f:
        f_csv = unicodecsv.writer(f, encoding='utf-8-sig')
        f_csv.writerows(file_data)

if __name__ == '__main__':
    print "please enter the tag of the book you are searching for："
    book_tag = raw_input()
    print "please enter the quality："
    book_number = raw_input()
    book_list = do_spider(book_tag, int(book_number))

    write_data(book_list, book_tag + '.csv')

