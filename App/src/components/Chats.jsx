import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import { db } from "../firebase";

const Chats = () => {
  const [chats, setChats] = useState([]);

  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);

  useEffect(() => {

    // Agafem els chats que tenim emmagatzemats a la Base de Dades, FireBase.
    const getChats = () => {

      /*
      ! Podeu escoltar un document amb el mètode onSnapshot(). 
      ! Una trucada inicial amb la devolució de trucada que proporciones crea una instantània del document immediatament amb els continguts 
      ! actuals del document. Després, cada cop que canvien els continguts, una altra trucada actualitza la instantània del document.
      */
      //TODO ↓↓↓↓↓↓
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {

        //* El resultat de la recerca anterior s'emmagatzema a doc.data(), per tant si volem posar els chats del usuari
        //* hem de cridar la funció setChats.
        setChats(doc.data());
      });

      //* La funció unsub(), el que fa es cancelar la suscripció de les actualitzacions de Firestore.
      return () => {
        unsub();
      };
    };
    currentUser.uid && getChats();
  }, [currentUser.uid]);

  const handleSelect = (u) => {
    dispatch({ type: "CHANGE_USER", payload: u });
  };

  /*
  ! Aquest codi mostra una llista de xats en una pàgina web. Primer, crea un contenidor div amb la classe "xats". 
  ! Després, feu servir la funció Object.entries per obtenir un array dels xats i els ordena per data en ordre descendent 
  ! (el xat més recent apareixerà primer).

  ! Després, per a cada xat a l'array ordenat, es crea un div amb la classe "userChat" i se li assigna una clau única usant la propietat "key". 
  ! Quan l'usuari fa clic al xat, s'anomena la funció handleSelect amb la informació de l'usuari.

  ! Dins del div "userChat", es mostra la foto de l'usuari i la informació del xat, incloent-hi el nom de l'usuari i el text de l'últim 
  ! missatge enviat.
  */
  //TODO ↓↓↓↓↓↓
  return (
    <div className="chats">
      {/* //* Amb el Object.entries obtenir un array de tots els xats del usuari i els ordena per data en ordre descedent. */}
      {Object.entries(chats)?.sort((a,b)=>b[1].date - a[1].date).map((chat) => (
        
        // // //* Per cada xat de l'array se le li assigna una key. I quan es fa click es dona la informació del xat/s'obre el chat.
        <div
          className="userChat"
          key={chat[0]}
          onClick={() => handleSelect(chat[1].userInfo)}
        >
          {/* //TODO Per cada xat de l'array se li assigna i mostra la foto de l'usuari i es mostra el nom i el últim missatge enviat. */}

          {/* //* Foto d'usuari */}
          <img src={chat[1].userInfo.photoURL} alt="" />
          <div className="userChatInfo">
            
            {/* //* UserName */}
            <span>{chat[1].userInfo.displayName}</span>

            {/* //* Últim missatge */}
            <p>{chat[1].lastMessage?.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Chats;
