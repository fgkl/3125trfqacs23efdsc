import random
import string
import random
import pyperclip
import time
N = 8
K = 4
E = 12
while True:
  time.sleep(10)
  for x in range(1):
    res = ''.join(random.choices(string.ascii_lowercase + string.digits, k=N))
    res2 = ''.join(random.choices(string.digits, k=K))
    res3 = ''.join(random.choices(string.ascii_lowercase + string.digits, k=K))
    res4 = ''.join(random.choices(string.ascii_lowercase + string.digits, k=K))
    res5 = ''.join(random.choices(string.ascii_lowercase + string.digits, k=E))

    all = '"' + res + '"'
    file1 = open("SunTzu.json","w")
    L = [
      "{ \n",
      #
      '  "quotes": [ \n',
      "        ",
      all,
      "\n",
      " ] \n"
      "}"
      ]
    print(all)
    file1.writelines(L)
