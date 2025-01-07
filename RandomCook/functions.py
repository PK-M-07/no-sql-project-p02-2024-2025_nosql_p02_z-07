from tkinter import messagebox
from pymongo import MongoClient
import customtkinter as ctk
import tkinter as tk
from tkinter import Toplevel
from datetime import datetime
import random








    # READ
def readMealRecipe():   
    # odczytanie wybrnej przez użytkownika receptury
    # zapytanie db.kolekcja.find()
    pass


def showRecipe(app, mainFrame):
    # ta funkcja chyba jako metoda powinna być wywoływana na obiektach typu FrameWithRecipe które pokazują zawartość receptury
    new_window = Toplevel(app)  
    new_window.title("Nowe okno")  
    new_window.geometry("500x650")

    label = tk.Label(new_window, text="To jest nowe okno!")
    label.pack(pady=20)




 
        

    
    

