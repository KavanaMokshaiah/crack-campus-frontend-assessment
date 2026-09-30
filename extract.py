import re
import os

os.makedirs('extracted_assessment', exist_ok=True)

with open(r'c:\Users\kavan\Downloads\Crack The Campus Frontend Developer Assessment.pdf.mht', 'rb') as f:
    raw = f.read()

m = re.search(rb'boundary="?([^";\r\n]+)"?', raw[:2000])
if m:
    boundary = b'--' + m.group(1)
    print('Boundary:', boundary)
    parts = raw.split(boundary)
    print(f'Found {len(parts)} parts')
    for i, p in enumerate(parts):
        header_end = p.find(b'\r\n\r\n')
        offset = 4
        if header_end == -1:
            header_end = p.find(b'\n\n')
            offset = 2
        if header_end != -1:
            header = p[:header_end]
            body = p[header_end+offset:]
            if body.endswith(b'\r\n'):
                body = body[:-2]
            elif body.endswith(b'\n'):
                body = body[:-1]
            if b'image/png' in header:
                filename = f'extracted_assessment/raw_image_{i}.png'
                with open(filename, 'wb') as f_out:
                    f_out.write(body)
                print(f'Saved {filename}, size={len(body)}, header: {repr(body[:16])}')
            elif b'text/html' in header:
                filename = f'extracted_assessment/raw_page_{i}.html'
                with open(filename, 'wb') as f_out:
                    f_out.write(body)
                print(f'Saved {filename}, size={len(body)}')
