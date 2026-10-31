"""Build the study banks reproducibly. Correct option is stored first, shuffled in UI."""
import json
import re
import unicodedata
from pathlib import Path
p = Path(__file__).parent
concepts = json.loads((p / 'concepts.json').read_text())
practice = json.loads((p / 'practice.json').read_text())
grade10 = json.loads((p / 'grade10.json').read_text())
glossary = json.loads((p / 'glossary.json').read_text())
exams = json.loads((p / 'exams.json').read_text())
distractors = json.loads((p / 'distractors.json').read_text()) if (p / 'distractors.json').exists() else {}
units = [
    ('bilgi', 'Bilgi ve İnanç', 'Akıl, haber ve iman', 'compass', '#6b63c3'),
    ('din', 'Din ve İslam', 'Fıtrat, tevhit ve teslimiyet', 'sun', '#c9862a'),
    ('ibadet', 'İslam ve İbadet', 'Niyet, ihlas ve hükümler', 'book', '#3b917d'),
    ('genclik', 'Gençlik ve Değerler', 'Ahlak, kişilik ve erdemler', 'heart', '#c46b83'),
    ('gonul', 'Gönül Coğrafyamız', 'Kültür, medeniyet ve aidiyet', 'layers', '#5488b7'),
]
topics = [dict(id=i,title=t,sub=s,icon=ic,color=c,unit=n,grade=9,count=len(concepts[i])*2+len(practice[i]),
    source=f'https://dogm.eba.gov.tr/panel/upload/kitap/dkab9/dkab9_%C3%9Cnite{n}.pdf')
    for n,(i,t,s,ic,c) in enumerate(units,1)]
topics[-1]['source'] = 'https://dogm.eba.gov.tr/etkilesimli/icerik/OlcmeTestOnizle21449.html'
def normalized(term):
    term=unicodedata.normalize('NFD',term.lower().replace('ı','i'))
    return re.sub('[^a-z0-9]','',term)
glossary_lookup={normalized(alias):c for c in glossary for alias in [c['term']]+c.get('aliases',[])}
questions = []
for topic, entries in concepts.items():
    for n,(term,definition,scenario) in enumerate(entries,1):
        for kind,text in [('k', f'“{definition}” açıklaması hangi kavrama aittir?'), ('o',scenario)]:
            questions.append(dict(id=f'{topic}-{kind}{n:02}',topic=topic,kind='Kavram bilgisi' if kind=='k' else 'Örnekten kavrama',text=text,
                options=[term]+distractors[term],explanation=f'{term}: {definition}. '+glossary_lookup.get(normalized(term),{}).get('distinction','')))
    for n,question in enumerate(practice[topic],1):
        questions.append(dict(id=f'{topic}-p{n:02}',topic=topic,kind='Pekiştirme',**question))
units10 = [
    ('allah','Allah-İnsan İlişkisi','İsimler, sıfatlar ve dua','sun','#c9862a'),
    ('peygamber','Hz. Muhammed ve Gençlik','Örnek hayatlar, genç sahabiler','heart','#c46b83'),
    ('dinhayat','Din ve Hayat','Haklar, aile ve toplumsal hayat','layers','#5488b7'),
    ('ahlak','Ahlaki Tutum ve Davranışlar','Erdem, tutum ve sorumluluk','shield','#3b917d'),
    ('yorum','İslam Düşüncesinde Yorumlar','İtikadi, siyasi ve fıkhi yorumlar','compass','#6b63c3'),
]
for n,(i,t,s,ic,c) in enumerate(units10,1):
    topics.append(dict(id=i,title=t,sub=s,icon=ic,color=c,unit=n,grade=10,count=len(grade10[i]),source=f'https://dogm.eba.gov.tr/panel/upload/kitap/dkab10/dkab10_%C3%9Cnite{n}.pdf'))
    for j,q in enumerate(grade10[i],1):
        questions.append(dict(id=f'{i}-p{j:02}',topic=i,kind='Kavram ve yorum',**q))
questions.extend(exams)
assert len({q['id'] for q in questions}) == len(questions)
assert len({q['text'] for q in questions}) == len(questions)
assert all(len(q['options']) == len(set(q['options'])) == 5 for q in questions)
assert all(q['topic'] in {t['id'] for t in topics} for q in questions)
assert len({c['id'] for c in glossary}) == len(glossary)
assert all(sum(q['examDomain']==d for q in exams)>=5 for d in ['bilgi','ibadet','ahlak','peygamber','yorum'])
(p / 'questions.js').write_text(''.join('const '+name+'='+json.dumps(data,ensure_ascii=False,indent=2)+';\n' for name,data in [('TOPICS',topics),('QUESTIONS',questions),('GLOSSARY',glossary),('EXAMS',exams)]))
print(f'Generated {len(questions)-len(exams)} unit questions, {len(exams)} exam questions, {len(glossary)} concepts.')
