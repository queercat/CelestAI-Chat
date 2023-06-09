import dotenv
import os
from flask import Flask
import completion
import logging

dotenv.load_dotenv(os.path.join(os.path.dirname(__file__), ".env"))

app = Flask(__name__)
completion_controller = None

@app.route('/chat/<string:prompt>')
def chat(prompt):
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
    
  app.run()
