
%pip install -q langchain==0.0.297

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
