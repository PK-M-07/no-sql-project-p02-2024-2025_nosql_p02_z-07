from pymongo import MongoClient
import random

client = MongoClient('mongodb://localhost:27017/')
db = client['przepisy'] 

iloscDniDiety = "3"

czyPrzekaski = True
czyDesery = False
czyWege = False


if czyWege == True:
    AllSnidaniaID = [x.get("_id") for x in db.śniadania.find({"isVege": True},{"_id":1}).sort({"_id":1})]
    wylosowaneSniadaniaID = random.sample(AllSnidaniaID, k=int(iloscDniDiety))

    AllObiadyID = [x.get("_id") for x in db.obiady.find({"isVege": True},{"_id":1}).sort({"_id":1})]
    wylosowaneObiadyID = random.sample(AllObiadyID, k=int(iloscDniDiety))

    AllKolacjeID = [x.get("_id") for x in db.kolacje.find({"isVege": True},{"_id":1}).sort({"_id":1})]
    wylosowaneKolacjeID = random.sample(AllKolacjeID, k=int(iloscDniDiety))

else:
    AllSnidaniaID = [x.get("_id") for x in db.śniadania.find({"isVege": False},{"_id":1}).sort({"_id":1})]
    wylosowaneSniadaniaID = random.sample(AllSnidaniaID, k=int(iloscDniDiety))

    AllObiadyID = [x.get("_id") for x in db.obiady.find({"isVege": False},{"_id":1}).sort({"_id":1})]
    wylosowaneObiadyID = random.sample(AllObiadyID, k=int(iloscDniDiety))

    AllKolacjeID = [x.get("_id") for x in db.kolacje.find({"isVege": False},{"_id":1}).sort({"_id":1})]
    wylosowaneKolacjeID = random.sample(AllKolacjeID, k=int(iloscDniDiety))



wylosowaneSniadania = []
wylosowaneObiady = []
wylosowaneKolacje = []


for i in range(int(iloscDniDiety)):
    tekstS = [x for x in db.śniadania.find({"_id":wylosowaneSniadaniaID[i]}, {"_id": 0, "createdAt":0, "updatedAt":0})]
    przepisS = f'{tekstS[0]["name"]}\n{tekstS[0]["ingredients"]}\n{tekstS[0]["instructions"]}\n{tekstS[0]["prep_time"]}\n{tekstS[0]["calories"]}\n{tekstS[0]["isVege"]}'
    
    tekstO = [x for x in db.śniadania.find({"_id":wylosowaneObiadyID[i]}, {"_id": 0, "createdAt":0, "updatedAt":0})]
    przepisO = f'{tekstO[0]["name"]}\n{tekstO[0]["ingredients"]}\n{tekstO[0]["instructions"]}\n{tekstO[0]["prep_time"]}\n{tekstO[0]["calories"]}\n{tekstO[0]["isVege"]}'

    tekstK = [x for x in db.śniadania.find({"_id":wylosowaneKolacjeID[i]}, {"_id": 0, "createdAt":0, "updatedAt":0})]
    przepisK = f'{tekstK[0]["name"]}\n{tekstK[0]["ingredients"]}\n{tekstK[0]["instructions"]}\n{tekstK[0]["prep_time"]}\n{tekstK[0]["calories"]}\n{tekstK[0]["isVege"]}'
    
    wylosowaneSniadania.append(przepisS)
    wylosowaneObiady.append(przepisO)
    wylosowaneKolacje.append(przepisK)


if czyPrzekaski == True:
    if czyWege == True:
        AllPrzekaskiID = [x.get("_id") for x in db.przekąski.find({"isVege": True},{"_id":1}).sort({"_id":1})]
    else:
        AllPrzekaskiID = [x.get("_id") for x in db.przekąski.find({"isVege": False},{"_id":1}).sort({"_id":1})]

    wylosowanePrzekaskiID = random.sample(AllPrzekaskiID, k=int(iloscDniDiety))
    wylosowanePrzekaski = []

    for i in range(int(iloscDniDiety)):
        tekst = [x for x in db.przekąski.find({"_id":wylosowanePrzekaskiID[i]}, {"_id": 0, "createdAt":0, "updatedAt":0})]
        przepis = f'{tekst[0]["name"]}\n{tekst[0]["ingredients"]}\n{tekst[0]["instructions"]}\n{tekst[0]["prep_time"]}\n{tekst[0]["calories"]}\n{tekst[0]["isVege"]}'
        wylosowanePrzekaski.append(przepis)
    

if czyDesery == True:
    if czyWege == True:
        AllDeseryID = [x.get("_id") for x in db.desery.find({"isVege": True},{"_id":1}).sort({"_id":1})]
    else:
        AllDeseryID = [x.get("_id") for x in db.desery.find({"isVege": False},{"_id":1}).sort({"_id":1})]
    
    wylosowaneDeseryID = random.sample(AllDeseryID, k=int(iloscDniDiety))
    wylosowaneDesery = []

    for i in range(int(iloscDniDiety)):
        tekst = [x for x in db.desery.find({"_id":wylosowaneDeseryID[i]}, {"_id": 0, "createdAt":0, "updatedAt":0})]
        przepis = f'{tekst[0]["name"]}\n{tekst[0]["ingredients"]}\n{tekst[0]["instructions"]}\n{tekst[0]["prep_time"]}\n{tekst[0]["calories"]}\n{tekst[0]["isVege"]}'
        wylosowaneDesery.append(przepis)




# print(len(wylosowaneSniadania))
# print(len(wylosowaneObiady))
# print(len(wylosowaneKolacje))
# print(len(wylosowanePrzekaski))


# print(type(wylosowaneSniadania))
# print(type(wylosowaneObiady))
# print(type(wylosowaneKolacje))
# print(type(wylosowanePrzekaski))


print(wylosowaneSniadania[0])
print(wylosowaneSniadania[1])
print(wylosowaneSniadania[2])
# print(wylosowaneObiady)
# print(wylosowaneKolacje)
# print(wylosowanePrzekaski)


# print(wylosowaneDesery)

