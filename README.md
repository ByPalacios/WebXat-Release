# WebApp

Instant online messaging webapp.
The webapp is built with Node.js and Socket.io inside Docker containers.

## Container structure

**Client:** Node.js, Express, Nodemon, Socket.io-Cli,

**Server:** Node.js, Express, Nodemon, Socket.io, mysql, CookieParser, ExpressSession

## Pre-Requisites

It is necessary to have docker and python installed for the correct functioning of the container construction.

```bash
  sudo apt install docker python
  git clone https://github.com/ByPalacios/WebXat-Release
```

## Installation

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

| Color        | Hex                                                              |
| ------------ | ---------------------------------------------------------------- |
| Light Purple | ![#9B00FF](https://via.placeholder.com/10/9B00FF?text=+) #9B00FF |
| Dark Purple  | ![#7500C0](https://via.placeholder.com/10/7500C0?text=+) #7500C0 |
| Dark Gray    | ![#282c34](https://via.placeholder.com/10/282c34?text=+) #282c34 |
| Shadow Gray  | ![#595959](https://via.placeholder.com/10/595959?text=+) #595959 |

# Documentation

## Add Data Firebase Database Template

### Adding a document to the Firebase DB

```js
import { doc, setDoc } from "firebase/firestore";

// Add a new document in collection "cities"
await setDoc(doc(db, "cities", "LA"), {
  name: "Los Angeles",
  state: "CA",
  country: "USA",
});
```

### Types of data that can be entered in the DB and how to enter them

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

## Methods/Functions/Actions JS | Node | React

### UseState()

#### Description

```js
The useState() method is a React hook that allows you to add state to a functional component in React.
State is any data that changes over time and can affect how a component is rendered.

The useState() method takes an initial value and returns an array containing two elements: the current state
value and a function used to update the state value.
```

#### Declaration

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

**Explanation;**

```js
In this example, we are using useState() to add state to a functional component called ExempleComponent.
The array returned contains two elements: count, which is the current value of the state (initialized to 0) and setCount,
which is a function used to update the value of count.

When the user clicks the button, we trick setCount() and pass it the new count value (which is count + 1).
This updates the state and causes React to re-render the component with the new count value.
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

#### Description

```js
It is used to make side effects in functional components.
Side effects are actions that are taken out of the scope of the component and can affect the state
of the application.affect the state of the application.

The useEffect() method is executed after the component has been rendered for the first time
and after each update. It takes two arguments: an effect function and a list of optional dependencies.

The effect function is a function that will be executed each time the component is rendered.
This function can perform any action that does not affect the rendering of the component,
such as updating the page title, making a network request, or modifying the state of other components.
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

**Explanation;**

```js
In this example, we are using useEffect() to update the page title with the number of clicks on the button.
of the page with the number of clicks that have been made on the button. The default function updates the
title each time the value of count changes. The dependency list [count]
tells React that you only need to rerun the effect function if the value of count has changed.
```

### UseRef()

#### Description

```js
It is used to create a mutable reference to a DOM element to a value that persists for the lifetime
of the component.throughout the life of the component.

The reference is created by calling useRef() and can be assigned to a variable.
You can then use this variable to access the DOM element or
to store and access a value that persists across renderings of the component.
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

**Explanation;**

```js
In this example, we use useRef() to create a reference to the input element.
The reference is assigned to the variable inputRef. Next, we use this
reference to the focusInput() function to make the input have the focus when the button is clicked.
```

### UseContext()

#### Description

```js
It is used to access the context of a component. Context is a way to pass
data between components without having to explicitly pass props from one component to another.

To use the context in a component, you must first create a context object by using the
the createContext() function of React. Then, you can provide a default value
for the context using the Provider function of the context object. Finally, you can
access the value of the context in any child component using useContext().
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

**Explanation;**

```js
In this example, we are creating a MyContext context object using createContext()
and providing a default value of 'default'. Next, we are
using Provider to provide a value of 'context value' to the child component
ChildComponent. Within the ChildComponent, we are using useContext() to access the context value
and display it in a context value and display it in a paragraph.
```

## Chats.jsx

### OnSnapshot()

```js
onSnapshot is a library imported from firebase/firestore where we take the db,
and go into the userChats collection and grab the chats that contain messages of the user id.
The currentUser is a variable, which contains the id of the user that is taken when logging in to the app.
```

### currentUser.uid && getChats();

```js
    If currentUser.uid is true, then the getChats function is called, which means that the current
    user's chats will be retrieved and updated the current user's chats to the application.

    If currentUser.uid is false (or has no value defined), then the getChats function
    will not be called and no update of the user's chats to the application will be performed update
    of the user's chats to the application will not be performed.

    In summary, this line of code is used to ensure that the user's chats are obtained only
    if there is a current user defined to the application.
```

### }, [currentUser.uid]);

```bash
    This is the second parameter of the hook useEffect, which is an array of dependencies.

    The useEffect will be executed whenever one of the dependencies in the array changes.
     In this case, the dependency is currentUser.uid, which is the current lusuari ID.

    This means that every time you change currentUser.uid (for example, when the user logs in or logs out),
    the useEffect will be executed again and the user's chats will be updated accordingly.

    When you specify this dependency, the useEffect will be executed only when necessary,
    which helps to avoid unnecessary database calls unnecessary database calls and improve application
    performance.
```

### const handleSelect = (u) => { dispatch({ type: "CHANGE_USER", payload: u });

```
The function takes a parameter "u", which is the selected user, and uses the dispatch
method to send an action to the Redux store.

The action has a type "CHANGE_USER" and a payload "u", which is the selected user.

This function is typically used in a list of users where the user can select a specific
user to interact with (e.g. in a messaging application).

When an action is sent to the Redux store, the global state of the application is updated
with the selected user's information

This allows other components to access this information and update the content accordingly.
```

## Input.jsx

### ref()

```js
ref() -> The ref() function is a function provided by Firebase Storage that returns a reference
to a specific storage object. In this case, ref() takes two arguments: the first is the
Firebase Storage object and the second is the name of the file you want to create. The file name
is randomly generated using the uuid() function, which returns a UUID (universally unique identifier) as a string.
```

### uploadBytesResumable()

```js
It takes two arguments: the first one is the reference to the storage object to be loaded
(in this case, storageRef) and the second one is a Blob object containing the bytes of the
data to be loaded. In this case, the Blob object is provided as the value of the the img variable.
```
