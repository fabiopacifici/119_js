# Instructions

Creare un programma che dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65 (fortunelli :older_adult:).

L'output del prezzo finale va messo fuori in forma umana (con massimo due cifre decimali, per indicare centesimi sul prezzo).

## Pseudo code

- Add a prompt to get the km number from the user
- Add a prompt to get the age from the user
- Calculate the standard ticket price (km*0.21)
- IF user age is less than 18
  - apply a 20% discount
- ELSE IF user age is greater than 65
  - apply 40% discount
- ELSE (x)
  - apply the standard price
- Print the ticket price into the console

## tools

- propt x2
- const/let
- Number()
- if/else if/else
- toFixed(2)
