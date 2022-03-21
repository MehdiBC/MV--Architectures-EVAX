# MV* Architectures: Evax 

This project has been made by Mehdi BEN CHIKHA, Ghassen Daoud and Mouheb Ben chiekh.

## Architectural choice:
we choose to use MVVM (Model View ViewModel) to create the Evax application as our application is susceptible to grow fast and we want to work with TDD (easier to test with MVVM).
We used angular framework to create this application. Angular philosophy is based on Componenet Oriented Architecture where each component manages a specific view as this decomposition helps us to have seperation of concerns vertically (which means that each component encapsulates the logic specific for its view) and MVVM helps us to have seperation of concerns horizentally as we can decompose component into two classes Model and ViewModel (the View is the tamplate associated to ower component).
<br /> 

## Use cases:
The user stories we worked on are: 
* Display all the vaccnation centers
* Filter vaccinantion center by governorate
* Search for vaccination center (searchbox)
* Display user's vaccination pass

<br />
<br />

Display all vaccination centers (no filters)
![alt text](https://github.com/MehdiBC/MV--Architectures-EVAX/blob/main/captures/centre_vacc_no_filter.png)

<br />

Display all vaccination centers (Governorate filter)
![alt text](https://github.com/MehdiBC/MV--Architectures-EVAX/blob/main/captures/centre_vacc_gov.png)

<br />

Display user's vaccination pass
![alt text](https://github.com/MehdiBC/MV--Architectures-EVAX/blob/main/captures/user_page.png)

