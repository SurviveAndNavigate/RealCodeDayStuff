<<<<<<< HEAD

from flask import Flask, render_template, flash, url_for
from flask import Request
from flask import request
from flask import flash
from flask import jsonify
import Septa as septa
import Food
import json
import sys
import os


app = Flask(__name__)
wsgi_app = app.wsgi_app
@app.route('/' , methods = ['GET','POST'])

def home():
   
             
	return render_template("main.html")

@app.route('/food', methods = ['GET', 'POST'])

def food():
     app.secret_key = os.urandom(24)

     try:
        if (request.method == "POST"):
            print "post"
           
            data = request.json
            food_data = Food.query(data.get('lat'),data.get('lng'))
            print food_data
            jsondump = json.dumps(food_data)


            print type (food_data)
           # print data
           ## jsonData =  json.loads(data)
           # print "JSON DATA"
           # print jsonData
           # print type(jsonData)
           # print type(jsonData.get('lat'))
           
           
            
            
            #print resultingdata
            #response = Flask.Reponse("hi")
           # error = none
            #json.dump(data, sys.stdout, indent =2)
            

            return jsondump
     except Exception as e:
        flash(e)


        return render_template("Hi2.html")
     return render_template("Hi2.html")






if __name__ == "__main__":
    import os

=======
from flask import Flask, request, render_template
usernames ={5:"hi"}

app = Flask(__name__)
wsgi_app = app.wsgi_app
@app.route('/')
def home():
	return render_template("index.html")

@app.route('/create') 
def create():
	pageType="create"
	return render_template("index.html",pageType = pageType, message = "test",user=usernames)

if __name__ == "__main__":
    import os
>>>>>>> bb4343cee70635ae555c22d3857aee8e5c6aefb5
    HOST = os.environ.get('SERVER_HOST','localhost')
    try:
        PORT = int(os.environ.get('SERVER_PORT', '5555'))
    except ValueError:
        PORT = 5555
<<<<<<< HEAD

    app.debug = True

    app.run()
    app.run(debug = True)

=======
    app.run()
    app.run(debug = True)
>>>>>>> bb4343cee70635ae555c22d3857aee8e5c6aefb5