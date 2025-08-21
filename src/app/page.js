'use client';
import { useRef } from "react";

export default function Home() {
  const audioRef = useRef(null);

  const whistleHandler = () => {
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        audioRef.current.play();
      }
  }

  return (
    <div className='flex items-center justify-center h-dvh'>
        <button onClick={whistleHandler} className='flex gap-2 items-center justify-center duration-300 bg-[#df6853]/15 text-[#DF6853] hover:text-white hover:bg-[#DF6853] font-bold text-2xl py-24 px-12 rounded-full hover:cursor-pointer'>
            <img src="/blow.png" width={30} height={30} />
            Whistle!
        </button>
        <audio ref={audioRef} src="/whistle.mp3" />
    </div>
  )
}
