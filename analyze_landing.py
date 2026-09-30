with open(r'C:\Users\kavan\.gemini\antigravity-ide\brain\205cf32a-5b9e-4667-a476-e7c3afccf1c5\.system_generated\steps\66\content.md', 'r', encoding='utf-8') as f:
    html = f.read()

import re
from html.parser import HTMLParser

class TagParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.sections = []
        self.current_tag = None
        self.headings = []
        self.buttons = []
        self.links = []
        self.text_buffer = []

    def handle_starttag(self, tag, attrs):
        self.current_tag = tag
        attrs_dict = dict(attrs)
        if tag in ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']:
            self.headings.append((tag, attrs_dict.get('id', ''), ''))
        elif tag == 'section':
            self.sections.append((attrs_dict.get('aria-labelledby', attrs_dict.get('id', 'section'))))

    def handle_data(self, data):
        d = data.strip()
        if d and self.headings and self.current_tag in ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']:
            tag, hid, txt = self.headings[-1]
            self.headings[-1] = (tag, hid, (txt + ' ' + d).strip())

parser = TagParser()
parser.feed(html)

print('--- SECTIONS ---')
for s in parser.sections:
    print('Section:', s)

print('\n--- HEADINGS ---')
for tag, hid, txt in parser.headings:
    print(f'<{tag} id="{hid}">: {txt}')
