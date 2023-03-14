import selenium
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.chrome.service import Service
import undetected_chromedriver as uc
import time
from selenium.common.exceptions import TimeoutException

def loadjs():
  file = open(r"C:\Users\USER\Desktop\ebetjopa\script.js", mode='r', encoding="utf8")
  r = file.readlines()
  file.close()
  return r

js = loadjs()


driver = uc.Chrome(
    TimeoutException = False
)
driver.get("https://ficbook.net/fanfiction/other/8hrsk-ebet-vas__")
driver.refresh()
time.sleep(25)
print('gogogogo')
driver.execute_script("".join(js))
time.sleep(3)
driver.refresh()
driver.execute_script("".join(js))


while (True):
    pass