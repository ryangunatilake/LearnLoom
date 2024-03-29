import requests
from db import video_repository

region = 'trial'


class VideoIndexer:
    def __init__(self, video_indexer_id, transcript, state):
        self.video_indexer_id = video_indexer_id
        self.transcript = transcript
        self.state = state

    def to_dict(self):
        return {
            'video_indexer_id': self.video_indexer_id,
            'transcript': self.transcript,
            'state': self.state,

        }


def get_access_token(account_id, subscription_key):
    url = f'https://api.videoindexer.ai/auth/{region}/Accounts/{account_id}/AccessToken'
    params = {
        'allowEdit': 'true'
    }
    headers = {
        'Ocp-Apim-Subscription-Key': subscription_key
    }
    print('calling get-access-token')
    response = requests.get(url, headers=headers, params=params)
    access_token = response.json()
    print('response: access-token', access_token)
    return access_token


def upload_video(access_token, account_id, video_path, video_name):
    url = f'https://api.videoindexer.ai/{region}/Accounts/{account_id}/Videos'
    params = {
        'name': video_name,
        'accessToken': access_token,
        # 'videoUrl': video_path,  # If uploading from URL. For file upload, use files parameter in requests.post
        'fileName': video_name  # Use this if you're uploading a file instead of passing videoUrl
    }
    # For file upload, uncomment below and comment out 'videoUrl' in params
    files = {'file': open(video_path, 'rb')}
    print('calling upload-video')
    response = requests.post(url, params=params, files=files)  # For file upload, add `, files=files` parameter
    upload_info = response.json()

    print("response: upload-video", upload_info)
    return upload_info


def get_video_index(access_token, account_id, video_id):
    url = f'https://api.videoindexer.ai/{region}/Accounts/{account_id}/Videos/{video_id}/Index'
    params = {
        'accessToken': access_token
    }
    print('calling get-video-index')
    response = requests.get(url, params=params)
    index_info = response.json()

    texts = [item['text'] for item in index_info['videos'][0]['insights']['transcript']]
    transcript = ' '.join(texts)
    print("response: transcript", transcript)
    print("response: state", index_info['state'])

    return VideoIndexer(video_id, transcript, index_info['state'])
