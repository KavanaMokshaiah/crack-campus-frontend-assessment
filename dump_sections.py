with open(r'C:\Users\kavan\.gemini\antigravity-ide\brain\205cf32a-5b9e-4667-a476-e7c3afccf1c5\.system_generated\steps\66\content.md', 'r', encoding='utf-8') as f:
    html = f.read()

import re
from html.parser import HTMLParser

class SectionExtractor(HTMLParser):
    def __init__(self):
        super().__init__()
        self.sections = {}
        self.current_sec = 'header'
        self.text_buf = []

    def handle_starttag(self, tag, attrs):
        attrs_dict = dict(attrs)
        if tag == 'section':
            sec_id = attrs_dict.get('id', attrs_dict.get('aria-labelledby', f'section_{len(self.sections)}'))
            self.sections[self.current_sec] = ' '.join(self.text_buf)
            self.current_sec = sec_id
            self.text_buf = []

    def handle_data(self, data):
        d = data.strip()
        if d:
            self.text_buf.append(d)

    def close(self):
        super().close()
        self.sections[self.current_sec] = ' '.join(self.text_buf)

extractor = SectionExtractor()
extractor.feed(html)
extractor.close()

with open('extracted_assessment/site_sections_detail.txt', 'w', encoding='utf-8') as f_out:
    for name, content in extractor.sections.items():
        clean = re.sub(r'\s+', ' ', content).strip()
        f_out.write(f'=== SECTION: {name} ===\n{clean}\n\n')

print(f'Wrote {len(extractor.sections)} sections to site_sections_detail.txt')
for name, content in extractor.sections.items():
    print(f'- {name}: {len(content)} chars')
