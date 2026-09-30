with open(r'C:\Users\kavan\.gemini\antigravity-ide\brain\205cf32a-5b9e-4667-a476-e7c3afccf1c5\.system_generated\steps\66\content.md', 'r', encoding='utf-8') as f:
    html = f.read()

import re

# Find all heading tags and their parent context or clean text in order
pattern = re.compile(r'<h[1-6][^>]*>(.*?)</h[1-6]>', re.DOTALL)
headings = pattern.findall(html)
print(f'Total headings found: {len(headings)}')
for h in headings:
    clean_h = re.sub(r'<[^>]+>', ' ', h)
    clean_h = re.sub(r'\s+', ' ', clean_h).strip()
    print('-', clean_h)
