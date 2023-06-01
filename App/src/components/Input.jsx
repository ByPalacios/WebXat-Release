import React, { useContext, useState } from "react";
import Img from "../img/add-image-1.png";
import sendIcon from '../img/send.png';
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import {
  arrayUnion,
  doc,
  serverTimestamp,
  Timestamp,
  updateDoc,
} from "firebase/firestore";
import { db, storage } from "../firebase";
import { v4 as uuid } from "uuid";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

const Input = () => {
  const [text, setText] = useState("");
  const [img, setImg] = useState(null);

  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  //* Aquesta part del codi, s'emcarrega de agafar el missatge del usuari i enviar-lo
  const handleSend = async () => {

    //* En el cas que s'hagi pujat una foto o el missatge contingui una foto
    //* es pujará aqueta foto al storage amb una uuid generada aleatoriament
    if (img) {

      //* Declarem una constant que defineix un objecte emmagatzemat al Storage de Firebase.
      const storageRef = ref(storage, uuid());

      //* La funció uploadBytesResumable() és una funció proporcionada pel Firebase Storage que inicia una tasca de càrrega de bytes resumible al Firebase Storage.
      const uploadTask = uploadBytesResumable(storageRef, img);

      //* Pujem la imatge al Storage de Firebase
      uploadTask.on(
        (error) => {
          //TODO:Handle Error
        },
        //* Si no hi ha error, es continua
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {

            //* Actualitzem la collection del chat afegint el nou missatge
            await updateDoc(doc(db, "chats", data.chatId), {
              messages: arrayUnion({
                id: uuid(),
                text,
                senderId: currentUser.uid,
                date: Timestamp.now(),
                img: downloadURL,
              }),
            });
          });
        }
      );
    } else {
      //* Si no s'envía cap foto, actualitzem el chat sense passar la foto
      await updateDoc(doc(db, "chats", data.chatId), {
        messages: arrayUnion({
          id: uuid(),
          text,
          senderId: currentUser.uid,
          date: Timestamp.now(),
        }),
      });
    }

    //* A la collection del user, cambiem el últim missatge que surt del chat.
    await updateDoc(doc(db, "userChats", currentUser.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });

    await updateDoc(doc(db, "userChats", data.user.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });

    setText("");
    setImg(null);
  };
  return (
    <div className="input">
      <input
        type="text"
        placeholder="Type something..."
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <div className="send">
        <input
          type="file"
          style={{ display: "none" }}
          id="file"
          onChange={(e) => setImg(e.target.files[0])}
        />
        <label htmlFor="file">
          <img src={Img} alt="" />
        </label>
        {/* Quan fem click, executem la constant que s'encarrega de actualitzar la 
        BD i enviar el missatge */}
        <button onClick={handleSend}>
          <img src={sendIcon} alt="Send" />
        </button>
      </div>
    </div>
  );
};

export default Input;
