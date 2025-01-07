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
    shaffleButton = ctk.CTkButton(app, text="Losuj dania", command=lambda: shuffleMealPlan(app, mainFrame, naIleDniCombobox,czyWegeCheckbox, czyPrzekaskiChecbox, czyDeseryCheckbox), corner_radius=50, fg_color='green', hover_color='#49cc49')
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

    mainFrame = ctk.CTkFrame(app, width=800, height=700)
    mainFrame.pack(pady=160)
    mainFrame.bind("<Button-1>", lambda event: showRecipe(app, mainFrame))
    
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


   
def shuffleMealPlan(app, mainFrame, naIleDniCombobox, czyWegeCheckbox, czyPrzekaskiChecbox, czyDeseryCheckbox):
    # funcja losująca na każdy wybrany dzień posiłki według kategorii
    iloscDniDiety = naIleDniCombobox.get()
    isVege = czyWegeCheckbox.get()
    czyPrzekaski = czyPrzekaskiChecbox.get()
    czyDesery = czyDeseryCheckbox.get()


    if iloscDniDiety == "":
        messagebox.showerror("Error", "Należy podać na ile dni rozpisać diete")
    else:
        AllSnidaniaID = [x.get("_id") for x in db.śniadania.find({},{"_id":1}).sort({"_id":1})]
        wylosowanieSniadaniaID = random.sample(AllSnidaniaID, k=int(iloscDniDiety))

        AllObiadyID = [x.get("_id") for x in db.obiady.find({},{"_id":1}).sort({"_id":1})]
        wylosowanieObiadyID = random.sample(AllObiadyID, k=int(iloscDniDiety))

        AllKolacjeID = [x.get("_id") for x in db.kolacje.find({},{"_id":1}).sort({"_id":1})]
        wylosowanieKolacjeID = random.sample(AllKolacjeID, k=int(iloscDniDiety))

        wylosowanieSniadania = []
        wylosowanieObiady = []
        wylosowanieKolacje = []

        for i in range(int(iloscDniDiety)):
            tekstS = [x for x in db.śniadania.find({"_id":wylosowanieSniadaniaID[i]}, {"_id": 0, "createdAt":0, "updatedAt":0})]
            przepisS = f'{tekst[0]["name"]}\n{tekst[0]["ingredients"]}\n{tekst[0]["instructions"]}\n{tekst[0]["prep_time"]}\n{tekst[0]["calories"]}\n{tekst[0]["isVege"]}'
            
            tekstO = [x for x in db.śniadania.find({"_id":wylosowanieObiadyID[i]}, {"_id": 0, "createdAt":0, "updatedAt":0})]
            przepisO = f'{tekst[0]["name"]}\n{tekst[0]["ingredients"]}\n{tekst[0]["instructions"]}\n{tekst[0]["prep_time"]}\n{tekst[0]["calories"]}\n{tekst[0]["isVege"]}'

            tekstK = [x for x in db.śniadania.find({"_id":wylosowanieKolacjeID[i]}, {"_id": 0, "createdAt":0, "updatedAt":0})]
            przepisK = f'{tekst[0]["name"]}\n{tekst[0]["ingredients"]}\n{tekst[0]["instructions"]}\n{tekst[0]["prep_time"]}\n{tekst[0]["calories"]}\n{tekst[0]["isVege"]}'
            
            wylosowanieSniadania.append(przepisS)
            wylosowanieObiady.append(przepisO)
            wylosowanieKolacje.append(przepisK)


        if czyPrzekaski == True:
            AllPrzekaskiID = [x.get("_id") for x in db.przekąski.find({},{"_id":1}).sort({"_id":1})]
            wylosowaniePrzekaskiID = random.sample(AllPrzekaskiID, k=int(iloscDniDiety))
            wylosowaniePrzekaski = []

            for i in range(int(iloscDniDiety)):
                tekst = [x for x in db.przekąski.find({"_id":i+wylosowaniePrzekaskiID[i]}, {"_id": 0, "createdAt":0, "updatedAt":0})]
                przepis = f'{tekst[0]["name"]}\n{tekst[0]["ingredients"]}\n{tekst[0]["instructions"]}\n{tekst[0]["prep_time"]}\n{tekst[0]["calories"]}\n{tekst[0]["isVege"]}'
                wylosowaniePrzekaski.append(przepis)
            

        if czyDesery == True:
            AllDeseryID = [x.get("_id") for x in db.desery.find({},{"_id":1}).sort({"_id":1})]
            wylosowanieDeseryID = random.sample(AllDeseryID, k=int(iloscDniDiety))
            wylosowanieDesery = []

            for i in range(int(iloscDniDiety)):
                tekst = [x for x in db.desery.find({"_id":wylosowanieDeseryID[i]}, {"_id": 0, "createdAt":0, "updatedAt":0})]
                przepis = f'{tekst[0]["name"]}\n{tekst[0]["ingredients"]}\n{tekst[0]["instructions"]}\n{tekst[0]["prep_time"]}\n{tekst[0]["calories"]}\n{tekst[0]["isVege"]}'
                wylosowanieDesery.append(przepis)

        

        
        
        
        
        
        
        tekst = [x for x in db.desery.find_one({"_id":1}, {"_id": 0, "createdAt":0, "updatedAt":0})]
        przepis = f'{tekst[0]["name"]}\n{tekst[0]["ingredients"]}\n{tekst[0]["instructions"]}\n{tekst[0]["prep_time"]}\n{tekst[0]["calories"]}\n{tekst[0]["isVege"]}'
        print(przepis)

        texts_frame1 = ["Napis 1 w ramce 1", "Napis 2 w ramce 1"]
        texts_frame2 = ["Napis 1 w ramce 2", "Napis 2 w ramce 2"]
        texts_frame3 = ["Napis 1 w ramce 3", "Napis 2 w ramce 3"]




            # Liczba ramek
        num_frames = int(naIleDniCombobox.get())
        
        # Dodajemy ramki do grid i ustawiamy je, aby były równej szerokości
        for i, texts in enumerate([texts_frame1, texts_frame2, texts_frame3]):
            frame = RecipeFrame(mainFrame, text_list=texts)
            
            # Ustawiamy każdą ramkę w jednej kolumnie, ale różnym wierszu
            frame.grid(row=0, column=i, sticky="nsew")
        
        # Ustawiamy, aby kolumny miały równą szerokość
        for i in range(num_frames):
            mainFrame.grid_columnconfigure(i, weight=1)

        # Ustawiamy, aby wiersz miał równą wysokość
        mainFrame.grid_rowconfigure(0, weight=1)





