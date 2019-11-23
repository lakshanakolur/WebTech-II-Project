#!/usr/bin/env python
import sys
sys.path.append('/Users/keertankrishnan/anaconda3')
from flask import Flask
from flask import jsonify
from flask import request
from flask_pymongo import PyMongo
from flask import render_template
from pymongo import MongoClient
from nltk.corpus import wordnet
import random
app = Flask(__name__,template_folder="templates")


client = MongoClient('127.0.0.1', 27017)
db = client["bull"]
global_word_id = -1
curr_diff = 1
words_used = []

@app.route('/',methods=['GET'])
def show_homepage():
  return render_template('index.html')

@app.route('/get_all_words', methods=['GET'])
def get_all_words():
  words_db = db["words"]
  output = []
  for s in words_db.find():
    output.append({"id":s["id"],"hindi_word":s["hindi_word"], "english_word":s["english_word"],"type":s["type"],"difficulty":s["difficulty"]})
  return jsonify({'result' : output,'current difficulty':curr_diff})


@app.route('/get_a_word', methods=['GET'])
def get_a_word():
  global global_word_id
  global curr_diff
  global words_used
  words_db = db["words"]
  qresult = words_db.find({"difficulty":str(curr_diff)})
  output = []
  for s in qresult:
    output.append({"id":s["id"],"hindi_word":s["hindi_word"], "english_word":s["english_word"],"type":s["type"],"difficulty":s["difficulty"]})
  rand_index = random.randint(0,len(output)-1)
  if(len(words_used)==15):
    return jsonify({'result' : 'NA'})
  while(output[rand_index]['id'] in words_used):
    rand_index = random.randint(0,len(output)-1)
  global_word_id = output[rand_index]['id']
  words_used.append(output[rand_index]['id'])
  return jsonify({'result' : output[rand_index],'words_used' : words_used,'rand_index' : rand_index,'gindex':global_word_id}) 

@app.route('/sem_sim/<answer>',methods = ['GET'])
def sem_sim(answer):
  global global_word_id
  global curr_diff
  global words_used
  #get word that user has put in
  #print(request.json)
  #user_word = request.json["answer"]
  user_word = answer
  print(user_word)
  words_db = db["words"]
  temp = global_word_id
  #temp += 1
  qresult = words_db.find_one({ "id" : str(global_word_id)})
  mongo_word = qresult["english_word"]
  if(user_word == mongo_word):
        if(curr_diff<3):
          curr_diff += 1
        return jsonify({'score' : float(1),'current difficulty': curr_diff})

    #wordnet.synsets('hot', pos=wordnet.NOUN)
  if(list(wordnet.synsets(user_word))==[]):
    score = 0
    if(curr_diff>1):
      curr_diff -= 1
    return jsonify({'score':score,'current difficulty': curr_diff})
  syn1 = wordnet.synsets(user_word)[0]
  syn2 = wordnet.synsets(mongo_word)[0]
  score = syn1.wup_similarity(syn2)
  if(score > 0.5):
    #if(curr_diff!=3):
    print('inside')
    curr_diff += 1
  else:
    if(curr_diff>1):
      curr_diff -= 1 
  return jsonify({'score':score,'current difficulty': curr_diff})
'''
@app.route('/star/', methods=['GET'])
def get_one_star(name):
  star = mongo.db.stars
  s = star.find_one({'name' : name})
  if s:
    output = {'name' : s['name'], 'distance' : s['distance']}
  else:
    output = "No such name"
  return jsonify({'result' : output})

@app.route('/addword', methods=['POST'])
def add_star():
  star = db["words"]
  name = request.json.get('name')
  distance = request.json['distance']
  star_id = star.insert({'name': name, 'distance': distance})
  new_star = star.find_one({'_id': star_id })
  output = {'name' : new_star['name'], 'distance' : new_star['distance']}
  return jsonify({'result' : output})
'''
if __name__ == '__main__':
    app.run(debug=True)