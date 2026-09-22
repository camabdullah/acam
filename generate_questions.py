"""Build a reproducible bank of 40 questions per unit; correct option is first."""
import json
import random
from pathlib import Path
p = Path(__file__).parent
concepts = json.loads((p / 'concepts.json').read_text())
practice = json.loads((p / 'practice.json').read_text())
units = [
    ('bilgi', 'Bilgi ve İnanç', 'Akıl, haber ve iman', 'compass', '#6b63c3'),
    ('din', 'Din ve İslam', 'Fıtrat, tevhit ve teslimiyet', 'sun', '#c9862a'),
    ('ibadet', 'İslam ve İbadet', 'Niyet, ihlas ve hükümler', 'book', '#3b917d'),
    ('genclik', 'Gençlik ve Değerler', 'Ahlak, kişilik ve erdemler', 'heart', '#c46b83'),
    ('gonul', 'Gönül Coğrafyamız', 'Kültür, medeniyet ve aidiyet', 'layers', '#5488b7'),
]
topics = [dict(id=i,title=t,sub=s,icon=ic,color=c,unit=n,count=40,
    source=f'https://dogm.eba.gov.tr/panel/upload/kitap/dkab9/dkab9_%C3%9Cnite{n}.pdf')
    for n,(i,t,s,ic,c) in enumerate(units,1)]
topics[-1]['source'] = 'https://dogm.eba.gov.tr/etkilesimli/icerik/OlcmeTestOnizle21449.html'
# Do not use broader/narrower or overlapping concepts as rival answers.
overlaps = [
    {'Sadık haber','Vahiy','Mütevatir haber'}, {'İman','Tasdik'},
    {'Din','İslam'}, {'Hanif','Mümin'},
    {'Farz','Farz-ı ayn','Farz-ı kifaye'}, {'Sünnet','Mendup','Nafile'},
    {'Niyet','İhlas'}, {'İbadet','Nafile','Sünnet','Farz','Farz-ı ayn','Farz-ı kifaye'},
    {'Değer','Ahlak','Erdem','Karakter'}, {'Kişilik','Mizaç','Karakter'},
    {'Kültür','Medeniyet','İslam medeniyeti'}, {'Türkistan','Maveraünnehir','Horasan'}, {'Hicaz','Medine'},
]
rng = random.Random(20260922)
questions = []
for topic, entries in concepts.items():
    terms = [x[0] for x in entries]
    for n,(term,definition,scenario) in enumerate(entries,1):
        banned = {term}
        for group in overlaps:
            if term in group:
                banned.update(group)
        candidates = [x for x in terms if x not in banned]
        for kind,text in [('k', f'“{definition}” açıklaması hangi kavrama aittir?'), ('o',scenario)]:
            questions.append(dict(id=f'{topic}-{kind}{n:02}',topic=topic,kind='Kavram bilgisi' if kind=='k' else 'Örnekten kavrama',text=text,
                options=[term]+rng.sample(candidates,4),explanation=f'{term}: {definition[0].lower()+definition[1:]}.'))
    assert len(practice[topic]) == 10
    for n,question in enumerate(practice[topic],1):
        questions.append(dict(id=f'{topic}-p{n:02}',topic=topic,kind='Pekiştirme',**question))
assert len(questions) == 200
assert len({q['id'] for q in questions}) == 200
assert len({q['text'] for q in questions}) == 200
assert all(len(q['options']) == len(set(q['options'])) == 5 for q in questions)
(p / 'questions.js').write_text('const TOPICS='+json.dumps(topics,ensure_ascii=False,indent=2)+';\nconst QUESTIONS='+json.dumps(questions,ensure_ascii=False,indent=2)+';\n')
print('Generated 5 units × 40 questions = 200; 150 definition/scenario questions.')
