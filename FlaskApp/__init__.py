
from flask import Flask
app = Flask(__name__)
@app.root('/hello')
def home():
	return "clow"

if __main__ == "__main__":
	app.run()
	
