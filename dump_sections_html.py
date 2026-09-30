with open(r'C:\Users\kavan\.gemini\antigravity-ide\brain\205cf32a-5b9e-4667-a476-e7c3afccf1c5\.system_generated\steps\66\content.md', 'r', encoding='utf-8') as f:
    html = f.read()

import re

# print search term counts

# Let's inspect the Monthly Performance / Contest section in full
mps_start = html.find('The Monthly Performance Series')
mps_end = html.find('Enterprise-Grade Infrastructure')
if mps_start != -1 and mps_end != -1:
    with open('extracted_assessment/monthly_contest_section.html', 'w', encoding='utf-8') as f:
        f.write(html[mps_start:mps_end])
    print('Saved monthly_contest_section.html')

# Let's inspect the Ecosystem section in full
eco_start = html.find('One Ecosystem. Two Ways to Win.')
eco_end = html.find('The Monthly Performance Series')
if eco_start != -1 and eco_end != -1:
    with open('extracted_assessment/ecosystem_section.html', 'w', encoding='utf-8') as f:
        f.write(html[eco_start:eco_end])
    print('Saved ecosystem_section.html')

# Let's inspect CTC score section in full
score_start = html.find('Beyond the Resume: The CTC Score.')
score_end = html.find('Common questions about Crack The Campus')
if score_start != -1 and score_end != -1:
    with open('extracted_assessment/ctc_score_section.html', 'w', encoding='utf-8') as f:
        f.write(html[score_start:score_end])
    print('Saved ctc_score_section.html')

# Let's inspect FAQ section in full
faq_start = html.find('Common questions about Crack The Campus')
faq_end = html.find('<footer')
if faq_start != -1 and faq_end != -1:
    with open('extracted_assessment/faq_section.html', 'w', encoding='utf-8') as f:
        f.write(html[faq_start:faq_end])
    print('Saved faq_section.html')
