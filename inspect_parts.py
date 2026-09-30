import re
import os

with open(r'c:\Users\kavan\Downloads\Crack The Campus Frontend Developer Assessment.pdf.mht', 'rb') as f:
    raw = f.read()

m = re.search(rb'boundary="?([^"\r\n]+)"?', raw[:2000])
boundary = b'--' + m.group(1)
parts = raw.split(boundary)
print(f'Total parts: {len(parts)}')
for i, p in enumerate(parts):
    h = p[:p.find(b'\r\n\r\n') if b'\r\n\r\n' in p else 200]
    ct = re.search(rb'Content-Type:\s*([^\r\n]+)', h, re.IGNORECASE)
    cl = re.search(rb'Content-Location:\s*([^\r\n]+)', h, re.IGNORECASE)
    ct_val = ct.group(1).decode('latin1') if ct else 'unknown'
    cl_val = cl.group(1).decode('latin1') if cl else ''
    if 'image' in ct_val or 'pdf' in ct_val or 'application' in ct_val or 'text/html' in ct_val or len(p) > 2000:
        print(f'Part {i}: len={len(p)}, ct={ct_val}, loc={cl_val[:60]}')
