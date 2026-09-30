with open(r'C:\Users\kavan\.gemini\antigravity-ide\brain\205cf32a-5b9e-4667-a476-e7c3afccf1c5\.system_generated\steps\66\content.md', 'r', encoding='utf-8') as f:
    html = f.read()

import re

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

with open('extracted_assessment/full_landing_text.txt', 'w', encoding='utf-8') as f_out:
    footer_idx = html.find('<footer')
    if footer_idx != -1:
        f_out.write('=== FOOTER ===\n' + clean_html(html[footer_idx:]) + '\n\n')
    
    # Also find all cards, pathways, and interactive elements
    buttons = re.findall(r'<button[^>]*>(.*?)</button>', html, re.DOTALL)
    f_out.write('=== BUTTONS ===\n')
    for b in buttons:
        cb = clean_html(b)
        if cb: f_out.write(f'- {cb}\n')

    links = re.findall(r'<a[^>]*>(.*?)</a>', html, re.DOTALL)
    f_out.write('\n=== LINKS ===\n')
    for l in links:
        cl = clean_html(l)
        if cl: f_out.write(f'- {cl}\n')

print('Wrote full_landing_text.txt')
