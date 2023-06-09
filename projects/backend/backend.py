import dotenv
import os
from flask import Flask
from flask import request
from flask_cors import CORS
import completion
import logging

dotenv.load_dotenv(os.path.join(os.path.dirname(__file__), ".env"))

app = Flask(__name__)
CORS(app)
completion_controller = None

@app.route('/chat/', methods=['POST'])
def chat():
  content = request.json
  prompt = content['prompt']
  
  if completion is None:
    logging.error('completions controller is not initialized')
    return ''

  prompt = prompt.strip() + " ->"

  try:
    response = completion_controller.complete(prompt)
    return response
  except:
    logging.error('completion failed')
    return "Completion failed :(", 500

if __name__ == '__main__':
  OPENAI_API_KEY = os.getenv('OPENAI_API_KEY')
  try:
    completion_controller = completion.CompletionController(api_key=OPENAI_API_KEY)
  except:
    completion.abort('Unable to initialize CompletionController')
    
  app.run(host='0.0.0.0')
