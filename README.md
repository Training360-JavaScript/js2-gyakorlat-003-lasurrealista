# Obejct Destructuring

## NAGYON FONTOS!!!
- A könnyebb tesztelhetőség érdekében az elkészített függvényeket és változókat 
exportálni kell!
- Függvények esetén egy példa:
```javascript
export default objectsMerge;
```
- Változók esetén egy példa:
```javascript
export {
  firstName,
  lastName,
  job,
};
```

## 1. Feladat
- Az `solutions/app1.js` fájlban dolgozz!
- Adott az alábbi objektum:
```javascript
    const user = {
        firstName: 'John',
        lastName: 'Doe'
    };
```
- Mentsd el külön lastName, firstName, és job változókba a fenti objektum 
property-jeit destructuring használatával!
- Ha valamelyik nincs megadva, akkor az érték legyen az "unknown" string!

## 2. Feladat
- Az `solutions/app2.js` fájlban dolgozz!
- Adott az alábbi objektum:
```javascript
    const user = {
        firstName: 'John',
        lastName: 'Doe'
    };
```
- Ments el külön `l`, `f`, és `j` változókba a fenti objektum lastName, firstName, és job property-jeit! 
- Ha valamelyik nincs megadva, akkor az érték legyen az "unknown" string!

## 3. Feladat
- Az `solutions/app3.js` fájlban dolgozz!
- Ments el külön, `a`, `b` és `c` nevű változókba az alábbi tömb első, harmadik, és ötödik indexű elemét!
```javascript 
    const names = ['John', 'Jane', 'Judith', 'Jennefer', 'Jeremiah', 'Johnny'];
```
