import customtkinter as ctk
import tkinter as tk
from classes import *
from functions import *


def createMainWindow():
    ctk.set_appearance_mode("dark") 
    ctk.set_default_color_theme("green")
    ctk.deactivate_automatic_dpi_awareness()


    app = ctk.CTk()
    app.title("Random cook - ")
    app.iconbitmap('images/chef.ico')
    app.geometry("900x600")
    app.resizable(False, False)
    width = 900
    height = 600
    screen_width = app.winfo_screenwidth()
    screen_height = app.winfo_screenheight()
    position_top = int(screen_height / 2 - height / 2) - 50
    position_left = int(screen_width / 2 - width / 2)
    app.geometry(f"{width}x{height}+{position_left}+{position_top}")
    app.resizable(False, False)

    numbers = ["1","2","3","4","5","6","7"]

    numbersOfDays = tk.StringVar()
    isVege = tk.BooleanVar()
    czyPrzekaski = tk.BooleanVar()

                            # -------------- COMPONENTS -----------------
    shaffleButton = ctk.CTkButton(app, text="Losuj dania", command=lambda: shuffleMealPlan(naIleDniCombobox,czyWegeCheckbox, czyPrzekaskiChecbox, czyDeseryCheckbox), corner_radius=50, fg_color='green', hover_color='#49cc49')
    shaffleButton.place(relx=0.5, rely=0.9, anchor=tk.CENTER)

    addMealButton = ctk.CTkButton(app,text="Dodaj potrawe", command=lambda: openAddRecipeWindow(app), corner_radius=50, fg_color='green', hover_color='#49cc49')
    addMealButton.place(relx=0.8, rely=0.9, anchor=tk.CENTER)

    updateRecipeButton = ctk.CTkButton(app, text="Zaaktualizuj przepis", command=lambda: openUpdateRecipeWindow(app), corner_radius=50, fg_color="green", hover_color='#49cc49')
    updateRecipeButton.place(relx=0.2, rely=0.9, anchor=tk.CENTER)

    mainLabel = ctk.CTkLabel(app,text="Nigdy więcej nie myśl co by tu dziś ugotować",height=25, width=25, font=("Helvetica", 20))
    mainLabel.place(relx= 0.5, rely=0.05, anchor=tk.CENTER)

    textLabel = ctk.CTkLabel(app, text="wylosuj dania na cały tydzień spośród spersonalizowanej bazy przepisów", height=25, width=250, font=("Helvetica", 16))
    textLabel.place(relx=0.23, rely=0.08)

    naIleDniLabel = ctk.CTkLabel(app, text="Na ile dni dieta", height=25, width=25, font=("Helvetica", 15))
    naIleDniLabel.place(relx=0.21, rely=0.19)

    naIleDniCombobox = ctk.CTkComboBox(app, values=numbers, variable=numbersOfDays, width=100, height=30, font=("Arial", 16), state="readonly")
    naIleDniCombobox.place(relx=0.08, rely=0.19)

    czyPrzekaskiChecbox = ctk.CTkCheckBox(app,text="Czy przękąski", variable=czyPrzekaski, width=100, height=35)
    czyPrzekaskiChecbox.place(relx=0.4, rely=0.19)

    czyWegeCheckbox = ctk.CTkCheckBox(app, text="Czy wege", variable=isVege, width=100, height=35)
    czyWegeCheckbox.place(relx=0.6, rely=0.19)

    czyDeseryCheckbox = ctk.CTkCheckBox(app, text="Czy desery", width=100, height=35) 
    czyDeseryCheckbox.place(relx=0.8, rely=0.19)

    mainFrame = ctk.CTkFrame(app, width=800, height=700) # fg_color=
    mainFrame.pack(pady=160)
    mainFrame.bind("<Button-1>", lambda event: showRecipe(app))
    
            # pobranie wartości z checkboxów 
    # naIleDniComoboxVal = naIleDniCombobox.get()
    # vegeCheckboxVal = czyWegeCheckbox.get()
    # deseryCheckboxVal = czyDeseryCheckbox.get()
    # przekaskiCheckboxVal = czyPrzekaskiChecbox.get()

    app.mainloop()


# ---------------- OPENERY -----------------------------

def openAddRecipeWindow(app):
    newWindow = AddRecipeWindow(app)


def openUpdateRecipeWindow(app):
    newWindow = UpdateRecipeWindow(app)






