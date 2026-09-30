with open('extracted_assessment/site_sections_detail.txt', 'r', encoding='utf-8') as f:
    text = f.read()

sections = text.split('=== SECTION: ')
for s in sections:
    if not s.strip(): continue
    lines = s.split('\n')
    title = lines[0]
    content = '\n'.join(lines[1:])[:400]
    print(f'*** {title} ***')
    print(content)
    print('-'*50)
