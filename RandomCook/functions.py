from tkinter import messagebox
from pymongo import MongoClient
import customtkinter as ctk
import tkinter as tk
from tkinter import Toplevel
from datetime import datetime
import random





def showRecipe(app):
    # ta funkcja chyba jako metoda powinna być wywoływana na obiektach typu FrameWithRecipe które pokazują zawartość receptury
    new_window = Toplevel(app)  
    new_window.title("Nowe okno")  
    new_window.geometry("500x650")

    label = tk.Label(new_window, text="To jest nowe okno!")
    label.pack(pady=20)



    # READ
def readMealRecipe():   
    # odczytanie wybrnej przez użytkownika receptury
    # zapytanie db.kolekcja.find()
    pass





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
        

    
    

