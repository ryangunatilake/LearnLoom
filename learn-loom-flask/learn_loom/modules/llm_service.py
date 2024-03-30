## pip install openai==0.28
import json
import requests
from flask import jsonify


def invoke_llm(text_content):
    print('invoking llm-service')


    url = 'https://api.openai.com/v1/chat/completions'

    payload = json.dumps({
        "model": "gpt-3.5-turbo",
        "messages": [
            {
                "role": "user",
                "content": text_content
            }
        ],
        "temperature": 0.7
    })
    headers = {

        'Content-Type': 'application/json',
        'Authorization': '',

        '
    }
    response = requests.post(url, headers=headers, data=payload)
    print('chat gpt response: ', response.json())
    response_text = response.json()['choices'][0]['message']['content']

    print('response_text: ', response_text)

    return response_text
