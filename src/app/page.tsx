'use client'
import { useState } from "react";
export default function Home() {
  const [counter, setCounter] = useState(0);
  return (
    <>
    <div className="flex justify-center p-2 content-center">
      <button className=" border p-2 bg-slate-400 rounded-lg" onClick={()=>setCounter(counter+1)}>Counter - {counter}</button>
      </div>
    </>
  );
}
