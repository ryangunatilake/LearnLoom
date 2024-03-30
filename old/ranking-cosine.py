
#pip install -q langchain==0.0.297

#faiss-cpu==1.7.4
#google-generativeai==0.1.0
#InstructorEmbedding==1.0.1
#sentence_transformers==2.2.2

from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.vectorstores import FAISS
from langchain.llms import GooglePalm
from langchain.chains.question_answering import load_qa_chain
from langchain.embeddings.huggingface import HuggingFaceInstructEmbeddings
# from langchain.embeddings import GooglePalmEmbeddings # If no GPU/time.

embeddings_model_name = "hkunlp/instructor-xl"
embeddings = HuggingFaceInstructEmbeddings(model_name=embeddings_model_name,model_kwargs={"device": "cuda"})
# Cloud based embedding alternative:
# embeddings = GooglePalmEmbeddings()

text = """History: Introduction and Historical SourcesINTRODUCTIONHistory is the study of change over time, and it covers all aspects of human society. Political, social,
economic, scientific, technological, medical, cultural, intellectual, religious and military developments are all part of history.HISTORYHistory refers to the study
and interpretation by a historian on the data and other source of the past human activity, people in the definition. , societies and civilizations leading to the present
day. There are three important concepts.First, history as we all know is based on past events.Second it is interpreted by someone usually by historian. They gather,
discard and interpret the sources that they encounter.And finally and the most important, history rely on data and documents which historian call as historical sources.
History’s Subject MatterFast CheckLike other social science discipline, the subject matter of history is the life of people and humanity. But history has always been
known as the study of the past. While this definition of history is not wrong, it is incomplete.ClarificationsEtymologically, the word history came from the Greek word
Historia which means inquiry. Clearly the word Historia does not mean past events. It denotes asking question or investigation of the past done byperson trained to do
so or by persons who are interested in human past.Conclusion  Hence, we can say that historical account must be based on all available relevant evidence. Therefore, a
version of the past that cannot be supported by the evidence is worthless.History and the HistorianHistorian is an expert or student of history, especially that of a
particular period, geographical region or social phenomenon. There are many duties of a historian. These historians seek not only historical evidence and facts but also
to interpret these facts. He also gives meaning to these facts and organizes them chronologically.A person who must be able to recognize the evidence, decide how useful
it is and come to conclusion based on what he has found out. The historian therefore is responsible for reconstructing the past.According to Gottschalk, historian is
many times removed from the events under investigation. He added that only a part of what was observed in the past was remembered by those who observed it, only a part
of what was remembered was recorded; only a part of what was recorded has survived, only a part of what was survive has come to the historian attention. Moreover, only
a part of what is credible has been grasped, and only a part of what has been grasped can expounded ornarrated by the historian. (Louis Gottschalk, President of AHA,
1953)Some authors define history as a study of historical perspective. In reconstructing the past, a historian can be subjective; after all he is human, fallible and
capable error. People’s memories are filled with bias, self-righteousness, pride, vanity, spinning, obstruction and outright lies. Eachhas his own frame of reference or
a set of interlocking values, loyalties assumptions interest andprinciple of action.The historian is influenced by his own environment, ideology, education and
influence. His interpretation of the historical fact is affected by his context and circumstances. It’s like the Indian parable of an elephant and the blind men,
historians have different historical perspective.Because certain events happened so long ago and because sometimes the evidence is incomplete, historians have
different approaches and views about what happened in the past. This is the subjective nature of history, one historian claims an event happened a certain way,
while another disagree completely. The best approach is to do all we can to reconstruct as fully as possible our picture of the past. To do this, most scholars
use historiography or what they callhistory of history.
"""


# Split text into chunks
text_splitter = RecursiveCharacterTextSplitter(
    chunk_size=2000,
    chunk_overlap=200,
    length_function=len
    )
chunks = text_splitter.split_text(text=text)

    # Embed chunks and store them in a Vector Store
VectorStore = FAISS.from_texts(chunks, embedding=embeddings)

query = "Create 10 questions based on the content of this document"

if query:
    docs = VectorStore.similarity_search(query=query, k=3)

    llm = GooglePalm()
    llm.temperature = 0.1 # Increase for more creativity [0.0-1.0]
    chain = load_qa_chain(llm=llm, chain_type="stuff")
    response = chain.run(input_documents=docs, question=query)

print(response)

!pip install pytextrank
!python -m spacy download en_core_web_sm
import spacy
import pytextrank

document = "Not only did it only confirm that the film would be unfunny and generic, but it also managed to give away the ENTIRE movie; and I'm not exaggerating - every moment, every  plot point, every joke is told in the trailer."

en_nlp = spacy.load("en_core_web_sm")
en_nlp.add_pipe("textrank")
doc = en_nlp(document)

tr = doc._.textrank
print(tr.elapsed_time);

for combination in doc._.phrases:
    print(combination.text, combination.rank, combination.count)

text = "Not only did it only confirm that the film would be unfunny and generic, but it also managed to give away the ENTIRE movie; and I'm not exaggerating - every moment, every  plot point, every joke is told in the trailer."

en_nlp = spacy.load("en_core_web_sm")
en_nlp.add_pipe("textrank", config={ "stopwords": { "word": ["NOUN"] } })
doc = en_nlp(text)
for phrase in doc._.phrases[:5]:
    print(phrase)

text = """The current vaccination rate in India is far from satisfactory though in absolute
numbers India surpassed the U.S. in terms of total number of vaccinations. India's current
vaccination rate doesn’t match up to what is actually needed. This will delay covering the
people with vaccination, which is, till date, the only viable way of breaking the chain of
transmission and averting severe diseases and deaths in people who get infected, said Gauri
Agarwal, IVF Expert, founder-Seeds of Innocence."""

en_nlp = spacy.load("en_core_web_sm")
en_nlp.add_pipe("textrank", config={ "stopwords": { "word": ["NOUN"] } })
doc = en_nlp(text)

tr = doc._.textrank
tr.plot_keyphrases()


text = """India recorded its lowest daily Covid-19 cases in over four months on Tuesday as it
registered 30,093 fresh cases of the coronavirus disease, the Union ministry of health and
family welfare data showed. The last time India's Covid-19 tally was below 30,000-mark was on
March 16 when the country saw 28,903 fresh cases.

The country also saw 374 deaths due to Covid-19 in the last 24 hours, taking the death toll to 414,482. This is also the lowest death count India has seen after over three months. India witnessed deaths below 400 on March 30 when 354 fatalities were recorded.

Active cases of Covid-19 in the last 24 hours dipped sharply by 15,535, bringing the current infections in the country down to 406,130, the health ministry data showed. These account for 1.35% of the total infections reported in the country.

At least 45,254 people recovered from the infectious disease in the last 24 hours, taking India's recovery rate to 97.32%."""

en_nlp = spacy.load("en_core_web_sm")
en_nlp.add_pipe("textrank", config={ "stopwords": { "word": ["NOUN"] } })
doc = en_nlp(text)
tr = doc._.textrank

for sent in tr.summary(limit_phrases=10, limit_sentences=2):
    print(sent)

!pip install summa

from summa import summarizer
from summa import keywords


summarizer.summarize(text, ratio=0.5)
