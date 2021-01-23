# NOTES

## Wat is een automated test?

- Een programma waarmee je kan testen of je code doet wat je verwacht

## Wat zijn de voordelen van automated tests / handmatig testen?

Mensen handmatig laten testen

- (+) Mensen zijn slim & flexibel
- (+) Mensen kunnen feedback geven over de gebruikservaring
- (-) Duur, want mensen zijn duur
- (-) Testen kan saai werk zijn
- (-) Langzaam (minuten, uren)

Automatisch testen

- (-) Computers zijn dom, ze doen alleen wat je zegt
- (-) Kunnen alleen kijken of iets wel of niet het geval is
- (-) Duur, want developers moeten de testen schrijven
- (+) Goedkoop om de testen uit te voeren, want computers zijn goedkoop
- (+) Snel (milliseconden, seconden)
- (+) Snel & Goedkoop betekent dat je vaak kan testen (als je saved bijv.)

Samenvatting:

- Automatische testen schrijven is een investering in de toekomst
- Het komt de stabiliteit van je app op de lange termijn ten goede
- Handmatig testen is nog steeds een goed idee (maar dan gericht op UX)

Extra voordelen van automatisch testen

- Als je je code goed getest hebt kom je er snel achter
  wanneer je iets per ongeluk hebt stukgemaakt
- Op die manier komt het minder vaak voor dat iets
  "niet meer werkt" (je voorkomt regressie)
- Heel handig om oefeningen mee te maken / doen
  wanneer je nog aan het leren programmeren

## Jest

Jest is een testing framework voor JavaScript

Jest bevat

- Functies die je code uitvoeren
- Functies waarmee je kan checken of je code doet wat je verwacht
- Ingebouwde commandos om al je testen uit te voeren (vanuit de terminal)
- Maakt reportjes met welke testen geslaagd zijn en welke niet
- Nog veel meer ...

[DOCS](https://jestjs.io/docs/en/getting-started)

## Opzetten

1. `npm init`
2. `npm install -D jest`
3. (optioneel) git init -> node_modules in een .gitignore
4. Maak een bestandje met .test.js als extensie
5. Dan schrijf een test functie (voorbeeld)
6. `npx jest` om de testen te runnen
7. Voeg scripts toe aan je package.json
8. `npx jest --watch` -> runnen de testen bij een verandering
9. CTRL + C om de testen te stoppen in de terminal
