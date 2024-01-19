# Autovelox

L'obiettivo dell'esercizio è simulare il lavoro di un rilevatore di velocità posizionato su una strada dove passano automobili, van e camion. Il simulatore ha il compito di valutare se la velocità rilevata dal sensore supera il limite, se il limite è superato allora deve essere aperta una nuova scheda con "la multa". 

### Le immagini
Sono state lasciate tre immagini, ma solo quella dell'automobile è priva di sfondo, vi chiederei di togliere lo sfondo alle altre. Se preferite una moto al van, o altre automobili potete tranquillamente cambiare immagini, devono però essere adatte al simulatore.

### Le classi
Vi chiederei di definire una classe **Mezzo** che abbia due attributi privati **img** e **tipo** che vengono valorizzati nel costruttore. Inoltre, la classe dovrà esporre due proprietà in sola lettura *img* e *limiteVelocita*: la prima ritorna l'immagine inserita attraverso il costruttore e la seconda indica il limite di velocità il base al tipo di veicolo (auto 90, camion 50 e van 70).

### Il server
Il server da realizzare è molto semplice perché deve ritornare le risorse statiche della parte client e un servizio che ritorna un numero casuale da 30 a 150 (dovrà essere calcolato ogni volta, non mettetelo fisso!). 

### La multa
La nuova scheda dovrà presentare un contenuto molto semplice, a me interessa che ci sia il valore della multa calcolato come segue e l'immagine del veicolo "fotografato".
L'importo della multa viene calcolato in questo modo: (numero di km che superano il limite * 30) + 50.

> [!NOTE]
> - Potete modificare il javascript e il css dato
> - Potete usare il dispatcher da noi sviluppato nel server 
