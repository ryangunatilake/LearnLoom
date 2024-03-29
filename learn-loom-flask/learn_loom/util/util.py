import subprocess
import cv2
import base64

ALLOWED_EXTENSIONS = {'mp4'}


def allowed_file(filename):
    return '.' in filename and \
        filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


def generate_thumbnail(video_path, thumbnail_path):
    cap = cv2.VideoCapture(video_path)
    success, image = cap.read()
    if success:
        cv2.imwrite(thumbnail_path, image)
        return True
    else:
        return False


def thumbnail_to_base64(thumbnail_path):
    with open(thumbnail_path, "rb") as img_file:
        return base64.b64encode(img_file.read()).decode('utf-8')
