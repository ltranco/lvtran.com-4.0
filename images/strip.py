import re
import urllib

input = open('../index.html', 'r')
format = ['png', 'jpeg', 'gif', 'jpg']
html = input.read()

match = re.findall(r'http://(.+?)\"', html)
count = 0

for each in match:
	for each_format in format:
		if each_format in each:
			old_src = "http://" + each

			http_list = each.split(".")
			img_type = http_list[len(http_list) - 1]

			save_as = "longtran%s.%s" % (count, img_type)
			#urllib.urlretrieve(old_src, save_as)
			print "%s\n" % save_as

			new_src = "images/%s" % save_as
			count += 1

			html = re.sub(old_src, new_src, html)
			break

output = open('../indexoutput.html', 'w') 				
output.write(html)
print len(match)