with open(r'C:\Users\kavan\.gemini\antigravity-ide\brain\205cf32a-5b9e-4667-a476-e7c3afccf1c5\.system_generated\steps\66\content.md', 'r', encoding='utf-8') as f:
    html = f.read()

import re

sections = re.findall(r'<section[^>]*>(.*?)</section>', html, re.DOTALL)
print(f'Total sections found: {len(sections)}')

def clean_html(text):
    text = re.sub(r'<script.*?</script>', '', text, flags=re.DOTALL)
    text = re.sub(r'<style.*?</style>', '', text, flags=re.DOTALL)
    text = re.sub(r'<svg.*?</svg>', ' ', text, flags=re.DOTALL)
    text = re.sub(r'<[^>]+>', ' ', text)
    text = re.sub(r'&amp;', '&', text)
    text = re.sub(r'&#x27;', "'", text)
    text = re.sub(r'&quot;', '"', text)
    text = re.sub(r'\s+', ' ', text)
    return text.strip()

for i, s in enumerate(sections):
    cl = clean_html(s)
    print(f'Section {i}: {cl[:120]}... ({len(cl)} chars)')
    with open(f'extracted_assessment/section_{i}.txt', 'w', encoding='utf-8') as f_out:
        f_out.write(cl)
