import openai
import logging

def abort(msg):
  logging.error(msg)
  exit(1)

class CompletionController:
  def __init__(self, api_key=None):
    self.api_key = api_key
    if self.api_key is None: abort('OPENAI_API_KEY is not set')
    openai.api_key = self.api_key

  def complete(self, prompt, max_tokens=150, temperature=0.8, top_p=1, frequency_penalty=0.2, stop=["\n", "\r"]):
    logging.debug('prompt: %s', prompt)

    if prompt is None:
      return {"error": "prompt is required"}
    
    response = openai.Completion.create(
      model="curie:ft-personal-2023-06-09-09-05-53",
      prompt=prompt,
      max_tokens=max_tokens,
      temperature=temperature,
      top_p=top_p,
      frequency_penalty=frequency_penalty,
      stop=stop
    )

    return {
      "message":response.choices[0].text.strip(),
    }
