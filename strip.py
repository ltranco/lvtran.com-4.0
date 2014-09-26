import re

input = open('index.html', 'r')
format = ['png', 'jpeg', 'gif', 'jpg']
html = input.read()

match = re.findall(r'http://(.+?)\"', html)

for each in match:
	for each_format in format:
		if each_format in each:
			print each
			break
		
print len(match)