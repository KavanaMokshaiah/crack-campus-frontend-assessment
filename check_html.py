import re

with open('extracted_assessment/raw_page_1.html', 'r', encoding='utf-8', errors='ignore') as f:
    html = f.read()

urls = re.findall(r'https?://[^\s"\'<>]+', html)
print('Total URLs in HTML:', len(urls))
for u in set(urls):
    if any(k in u.lower() for k in ['sharepoint', 'crack', 'pdf', 'onedrive', 'castlerock']):
        print('URL:', u)

print('\nLooking for json/config/state in HTML:')
matches = re.findall(r'(\{[^{}]{20,}\})', html)
print('Found JSON-like blocks:', len(matches))
