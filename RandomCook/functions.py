from tkinter import messagebox
from pymongo import MongoClient
import customtkinter as ctk
import tkinter as tk
from tkinter import Toplevel
import random


    # Globalne połączenie z bazą danych MongoDB na localhost
client = MongoClient('mongodb://localhost:27017/')
db = client['przepisy'] 


def showRecipe(app):
    # ta funkcja chyba jako metoda powinna być wywoływana na obiektach typu FrameWithRecipe które pokazują zawartość receptury
    new_window = Toplevel(app)  
    new_window.title("Nowe okno")  
    new_window.geometry("500x650")

    label = tk.Label(new_window, text="To jest nowe okno!")
    label.pack(pady=20)


    # CREATE
def addNewMeal(recipeNameEntry, mealCategoryEntry, kcalEntry, prepTimeEntry, czyWegeCheckbox, ingredientsList, recipeEntry):
    # ogarnąć wstawianie dla ingredients
    # wywołanie test function z boolem true zwraca błąd a false kontuje pobranie danych i zapis do bazy danych

    recipeName = recipeNameEntry.get()
    mealCategory = mealCategoryEntry.get()
    kcal = kcalEntry.get()
    prepTime = prepTimeEntry.get()
    isVege = czyWegeCheckbox.get()
    recipe = recipeEntry.get("1.0", "end-1c") 

    if any(x == "" for x in [kcal, prepTime]):
        kcal = ""
        prepTimeEntry = ""
    else:
        kcal = int(kcalEntry.get())
        prepTime = int(prepTimeEntry.get())

    if any(field == "" for field in [recipeName, mealCategory, kcal, prepTime, isVege, recipe]) or len(ingredientsList) == 0:
        messagebox.showerror("Error", "Nie poddano wszytkich wymaganych wartości - Każde pole musi być podane")
    elif kcal <= 100 or prepTime <= 1:
        if kcal <= 100:
            messagebox.showerror("Error", "Wartości kalori musi być większa niż 100")
        else:
            messagebox.showerror("Error", "Czas przygotowanie nie może być mniejszy niż 1 minuta")
    else:
        ingredientsObjects =[]

        for i in range(len(ingredientsList)):
            ingredient = {}
            ingredient.update({"name": ingredientsList[i][0]})

            if len(ingredientsList[i]) == 1:
                pass
            elif len(ingredientsList[i]) == 2:
                if isinstance(ingredientsList[i][1], int):
                    ingredient.update({"quantity": ingredientsList[i][1]})

                elif isinstance(ingredientsList[i][1], str):
                    ingredient.update({"unit": ingredientsList[i][1]})
            else: 
                ingredient.update({"quantity": ingredientsList[i][1], "unit": ingredientsList[i][2]})
            
            ingredientsObjects.append(ingredient)

        collectionName = db[mealCategory] 
        currentID = collectionName.count_documents({}) + 1

        dokument = {
            "_id": currentID,
            "name": recipeName,
            "ingredients": ingredientsObjects,
            "instructions": recipe,
            "meal_type": mealCategory,
            "prep_time": prepTime,
            "calories": kcal,
            "isVege": bool(isVege)
        }

        collectionName.insert_one(dokument)
        
            # Sprawdzenie zmiennych
        # print("Nazwa przepisu:", recipeName)
        # print("Kategoria przepisu:", mealCategory)
        # print("Ilość kalori:", kcal)
        # print("Czas przygotowania:", prepTime)
        # print("Czy vege: ", isVege)
        # print("Przygotowanie:", recipe)
        # print(ingredientsObjects)
        # print(dokument)


    # READ
def readMealRecipe():   
    # odczytanie wybrnej przez użytkownika receptury
    # zapytanie db.kolekcja.find()
    pass


    # UPDATE
def updateRecipe():   
    print("Updatownie !")


    # DELETE
def deleteCurrentMeal():  
    pass


    # funcja losująca na każdy wybrany dzień posiłki według kategorii
def shuffleMealPlan(naIleDniCombobox, czyWegeCheckbox, czyPrzekaskiChecbox, czyDeseryCheckbox):
    iloscDniDiety = naIleDniCombobox.get()
    isVege = czyWegeCheckbox.get()
    czyPrzekaski = czyPrzekaskiChecbox.get()
    czyDesery = czyDeseryCheckbox.get()

    if iloscDniDiety == "":
        #czyDeseryCheckbox.configure(fg_color="red")
        messagebox.showerror("Error", "Należy podać na ile dni rozpisać diete")
    else:
        print(iloscDniDiety)
        print(czyPrzekaski)
        print(isVege)
        print(czyDesery)
        

    


#     # funkcja do wyśwetlania okienka formularza do dodowania posiłków
# def addNewRecipeWindow(app):
#     def addToIngredients(addMealWindow):
#         # wywołanie okna

#         addIngredientsWindow = ctk.CTkToplevel(addMealWindow)
#         addIngredientsWindow.title("Dodawanie składników")
#         width = 400
#         height = 250
#         screen_width = addIngredientsWindow.winfo_screenwidth()
#         screen_height = addIngredientsWindow.winfo_screenheight()
#         position_top = int(screen_height / 2 - height / 2) - 50
#         position_left = int(screen_width / 2 - width / 2)
#         addIngredientsWindow.geometry(f"{width}x{height}+{position_left}+{position_top}")
#         addIngredientsWindow.resizable(False, False)


#         addIngredientsWindow.grab_set()
#         addIngredientsWindow.wait_window(addIngredientsWindow)
        # odczytanie z pol w oknie które stworzy 
        # dodanie tego do TextBoxa w trybie disable w jedenej lini oddzielone spacją 
        
    
    


    