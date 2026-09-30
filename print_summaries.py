import os, re

def clean_html(text):
    text = re.sub(r'<script.*?</script>', '', text, flags=re.DOTALL)
    text = re.sub(r'<style.*?</style>', '', text, flags=re.DOTALL)
    text = re.sub(r'<svg.*?</svg>', ' [ICON] ', text, flags=re.DOTALL)
    text = re.sub(r'<[^>]+>', ' ', text)
    text = re.sub(r'&amp;', '&', text)
    text = re.sub(r'&#x27;', "'", text)
    text = re.sub(r'&quot;', '"', text)
    text = re.sub(r'\s+', ' ', text)
    return text.strip()

for fname in ['ecosystem_section.html', 'monthly_contest_section.html', 'ctc_score_section.html', 'faq_section.html']:
    path = os.path.join('extracted_assessment', fname)
    if os.path.exists(path):
        with open(path, 'r', encoding='utf-8') as f:
            content = f.read()
        print(f'=== {fname} ({len(content)} bytes) ===')
        print(clean_html(content)[:1000])
        print('\n' + '-'*60 + '\n')
