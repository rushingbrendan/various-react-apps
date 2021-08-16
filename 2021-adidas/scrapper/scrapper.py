# -*- coding: utf-8 -*-

# import libraries
import urllib2
from bs4 import BeautifulSoup


# specify the url
site = 'https://www.ea.com/games/nhl/nhl-21/pro-clubs/match-history?clubId=455021&platform=ps4'

hdr = {'User-Agent': 'Mozilla/5.0'}
req = urllib2.Request(site,headers=hdr)

# query the website and return the html to the variable ‘page’
page = urllib2.urlopen(req)

soup = BeautifulSoup(page)


print('Found page.')
print (soup)

# save page to text file
file = open("output.html", "w")
file.write(str(soup))
file.close

