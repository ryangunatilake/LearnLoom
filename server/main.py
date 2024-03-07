# Import necessary modules and classes
# pip install langchain
# pip install langchain_openai
# pip install textract
# pip install python-docx
# pip install pdfkit


from langchain_community.document_loaders import TextLoader
from langchain.text_splitter import CharacterTextSplitter
from langchain_community.vectorstores import FAISS
from langchain_openai.embeddings import OpenAIEmbeddings
from langchain.agents.agent_toolkits import create_retriever_tool, create_conversational_retrieval_agent
from langchain_openai.chat_models import ChatOpenAI
import os
import textract
from docx import Document
import pdfkit


def string_to_word(string_content, output_file):
    document = Document()
    document.add_paragraph(string_content)

    document.save(output_file)


def string_to_pdf(string_content, output_file):
    pdfkit.from_string(string_content, output_file)


# Get transcribed text  and OCR content from the video using Microsoft Azure Video Indexer
Transcription = ""
OCR = ""

# Get the topic if given by user from the frontend
Topic = ""

# Get the content from the presentation if given by user from the frontend
PresentationContent = ""
PresentationContent = textract.process(presentation_file)

# Set the OpenAI API key for authentication
os.environ["OPENAI_API_KEY"] = "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"

documents = Transcription + OCR + Topic + PresentationContent

# Load the document (IN PLACE OF TRANSCRIBED TEXT)
loader = TextLoader('./State of the Union Address - 2023.txt')

file_path = './State of the Union Address - 2023.txt'
print("File path:", file_path)
loader = TextLoader(file_path)
documents = loader.load()
print("Documents:", documents)

# Split the document into smaller chunks to process more efficiently
text_splitter = CharacterTextSplitter(chunk_size=1000, chunk_overlap=0)
texts = text_splitter.split_documents(documents)

# Use OpenAI default embeddings to convert text into numerical vectors
embeddings = OpenAIEmbeddings()

# Create a vector database using FAISS, a library for efficient similarity search and clustering of dense vectors
db = FAISS.from_documents(texts, embeddings)

# Create a retriever to interact with the vector database, allowing for document retrieval based on similarity
retriever = db.as_retriever()

# Create a tool for search functionality, which utilizes the retriever to search for documents
tool = create_retriever_tool(
    retriever,
    "search_state_of_union",
    "Searches and returns documents regarding the state-of-the-union."
)

# Wrap an LLM (OpenAI language model) with a conversational interface to make it suitable for dialogue
llm = ChatOpenAI(temperature=0)

# Create an agent executor that combines the language model with the retriever tool, enabling conversational retrieval
agent_executor = create_conversational_retrieval_agent(llm, [tool], verbose=True)

# Sample inputs to the conversational agent for testing
inputs = [
    "Create a note with topics from the embedded text by only including the relvant and important educational content of around 500 words ",
    "Create 10 questions from the text that are educationally relevant, also include ideal answers ",
    "Create 10 flashcards from the most educationally relevant content given"]

# Created Note
# Output as text to frontend through database
notes = agent_executor.invoke({"input": inputs[1]})
# Output as pdf to frontend through database
string_to_pdf(notes, "notes.pdf")
# Output as WORD file to frontend through database
string_to_word(notes, "notes.docx")

# Created Questions
# Output as text to frontend through database
questions = agent_executor.invoke({"input": inputs[3]})

# Created Flashcards
# Output as text to frontend through database
flashcards = agent_executor.invoke({"input": inputs[3]})
