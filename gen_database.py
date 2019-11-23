from pymongo import MongoClient
client = MongoClient('127.0.0.1', 27017)
client.drop_database('bull')
db = client['bull']

words = db['words']

words.insert_one({"id":"1","hindi_word":"संख्या","english_word":"number","type":"NOUN","difficulty":"1"})
words.insert_one({"id":"2","hindi_word":"ध्वनि","english_word":"sound","type":"NOUN","difficulty":"1"})
words.insert_one({"id":"3","hindi_word":"समस्या","english_word":"problem","type":"NOUN","difficulty":"1"})
words.insert_one({"id":"4","hindi_word":"सड़क","english_word":"street","type":"NOUN","difficulty":"1"})
words.insert_one({"id":"5","hindi_word":"चांद","english_word":"moon","type":"NOUN","difficulty":"1"})
words.insert_one({"id":"6","hindi_word":"सूखा","english_word":"dry","type":"NOUN","difficulty":"1"})
words.insert_one({"id":"7","hindi_word":"सागर","english_word":"ocean","type":"NOUN","difficulty":"1"})
words.insert_one({"id":"8","hindi_word":"खिड़की","english_word":"window","type":"NOUN","difficulty":"1"})
words.insert_one({"id":"9","hindi_word":"दुकान","english_word":"shop","type":"NOUN","difficulty":"1"})
words.insert_one({"id":"10","hindi_word":"प्रकृति","english_word":"nature","type":"NOUN","difficulty":"1"})

words.insert_one({"id":"11","hindi_word":"तापमान","english_word":"temperature","type":"NOUN","difficulty":"2"})
words.insert_one({"id":"12","hindi_word":"रेगिस्तान","english_word":"desert","type":"NOUN","difficulty":"2"})
words.insert_one({"id":"13","hindi_word":"विदूषक","english_word":"joker","type":"NOUN","difficulty":"2"})
words.insert_one({"id":"14","hindi_word":"दुविधा","english_word":"problem","type":"NOUN","difficulty":"2"})
words.insert_one({"id":"15","hindi_word":"गगनचुंबी","english_word":"skyscraper","type":"NOUN","difficulty":"2"})
words.insert_one({"id":"16","hindi_word":"संदर्भ","english_word":"context","type":"NOUN","difficulty":"2"})
words.insert_one({"id":"17","hindi_word":"अभिरुचि","english_word":"hobby","type":"NOUN","difficulty":"2"})
words.insert_one({"id":"18","hindi_word":"वरदान","english_word":"boon","type":"NOUN","difficulty":"2"})
words.insert_one({"id":"19","hindi_word":"अवसर","english_word":"chance","type":"NOUN","difficulty":"2"})
words.insert_one({"id":"20","hindi_word":"नाप","english_word":"measure","type":"NOUN","difficulty":"2"})

words.insert_one({"id":"21","hindi_word":"अभिशाप","english_word":"curse","type":"NOUN","difficulty":"3"})
words.insert_one({"id":"22","hindi_word":"फुसलाना","english_word":"cajole","type":"NOUN","difficulty":"3"})
words.insert_one({"id":"23","hindi_word":"तथ्य","english_word":"fact","type":"NOUN","difficulty":"3"})
words.insert_one({"id":"24","hindi_word":"अपवाद","english_word":"calumny","type":"NOUN","difficulty":"3"})
words.insert_one({"id":"25","hindi_word":"उपहास","english_word":"deride","type":"NOUN","difficulty":"3"})
words.insert_one({"id":"26","hindi_word":"दूरसंचार","english_word":"telecom","type":"NOUN","difficulty":"3"})
words.insert_one({"id":"27","hindi_word":"क्रेता","english_word":"customer","type":"NOUN","difficulty":"3"})
words.insert_one({"id":"28","hindi_word":"उन्माद","english_word":"frenzy","type":"NOUN","difficulty":"3"})
words.insert_one({"id":"29","hindi_word":"अपवित्रा","english_word":"desecrate","type":"VERB","difficulty":"3"})
words.insert_one({"id":"30","hindi_word":"आधिपत्य","english_word":"hegemony","type":"NOUN","difficulty":"3"})

