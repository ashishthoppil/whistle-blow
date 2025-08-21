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
    <div className='flex items-center justify-center h-screen'>
        <button onClick={whistleHandler} className='lg:block  duration-300 bg-[#df6853]/15 text-[#DF6853] hover:text-white hover:bg-[#DF6853] font-bold text-2xl py-25 px-12 rounded-full hover:cursor-pointer'>
            🔊 Whistle!
        </button>
        <audio ref={audioRef} src="/whistle.mp3" />
    </div>
  )
}
