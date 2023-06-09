from flask import Flask

app = Flask(__name__)

@app.route('/chat/<string:prompt>')
def chat(prompt):
    return prompt

if __name__ == '__main__':
  app.run()
