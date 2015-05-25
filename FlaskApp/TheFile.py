from urllib2 import urlopen
from contextlib import closing
import json
import Food
import pygmaps
import Septa
import Hotes



# Automatically geolocate the connecting IP
url = 'http://freegeoip.net/json/'
with closing(urlopen(url)) as response:
     location = json.loads(response.read())
     fat = location['latitude']
     rat = location['longitude']



def ihopethisshitwrosk():
    Food.query(fat,rat)
    title = "ur here"
    mymap = pygmaps.maps(fat,rat,20)
    mymap.addpoint(fat, rat,"Sr")
    for k,v in Food.query(fat,rat).items():
        mymap.addpoint(k,v,"#0000FF")
   
    mymap.draw("./mymap.html")



def septa():
   print( Septa.currenBus(rat,fat))
  
septa()

ihopethisshitwrosk()   
print(Hotes.badQuery(fat,rat))


 
       
        

        
        
   
 



    
 
