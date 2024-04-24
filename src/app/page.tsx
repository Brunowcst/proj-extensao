'use client'
import Image from "next/image";
import { db } from "../../firebase/firebase";
import { doc, setDoc, addDoc, collection } from "firebase/firestore";
import { useState } from "react";

export default function Home() {
  const [data, setData] = useState("")  
  
  async function name() {
    await addDoc(collection(db, "proj-exten"), {
      name: "Teste",
      phone: "(84) 99999-9999",
      email: "teste123@gmail.com"
    });
  }  

  return (
    <main>
      <button onClick={name}>Enviar</button>
    </main>
  );
}
