import csv
import urllib2
import json
import rauth
def badQuery(lat,long):
   consumer_key = 'Bm5tlDFtTlQH3Zvm7C1ktQ'
   consumer_secret= 'o8LAZFXXX3DQPDbzYwlGPCfLuV8'
   token = '7WgazPtUgf044YDubVpva4GV8J6t4OXc'
   token_secret ='iPTAd0rLljULzspC-UKA9VOeXqw'
   params = {} 
   params['terms'] = "Hotel"
   params["ll"] = "{},{}".format(str(lat),str(long))
   params["limit"] = 20
   params["radius_filter"] = 1000

   session = rauth.OAuth1Session(
   consumer_key = consumer_key 
   ,consumer_secret = consumer_secret
   ,access_token = token
   ,access_token_secret = token_secret)

   url = 'http://api.yelp.com/v2/search/'
   request = session.get(url,params=params)
   data = request.json()
   session.close()
   cruppylist= {}
 

   for nonsense in data['businesses']:
            cruppylist[nonsense['name']] = nonsense['rating']
   return cruppylist

    
