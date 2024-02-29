# Consegna

Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: i funghi magici.

// Generare massimo 16 funghi in questi range relativi al livello scelto
// 100 -> min: 1 max: 100 | Totale funghi 16
// 81 -> min: 1 max: 81 |  Totale funghi 16
// 49 -> min: 1 max: 49 |  Totale funghi 16

Attenzione: nella stessa cella può essere posizionato al massimo un fungo, perciò nell’array dei funghi non potranno esserci due numeri uguali.

In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una fungo - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.

La partita termina quando il giocatore clicca su una fungo o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono funghi).

Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una fungo.

BONUS:
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:

- difficoltà 1 ⇒ 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- difficoltà 2 ⇒ 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- difficoltà 3 ⇒ 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

### Milestone 1

// Generare massimo 16 funghi in questi range relativi al livello scelto
// 100 -> min: 1 max: 100 | Totale funghi 16
// 81 -> min: 1 max: 81 |  Totale funghi 16
// 49 -> min: 1 max: 49 |  Totale funghi 16

Attenzione: nella stessa cella può essere posizionato al massimo un fungo, perciò nell’array dei funghi non potranno esserci due numeri uguali.

**Steps**

- create a random numbers function to generate a number between a min and max (using the range 1-100 | 1-81 | 1-49)
- create an empty mushroomsArray
- (while) loop over until the empty array has 16 elements (not repeated)
  - check if the generated random number is included in the mushroomsArray
  - if not push it inside the array

### Milestone 2

In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una fungo - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.

**Steps**

- read the number of the clicked cell
- check if the clicked cell's number is included inside the mushrooms array
- IF true
  - paint the cell to red
  - end the game console.log('end game')
- ELSE
  - paint the cell to blue

### Milestone 3

La partita termina quando il giocatore clicca su una fungo o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono funghi).

Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una fungo.

**Steps**

- keep the count of the clicked cells
- end the game
  - quando il numbero di celle cliccate é uguale al numero di celle totali meno il numero dei funghi hai vinto il gioco.
  - prevent the user from clicking again after the game is over
