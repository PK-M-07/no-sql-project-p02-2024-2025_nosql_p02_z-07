from pymongo import MongoClient

client = MongoClient('mongodb://localhost:27017/')
db = client['przepisy'] 

snidaniaID = [x.get("_id") for x in db.śniadania.find({},{"_id":1}).sort({"_id":1})]
obiadyID = [x.get("_id") for x in db.obiady.find({},{"_id":1}).sort({"_id":1})]
kolacjeID = [x.get("_id") for x in db.kolacje.find({},{"_id":1}).sort({"_id":1})]
przekaskiID = [x.get("_id") for x in db.przekąski.find({},{"_id":1}).sort({"_id":1})]
deseryID = [x.get("_id") for x in db.desery.find({},{"_id":1}).sort({"_id":1})]

# print(snidaniaID)
# print(obiadyID)
# print(kolacjeID)
# print(przekaskiID)
# print(deseryID)

tekst = [x for x in db.desery.find({"_id":1}, {"_id": 0, "createdAt":0, "updatedAt":0})]
przepis = f'{tekst[0]["name"]}\n{tekst[0]["ingredients"]}\n{tekst[0]["instructions"]}\n{tekst[0]["prep_time"]}\n{tekst[0]["calories"]}\n{tekst[0]["isVege"]}'
print(przepis)
print(type(przepis))


wylosowanieSniadania = []
wylosowanieObiady = []
wylosowanieKolacje = []
wylosowaniePrzekaski = []
wylosowanieDesery = []

