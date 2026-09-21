from pathlib import Path
p=Path(__file__).parent
html=(p/'template.html').read_text()
for marker,name in [('/*STYLE*/','style.css'),('/*QUESTIONS*/','questions.js'),('/*APP*/','app.js')]:
    html=html.replace(marker,(p/name).read_text())
(p/'index.html').write_text(html)
print(f'Built index.html: {len(html.encode())} bytes')
