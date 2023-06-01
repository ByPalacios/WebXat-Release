# WebApp

Aplicació web de missatgeria online instantania.
La webapp esta construida amb Node.js i Socket.io dins de contenidors Docker.

## Estructura Contenidors

**Client:** Node.js, Express, Nodemon, Socket.io-Cli,

**Server:** Node.js, Express, Nodemon, Socket.io, mysql, CookieParser, ExpressSession

## Images: 

### Design: 
![image (2)](https://github.com/ByPalacios/WebXat-Release/blob/d958d8d924312e6b4fab3e5cf40915962dae0071/readme/login.png) 
![image](https://github.com/ByPalacios/WebXat-Release/blob/d958d8d924312e6b4fab3e5cf40915962dae0071/readme/register.png) 
![Captura de pantalla 2023-06-01 134114](https://github.com/ByPalacios/WebXat-Release/blob/d958d8d924312e6b4fab3e5cf40915962dae0071/readme/chat-design.png) 

### Gifs 
Animation: 
![Vídeo sin título ‐ Hecho con Clipchamp (2)](https://github.com/ByPalacios/WebXat-Release/blob/d958d8d924312e6b4fab3e5cf40915962dae0071/readme/gif-animation.gif) 

### Search Tool: 
![Vídeo sin título ‐ Hecho con Clipchamp (3)](https://github.com/ByPalacios/WebXat-Release/blob/d958d8d924312e6b4fab3e5cf40915962dae0071/readme/search-tool.gif) 

### Adding an Image: 
![Vídeo sin título ‐ Hecho con Clipchamp (4)](https://github.com/ByPalacios/WebXat-Release/blob/d958d8d924312e6b4fab3e5cf40915962dae0071/readme/file-upload.gif)

## Pre-Requisits

Es necessari tenir instal·lat docker i python per el correcte funcionament de la contrucció dels contenidors.

```bash
  sudo apt install docker python
  git clone https://github.com/ByPalacios/WebXat-Release
```

## Instal·lació

Es necessari tenir instal·lat docker i python per el correcte funcionament de la contrucció dels contenidors.

### For Windows:

```bash
  cd WebXat
  python run.py
```

### For Linux & macOS (UNIX):

```bash
  cd WebXat
  python run-linux.py
```

# Color Reference

| Color       | Hex                                                              |
| ----------- | ---------------------------------------------------------------- |
| Lila Clar   | ![#9B00FF](https://via.placeholder.com/10/9B00FF?text=+) #9B00FF |
| Lila Fosc   | ![#7500C0](https://via.placeholder.com/10/7500C0?text=+) #7500C0 |
| Gris Oscur  | ![#282c34](https://via.placeholder.com/10/282c34?text=+) #282c34 |
| Shadow Gray | ![#595959](https://via.placeholder.com/10/595959?text=+) #595959 |

# Documentació

## Add Data Firebase Database Template

### Afegir un document a la BD de Firebase

```js
import { doc, setDoc } from "firebase/firestore";

// Add a new document in collection "cities"
await setDoc(doc(db, "cities", "LA"), {
  name: "Los Angeles",
  state: "CA",
  country: "USA",
});
```

### Tipus de dades que es poden inserir a la DB i com

```js
import { doc, setDoc, Timestamp } from "firebase/firestore";

const docData = {
  stringExample: "Hello world!",
  booleanExample: true,
  numberExample: 3.14159265,
  dateExample: Timestamp.fromDate(new Date("December 10, 1815")),
  arrayExample: [5, true, "hello"],
  nullExample: null,
  objectExample: {
    a: 5,
    b: {
      nested: "foo",
    },
  },
};
await setDoc(doc(db, "data", "one"), docData);+-
```

## Update Data Firebase Database Template

```js
await updateDoc(doc(db, "chats", data.chatId), {
  messages: arrayUnion({
    id: uuid(),
    text,
    senderId: currentUser.uid,
    date: Timestamp.now(),
  }),
});
```

## Delete Data Firebase Database Template

### Delete a Collection

```js
import { doc, deleteDoc } from "firebase/firestore";

await deleteDoc(doc(db, "cities", "DC"));
```

### Delete a Field from Collection

```js
import { doc, updateDoc, deleteField } from "firebase/firestore";

const cityRef = doc(db, "cities", "BJ");

// Remove the 'capital' field from the document
await updateDoc(cityRef, {
  capital: deleteField(),
});
```

## Metodes/Functions/Accions JS | Node | React

### UseState()

#### Descripcio

```js
El mètode useState() és un hook de React que us permet afegir estat a un component funcional a React. L'estat és qualsevol dada que canvia al llarg del temps i que pot afectar com es renderitza un component.

El mètode useState() pren un valor inicial i torna una matriu que conté dos elements: el valor actual de l'estat i una funció que es fa servir per actualitzar el valor de l'estat.
```

#### Declaració

```js
import { useState } from 'react';

function MyComponent() {
  const [age, setAge] = useState(28);
  const [name, setName] = useState('Taylor');
  const [todos, setTodos] = useState(() => createTodos());
  // ...
```

#### Exemples;

**Exemple 1;**

```js
import React, { useState } from "react";

function EjemploComponente() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Has hecho clic {count} veces</p>
      <button onClick={() => setCount(count + 1)}>Haz clic aquí</button>
    </div>
  );
}
```

**Explicació;**

```js
En aquest exemple, estem utilitzant useState() per afegir estat a un component funcional anomenat ExempleComponent. La matriu que es retorna conté dos elements: count, que és el valor actual de l'estat (inicialitzat a 0) i setCount, que és una funció que s'utilitza per actualitzar el valor de count.

Quan l'usuari fa clic al botó, truquem a setCount() i li passem el nou valor de count (que és count + 1). Això actualitza l'estat i fa que React torni a renderitzar el component amb el valor de count nou.
```

**Exemple 2;**

```js
const [name, setName] = useState('Edward');

function handleClick() {
  setName('Taylor');
  setAge(a => a + 1);
  // ...
```

### UseEffect()

#### Descripcio

```js
S'utilitza per fer efectes secundaris en components funcionals.
Els efectes secundaris són accions que es fan fora de l'àmbit del component i que poden
afectar l'estat de l'aplicació.

El mètode useEffect() s'executa després que el component s'hagi renderitzat per primer cop
i després de cada actualització. Pren dos arguments: una funció d'efecte i una llista de dependències opcionals.

La funció d'efecte és una funció que s'executarà cada cop que es renderitzi el component.
Aquesta funció pot realitzar qualsevol acció que no afecti el renderitzat del component,
com ara actualitzar el títol de la pàgina, fer una sol·licitud de xarxa o modificar l'estat d'altres components.
```

#### Exemples;

```js
import React, { useState, useEffect } from "react";

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

**Explicació;**

```js
En aquest exemple, estem utilitzant useEffect() per actualitzar el títol
de la pàgina amb el nombre de clics que s'han fet al botó. La funció defecte actualitza el
títol cada vegada que canvia el valor de count. La llista de dependències [count]
indica a React que només heu de tornar a executar la funció d'efecte si el valor de count ha canviat.
```

### UseRef()

#### Descripcio

```js
S'utilitza per crear una referència mutable a un element del DOM oa un valor que persisteix
durant tota la vida del component.

La referència es crea mitjançant la trucada a useRef() i es pot assignar a una variable.
A continuació, es pot utilitzar aquesta variable per accedir a l'element del DOM o
per emmagatzemar i accedir a un valor que persisteixi al llarg de les renderitzacions del component.
```

#### Exemples;

```js
import React, { useRef } from "react";

function EjemploComponente() {
  const inputRef = useRef(null);

  function focusInput() {
    inputRef.current.focus();
  }

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={focusInput}>Foco en el input</button>
    </div>
  );
}
```

**Explicació;**

```js
En aquest exemple, utilitzem useRef() per crear una referència a l'element de l'input.
La referència està assignada a la variable inputRef. A continuació, utilitzem aquesta
referència a la funció focusInput() per fer que l'input tingui el focus quan es fa clic al botó.
```

### UseContext()

#### Descripcio

```js
S'utilitza per accedir al context d'un component. El context és una manera de passar
dades entre components sense haver de passar explícitament les props dun component a un altre.

Per utilitzar el context en un component, primer cal crear un objecte de context utilitzant
la funció createContext() de React. A continuació, podeu proporcionar un valor per defecte
per al context utilitzant la funció Provider de l'objecte de context. Per acabar, es pot
accedir al valor del context en qualsevol component fill utilitzant useContext().
```

#### Exemples;

```js
import React, { createContext, useContext } from "react";

const MiContexto = createContext("valor predeterminado");

function ComponenteHijo() {
  const valorContexto = useContext(MiContexto);

  return <p>El valor del contexto es: {valorContexto}</p>;
}

function ComponentePadre() {
  return (
    <MiContexto.Provider value="valor del contexto">
      <ComponenteHijo />
    </MiContexto.Provider>
  );
}
```

**Explicació;**

```js
En este ejemplo, estamos creando un objeto de contexto MiContexto utilizando createContext()
y proporcionando un valor predeterminado de 'valor predeterminado'. A continuación, estamos
utilizando Provider para proporcionar un valor de 'valor del contexto' al componente hijo
ComponenteHijo. Dentro de ComponenteHijo, estamos utilizando useContext() para acceder al
valor del contexto y mostrarlo en un párrafo.
```

## Chats.jsx

### OnSnapshot()

```js
onSnapshot es una llibreria importada de firebase/firestore on agafem la db,
i entrem a la col·lecció de userChats i agafem els chats que continguin missatges de la id del usuari.
El currentUser es una variable, que conté la id del usuari que la agafa quan fa log in a la app.
```

### currentUser.uid && getChats();

```js
    Si currentUser.uid és veritable, llavors la funció getChats s'anomena, el que significa que s'obtindran i actualitzaran
    els xats de l'usuari actual a l'aplicació.

    Si currentUser.uid és fals (o no té un valor definit), aleshores la funció getChats no es trucarà i no es realitzarà cap
    actualització dels xats de l'usuari a l'aplicació.

    En resum, aquesta línia de codi s'utilitza per garantir que els xats de l'usuari s'obtinguin només si hi ha un usuari
    actual definit a l'aplicació.
```

### }, [currentUser.uid]);

```bash
    Aquest és el segon paràmetre del hook useEffect, que és una matriu de dependències.

    L'useEffect s'executarà cada cop que una de les dependències de la matriu canviï.
    En aquest cas, la dependència és currentUser.uid, que és la identificació de lusuari actual.

    Això significa que cada vegada que canvieu currentUser.uid (per exemple, quan l'usuari inicia sessió o tanca sessió),
    l'useEffect s'executarà de nou i s'actualitzaran els xats de l'usuari en conseqüència.

    Quan especifiqueu aquesta dependència, l'useEffect s'executarà només quan sigui necessari, cosa que ajuda a evitar
    trucades innecessàries a la base de dades ia millorar el rendiment de l'aplicació.
```

### const handleSelect = (u) => { dispatch({ type: "CHANGE_USER", payload: u });

```
La funció pren un paràmetre "u", que és l'usuari seleccionat, i utilitza el mètode dispatch per enviar una acció al store de Redux.

L'acció té un type "CHANGE_USER" i un payload "u", que és l'usuari seleccionat.

Aquesta funció s'utilitza típicament en una llista d'usuaris on l'usuari pot seleccionar un usuari específic per interactuar-hi
(per exemple, en una aplicació de missatgeria).

En enviar una acció al store de Redux, s'actualitza l'estat global de l'aplicació amb la informació de l'usuari seleccionat,
cosa que permet que altres components accedeixin a aquesta informació i n'actualitzin el contingut en conseqüència.
```

## Input.jsx

### ref()

```js
ref() -> La funció ref() és una funció proporcionada pel Firebase Storage que retorna una referència a un objecte d'emmagatzematge específic.
En aquest cas, ref() pren dos arguments: el primer és l'objecte d'emmagatzematge del Firebase i el segon és el nom del fitxer que voleu crear.
El nom del fitxer és generat aleatòriament usant la funció uuid(), que torna un UUID (identificador únic universal) en forma de cadena.
```

### uploadBytesResumable()

```js
Pren dos arguments: el primer és la referència a l'objecte d'emmagatzematge que es vol carregar (en aquest cas, storageRef) i el segon és un
objecte Blob o File que conté els bytes de les dades que es carregaran. En aquest cas, l'objecte Blob o File es proporciona com a valor de
la variable img.
```
