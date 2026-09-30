with open(r'C:\Users\kavan\.gemini\antigravity-ide\brain\205cf32a-5b9e-4667-a476-e7c3afccf1c5\.system_generated\steps\66\content.md', 'r', encoding='utf-8') as f:
    html = f.read()

import re

def clean_html(text):
    text = re.sub(r'<script.*?</script>', '', text, flags=re.DOTALL)
    text = re.sub(r'<style.*?</style>', '', text, flags=re.DOTALL)
    text = re.sub(r'<svg.*?</svg>', ' [SVG] ', text, flags=re.DOTALL)
    text = re.sub(r'<[^>]+>', ' ', text)
    text = re.sub(r'\s+', ' ', text)
    return text.strip()

# Let's inspect Ecosystem section
eco_idx = html.find('One Ecosystem. Two Ways to Win.')
if eco_idx != -1:
    print('=== ECOSYSTEM SECTION ===')
    print(clean_html(html[eco_idx-200:eco_idx+2500]))
    print('\n' + '='*50 + '\n')

# Let's inspect Explore section
exp_idx = html.find('id="explore"')
if exp_idx == -1:
    exp_idx = html.find('Start Upskilling')
print('=== EXPLORE / PATHWAYS ===')
if exp_idx != -1:
    print(clean_html(html[exp_idx:exp_idx+3000]))
    print('\n' + '='*50 + '\n')

# Let's inspect Monthly Performance Series
mps_idx = html.find('The Monthly Performance Series.')
if mps_idx != -1:
    print('=== MONTHLY PERFORMANCE SERIES ===')
    print(clean_html(html[mps_idx-200:mps_idx+3000]))
    print('\n' + '='*50 + '\n')

# Let's inspect CTC Score section
score_idx = html.find('Beyond the Resume: The CTC Score.')
if score_idx != -1:
    print('=== CTC SCORE SECTION ===')
    print(clean_html(html[score_idx-200:score_idx+3000]))
    print('\n' + '='*50 + '\n')

# Let's inspect FAQ section
faq_idx = html.find('Common questions about Crack The Campus')
if faq_idx != -1:
    print('=== FAQ SECTION ===')
    print(clean_html(html[faq_idx-200:faq_idx+3500]))
    print('\n' + '='*50 + '\n')

# Let's inspect Footer
footer_idx = html.find('<footer')
if footer_idx != -1:
    print('=== FOOTER ===')
    print(clean_html(html[footer_idx:]))