'''words.insert_one({"uid":"u2","name":"name2","username": "customer2", "password": "5F4DCC3B5AA765D61D8327DEB882CF99", "account_type": "Customer","wallet":5000,"iid":"i1"})
words.insert_one({"uid":"u3","name":"name3","username": "customer3", "password": "5F4DCC3B5AA765D61D8327DEB882CF99", "account_type": "Customer","wallet":5000,"iid":"i2"})
words.insert_one({"uid":"u4","name":"name4","username": "customer4", "password": "5F4DCC3B5AA765D61D8327DEB882CF99", "account_type": "Customer","wallet":5000,"iid":"i2"})
words.insert_one({"uid":"u5","name":"name5","username": "customer5", "password": "5F4DCC3B5AA765D61D8327DEB882CF99", "account_type": "Customer","wallet":5000,"iid":"i2"})

words.insert_one({"uid":"u6","username": "canteen1", "password": "5F4DCC3B5AA765D61D8327DEB882CF99", "account_type": "Canteen","iid":"i1"})
words.insert_one({"uid":"u7","username": "canteen2", "password": "5F4DCC3B5AA765D61D8327DEB882CF99", "account_type": "Canteen","iid":"i1"})
words.insert_one({"uid":"u8","username": "canteen3", "password": "5F4DCC3B5AA765D61D8327DEB882CF99", "account_type": "Canteen","iid":"i2"})
words.insert_one({"uid":"u9","username": "canteen4", "password": "5F4DCC3B5AA7i65D61D8327DEB882CF99", "account_type": "Canteen","iid":"i2"})
words.insert_one({"uid":"u10","username": "canteen5", "password": "5F4DCC3B5AA765D61D8327DEB882CF99", "account_type": "Canteen","iid":"i2"})

words.insert_one({"uid":"u11","username": "caterer1", "password": "5F4DCC3B5AA765D61D8327DEB882CF99", "account_type": "Caterer"})
words.insert_one({"uid":"u12","username": "caterer2", "password": "5F4DCC3B5AA765D61D8327DEB882CF99", "account_type": "Caterer"})
words.insert_one({"uid":"u13","username": "caterer3", "password": "5F4DCC3B5AA765D61D8327DEB882CF99", "account_type": "Caterer"})
words.insert_one({"uid":"u14","username": "caterer4", "password": "5F4DCC3B5AA765D61D8327DEB882CF99", "account_type": "Caterer"})
words.insert_one({"uid":"u15","username": "caterer5", "password": "5F4DCC3B5AA765D61D8327DEB882CF99", "account_type": "Caterer"})

words.insert_one({"uid":"u16","username": "institute1", "password": "5F4DCC3B5AA765D61D8327DEB882CF99", "account_type": "Institution"})
words.insert_one({"uid":"u17","username": "institute2", "password": "5F4DCC3B5AA765D61D8327DEB882CF99", "account_type": "Institution"})


words.insert_one({"uid":"u18","username": "delivery1", "password": "5F4DCC3B5AA765D61D8327DEB882CF99", "account_type": "Delivery"})
words.insert_one({"uid":"u19","username": "delivery2", "password": "5F4DCC3B5AA765D61D8327DEB882CF99", "account_type": "Delivery"})
words.insert_one({"uid":"u20","username": "delivery3", "password": "5F4DCC3B5AA765D61D8327DEB882CF99", "account_type": "Delivery"})
words.insert_one({"uid":"u21","username": "delivery4", "password": "5F4DCC3B5AA765D61D8327DEB882CF99", "account_type": "Delivery"})
words.insert_one({"uid":"u22","username": "delivery5", "password": "5F4DCC3B5AA765D61D8327DEB882CF99", "account_type": "Delivery"})


'''
