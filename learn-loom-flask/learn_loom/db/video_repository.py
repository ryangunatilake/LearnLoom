import sqlite3
from util import constant,util

class Video:
    def __init__(self, id, video_uuid, video_indexer_id, original_video_name, video_ext, note, question, flash_card):
        self.id = id
        self.video_uuid = video_uuid
        self.video_indexer_id = video_indexer_id
        self.original_video_name = original_video_name
        self.video_ext = video_ext
        self.note = note
        self.question = question
        self.flash_card = flash_card

    def to_dict(self):
        return {
            'id': self.id,
            'video_uuid': self.video_uuid,
            'video_indexer_id': self.video_indexer_id,
            'original_video_name': self.original_video_name,
            'video_ext': self.video_ext,
            'note': self.note,
            'question': self.question,
            'flash_card': self.flash_card,
        }


def create_connection():
    conn = None
    db_file = constant.BASE_DIR+'\\sqlite\\learn-loom.db'
    try:
        conn = sqlite3.connect(db_file)
        print('Connected to SQLite database')
        return conn
    except sqlite3.Error as e:
        print(e)
    return conn


def read_all_videos(conn):
    cur = conn.cursor()
    cur.execute(
        ''' SELECT id, video_uuid, video_indexer_id, original_video_name, video_ext, note, question, flash_card 
            FROM video''')

    rows = cur.fetchall()
    videos = []

    for row in rows:
        video = Video(row[0], row[1], row[2], row[3], row[4], row[5], row[6], row[7])
        videos.append(video)

    return videos


def read_video_by_video_uuid(conn, video_uuid):
    cur = conn.cursor()
    cur.execute(
        ''' SELECT id, video_uuid, video_indexer_id, original_video_name, video_ext, note, question, flash_card 
            FROM video
            WHERE video_uuid = ? LIMIT 1''', (video_uuid,))

    row = cur.fetchone()
    video = Video(row[0], row[1], row[2], row[3], row[4], row[5], row[6], row[7])
    return video


def create_base_video(conn, video_uuid, original_video_name, video_ext):
    sql = ''' INSERT INTO video(video_uuid, original_video_name, video_ext)
              VALUES(?,?,?) '''
    cur = conn.cursor()
    cur.execute(sql, (video_uuid, original_video_name, video_ext))
    conn.commit()
    return cur.lastrowid


def update_video_content(conn, note, question, flash_card, video_uuid):
    sql = ''' UPDATE video
              SET note = ?,
              question = ?,
              flash_card = ?
              WHERE video_uuid = ?'''
    cur = conn.cursor()
    cur.execute(sql, (note, question, flash_card, video_uuid))
    conn.commit()


def update_video_indexer_id(conn, video_indexer_id, video_uuid):
    sql = ''' UPDATE video
              SET video_indexer_id = ?
              WHERE video_uuid = ?'''
    cur = conn.cursor()
    cur.execute(sql, (video_indexer_id, video_uuid))
    conn.commit()


# Function to delete a video
def delete_video(conn, video_id):
    sql = 'DELETE FROM video WHERE id=?'
    cur = conn.cursor()
    cur.execute(sql, (video_id,))
    conn.commit()
