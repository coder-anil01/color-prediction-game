import React, { useEffect } from 'react'
import dip1 from "../music/di1.mp3";
import dip2 from "../music/di2.mp3";

const MusicPlayWin = ({time}) => {

  const audio = new Audio(dip1);
  const audio2 = new Audio(dip2);

    useEffect(() => {
      if(time <= 5 && time >=1){
        audio.play().catch((err) => {
          console.error("Error playing audio:", err);
        });
      }
      if(time == 30 || time == 0){
        audio2.play().catch((err) => {
          console.error("Error playing audio:", err);
        });
      }
    }, [time, audio]);

  return (
    <>
      <iframe allow="autoplay"hidden/>
    </>
  )
}

export default MusicPlayWin;
