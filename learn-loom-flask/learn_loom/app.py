from io import BytesIO

from bs4 import BeautifulSoup
from docx import Document
from flask import Flask, request, redirect, flash, jsonify, url_for, send_file, make_response
from flask_cors import CORS
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import getSampleStyleSheet
from reportlab.platypus import SimpleDocTemplate, Paragraph
from werkzeug.utils import secure_filename
from modules import llm_service, video_indexer_service
from db import video_repository
from util import constant, util

import os
import uuid

app = Flask(__name__)
CORS(app)

# This is the path to the directory to save the uploaded files.
UPLOAD_FOLDER = constant.BASE_DIR + '\\uploaded-files'
THUMBNAIL_FOLDER = UPLOAD_FOLDER + '\\thumb'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['THUMBNAIL_FOLDER'] = THUMBNAIL_FOLDER

ACCOUNT_ID = '37df8c3e-bd8c-476e-82fb-86fd52f1f0a0'
SUBSCRIPTION_KEY = 'a9a8ff314bff420faa39c3237ffc5be9'


@app.route('/api/video', methods=['GET'])
def get_all_videos():
    conn = video_repository.create_connection()
    with conn:
        list_of_videos = video_repository.read_all_videos(conn)
        dict_of_videos = [vid.to_dict() for vid in list_of_videos]
        print('list_of_videos', dict_of_videos)
        return jsonify(dict_of_videos)


@app.route('/api/video/<video_uuid>', methods=['GET'])
def get_video_by_uuid(video_uuid):
    conn = video_repository.create_connection()
    with conn:
        video = video_repository.read_video_by_video_uuid(conn, video_uuid)
        video_indexer_id = video.video_indexer_id
        dict_of_videos = video.to_dict()
        print('dict_of_videos', dict_of_videos)
        return jsonify(dict_of_videos)

