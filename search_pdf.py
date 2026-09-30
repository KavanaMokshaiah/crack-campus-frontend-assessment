with open(r'c:\Users\kavan\Downloads\Crack The Campus Frontend Developer Assessment.pdf.mht', 'rb') as f:
    raw = f.read()

import re
# Look for sections, numbers, "5.", "6.", "Submission", "Deliverables", "Pages", "Requirements"
matches = re.findall(rb'[0-9]\.\s+[A-Z][a-zA-Z\s&]{3,40}', raw)
print('Regex matches:', set(matches))

# Let's search for keywords
for kw in [b'Submission', b'Deliverable', b'Deadline', b'Guidelines', b'Task', b'Instructions', b'Evaluation', b'Bonus', b'GitHub', b'Vercel', b'Netlify']:
    pos = 0
    found = []
    while True:
        p = raw.find(kw, pos)
        if p == -1: break
        found.append(p)
        pos = p + len(kw)
    print(f'Keyword {kw}: {len(found)} occurrences at {found[:5]}')
