import json as js
import urllib2 as lib
import datetime as dat
import csv 
newdictlocation = {}
liveboslonglat ={}
newbusloc = {}
livebuslat = {}
livebuslong = {}
livebusfullgarbage = {}
latitudes= {}
longitudes = {}
pararmlong =0
paramlat = 0
dataset = open("shelter_locations.csv")
for row in csv.reader(dataset):

    nameofstreet = row[0]
    latitudes[nameofstreet] = float(row[4])
    longitudes[nameofstreet] = float(row[3])
     

def getStuff(longs,lats):
     pararmlong = float(longs)
     paramlat = float(lats)
     
     newdictlong =  {k:v for (k,v) in longitudes.items() if abs(pararmlong - v<=2) }
     newdictlat = {k:v for (k,v) in latitudes.items()  if abs(paramlat - v <= 2)}
     

     keys= ""
     for key in newdictlong.keys():
         keys = key
         newdictlocation.setdefault(key,[])
         newdictlocation[key].append(newdictlong.get(key))
         newdictlocation[key].append(newdictlat.get(key))
     return newdictlocation
#print(getStuff(-75.16402481,39.95162917))

def tracklocation():
#track location of nearest bus
    link =  "http://www3.septa.org/hackathon/TransitViewAll/"
    json_obj = lib.urlopen(link)

    dataset = js.load(json_obj)
    datetime = dat.datetime.now()
    for key in dataset:
        for i in dataset[key]:
         for keyz in i:
            
             for values in i[keyz]:
                 #direction
                    livebusfullgarbage = values
                    livebuslat[values['destination']] = float(values['lat'])
                    livebuslong[values['destination']] = float(values['lng'])
                 
         
               

                

                
    return livebuslat, livebuslong
    

    # print(dataset[key][0]["1"][0]['lat'])



def currenBus(longs, lats):
    tracklocation()
    pararmlong2 = float(longs)
    paramlat2 = float(lats)
     
    longdict_bus =  {k:v for (k,v) in livebuslat.items() if abs(pararmlong2 - v<=2) }
    latdict_bus= {k:v for (k,v) in livebuslong.items() if  abs(paramlat2 - v <=2)}

    for key in livebuslat.keys():
        newbusloc.setdefault(key,[])
        newbusloc[key].append(livebuslat.get(key))
        newbusloc[key].append(livebuslong.get(key))


    
        

    
    

    return newbusloc

def combine():
    fullbus = []
    fullbus.append(newbusloc)
    fullbus.append(newdictlocation)
    print fullbus

    return fullbus

 
 

   

 



                   


     
